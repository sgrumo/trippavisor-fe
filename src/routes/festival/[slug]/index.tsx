import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type {
  DocumentHead,
  RequestEventLoader,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
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
              <h2>{festival.title}</h2>
              <p>{festival.description}</p>
              {/* <Carousel gallery={value.gallery} /> */}
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
                }&q=${festival.title}&center=${festival.geolocation.latitude},${
                  festival.geolocation.longitude
                }`}
              />
              {festival.menus.map((menu) => (
                <PdfViewer key={menu.filename} pdfUrl={menu.url} />
              ))}
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
