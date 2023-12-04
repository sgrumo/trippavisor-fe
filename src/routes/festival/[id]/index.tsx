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
      variables: { title: event.params.id },
    });
    return res.festival;
  },
);

export default component$(() => {
  const { value } = useGetFestivalDetail();

  return (
    <>
      {value.title}
      {value.description}
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
