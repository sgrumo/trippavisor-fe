import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type {
  DocumentHead,
  RequestEventLoader,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import ImgMail from "~/assets/images/shared/icon_mail.svg?jsx";
import ImgTelephone from "~/assets/images/shared/icon_telephone.svg?jsx";
import { Carousel } from "~/components/carousel/carousel";
import { FestivalDetailBanner } from "~/components/festival-detail/festival-detail-banner";
import { PdfViewer } from "~/components/pdf-viewer/pdf-viewer";
import {
  GET_ALL_FESTIVAL_SLUGS,
  GET_SINGLE_FESTIVAL,
} from "~/lib/constants/api/queries";
import { performRequest } from "~/lib/datocms";
import type {
  IGetAllFestivalSlugs,
  IGetSingleFestival,
} from "~/lib/models/cms";

export const useGetFestivalDetail = routeLoader$(
  async (event: RequestEventLoader) => {
    const res = await performRequest<IGetSingleFestival>({
      query: GET_SINGLE_FESTIVAL,
      variables: { slug: event.params.slug },
    });
    return res.festival;
  },
);

export default component$(() => {
  const { params } = useLocation();

  const festivalResource = useResource$(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));

    const res = await performRequest<IGetSingleFestival>({
      query: GET_SINGLE_FESTIVAL,
      variables: { slug: params.slug },
    });

    return res.festival;
  });

  return (
    <>
      <Resource
        value={festivalResource}
        onResolved={(festival) => {
          return (
            <>
              <FestivalDetailBanner festival={festival} />
              <Carousel gallery={festival.gallery} />
              <section class="mt-4 grid grid-cols-1 gap-y-4 px-4">
                <article class="detail-card">
                  <header>
                    <h3 class="detail-card-header">Dettagli</h3>
                  </header>
                  <p>{festival.description}</p>

                  <h4 class="detail-card-secondary-header">Cucina</h4>
                  <div class="detail-tag-container">
                    {festival.tags.map(({ tag }, index, arr) => (
                      <span class="break-words" key={tag}>
                        {tag}
                        {index !== arr.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </article>
                <article class="detail-card">
                  <h3 class="detail-card-header">Menù</h3>
                  {festival.menus.map((menu, index) => (
                    <a
                      key={menu.filename}
                      class="underline"
                      href={menu.url}
                      target="blank"
                    >
                      Scarica il menù {index + 1}
                    </a>
                  ))}
                </article>
                <article class="detail-card">
                  <header>
                    <h3 class="detail-card-header">Contatti</h3>
                  </header>
                  <p class="icon-paragraph">
                    <ImgMail class="icon" />
                    <a href={`mailto:${festival.email}`}>{festival.email}</a>
                  </p>
                  {festival.phoneNumber && (
                    <p class="icon-paragraph">
                      <ImgTelephone class="icon" />
                      <a href={`tel:${festival.phoneNumber}`}>
                        {festival.phoneNumber}
                      </a>
                    </p>
                  )}
                </article>
              </section>
              <article class="hidden lg:block">
                <iframe
                  width="600"
                  height="450"
                  style="border:0"
                  loading="lazy"
                  allowFullscreen={true}
                  onLoad$={() => {
                    console.log("loaded"); // TODO: loader
                  }}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${
                    import.meta.env.PUBLIC_MAPS_API_KEY
                  }&q=${festival.title}&center=${
                    festival.address.coordinates.lat
                  },${festival.address.coordinates.lng}`}
                />
              </article>
              <div class="hidden lg:block">
                {festival.menus.map((menu) => (
                  <PdfViewer key={menu.filename} pdfUrl={menu.url} />
                ))}
              </div>
            </>
          );
        }}
      />
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const bearer = env.get("PUBLIC_DATOCMS_API_TOKEN");

  const { allFestivals } = await performRequest<IGetAllFestivalSlugs>({
    query: GET_ALL_FESTIVAL_SLUGS,
    bearer,
  });

  return {
    params: allFestivals.map(({ slug }) => {
      return { slug };
    }),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const festival = resolveValue(useGetFestivalDetail);
  const meta = festival.seo
    .filter((tag) => tag.attributes !== null)
    .map(({ attributes }) => ({
      property: attributes?.property,
      content: attributes?.content,
    }));

  return { title: festival.title, meta };
};
