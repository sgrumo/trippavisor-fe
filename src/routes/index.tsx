import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { GET_ALL_FESTIVALS } from "~/lib/constants/queries";
import { performRequest } from "~/lib/datocms";
import type { IGetAllFestivals } from "~/lib/models/cms";


export const useGetAllFestivals = routeLoader$(async () => {
    const res = await performRequest<IGetAllFestivals>({ query: GET_ALL_FESTIVALS });
    return res.allFestivals;
});

export default component$(() => {

    const { value } = useGetAllFestivals();

    return (
          <ul>
            {value.map(festival => <li key={festival.id}>
                <a href={`/festival/${festival.title}`}>{festival.title}
                </a>
            </li>)}
          </ul>
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
