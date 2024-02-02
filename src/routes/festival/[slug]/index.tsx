import { component$ } from "@builder.io/qwik";
import type {
  DocumentHead,
  StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
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
import type { IFestivalDetail } from "~/lib/models/festival";

const SHARED_MAP_KEY = "single_festival";

export const onGet: RequestHandler = async ({ params, sharedMap }) => {
  const { slug } = params;

  const res = await performRequest<IGetSingleFestival>({
    query: GET_SINGLE_FESTIVAL,
    variables: { slug },
  });

  sharedMap.set(SHARED_MAP_KEY, res.festival);
};

export const useGetFestivalDetail = routeLoader$(({ sharedMap }) => {
  return sharedMap.get(SHARED_MAP_KEY) as IFestivalDetail;
});

export default component$(() => {
  const { value } = useGetFestivalDetail();

  return (
    <>
      <h2>{value.title}</h2>
      <p>{value.description}</p>
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
        }&q=${value.title}&center=${value.geolocation.latitude},${
          value.geolocation.longitude
        }`}
      />
      {value.menus.map((menu) => (
        <PdfViewer key={menu.filename} pdfUrl={menu.url} />
      ))}
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const { allFestivals } = await performRequest<IGetAllFestivalSlugs>({
    query: GET_ALL_FESTIVAL_SLUGS,
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
