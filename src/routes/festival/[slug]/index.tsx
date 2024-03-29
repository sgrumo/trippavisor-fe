import { component$ } from "@builder.io/qwik";
import type {
  DocumentHead,
  RequestEventLoader,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Carousel } from "~/components/festival-detail/carousel/carousel";
import { ContactCard } from "~/components/festival-detail/contact.card";
import { DetailCard } from "~/components/festival-detail/detail-card";
import { FestivalDetailBanner } from "~/components/festival-detail/festival-detail-banner";
import { MapCard } from "~/components/festival-detail/map-card";
import { MenuCard } from "~/components/festival-detail/menu-card";
import { PdfViewer } from "~/components/festival-detail/pdf-viewer/pdf-viewer";
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
    const bearer = event.env.get("DATOCMS_API_TOKEN");

    const res = await performRequest<IGetSingleFestival>({
      query: GET_SINGLE_FESTIVAL,
      variables: { slug: event.params.slug },
      bearer,
    });
    return res.festival;
  },
);

export default component$(() => {
  const { value } = useGetFestivalDetail();

  return (
    <>
      <FestivalDetailBanner festival={value} />
      <Carousel gallery={value.gallery} />
      <section class="mt-4 grid grid-cols-1 gap-y-4 px-4 lg:grid-cols-2 lg:gap-x-4 lg:px-16">
        <DetailCard festival={value} />
        <MenuCard festival={value} />
        <ContactCard festival={value} />
        <MapCard festival={value} />
        <div class="detail-card col-span-2 hidden lg:flex">
          <h3 class="detail-card-header">Menù, programmi e altro!</h3>
          <div class="menu-container grid grid-cols-2 gap-x-4">
            {value.menus.map((menu) => (
              <PdfViewer key={menu.filename} pdfUrl={menu.url} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async ({ env }) => {
  const bearer = env.get("DATOCMS_API_TOKEN");

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
