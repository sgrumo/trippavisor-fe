import { component$ } from "@builder.io/qwik";
import type { RequestEventLoader } from "@builder.io/qwik-city";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { GET_SINGLE_FESTIVAL } from "~/lib/constants/api/queries";
import { performRequest } from "~/lib/datocms";
import type { IGetSingleFestival } from "~/lib/models/cms";

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
  const { value } = useGetFestivalDetail();

  return (
    <>
      <h2>{value.title}</h2>
      <p>{value.description}</p>
      <iframe
        width="600"
        height="450"
        style="border:0"
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.PUBLIC_MAPS_API_KEY
        }&q=${value.title}&center=${value.geolocation.latitude},${
          value.geolocation.longitude
        }`}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
