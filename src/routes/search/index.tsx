import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { searchFestival } from "~/lib/api/queries";
import type { IGetAllFestivals } from "~/lib/models/cms";

export default component$(() => {
  const search = useStore({ query: "", date: "", tags: ["vegetariano"] });

  const festivals = useResource$<IGetAllFestivals>(({ track, cleanup }) => {
    track(() => [search.date, search.query]);

    const controller = new AbortController();
    cleanup(() => controller.abort());

    return searchFestival(search);
  });

  return (
    <form>
      <label>
        OHI LA QUERY STRING
        <input
          type="text"
          value={search.query}
          onChange$={(event) => (search.query = event.target.value as string)}
        />
      </label>
      <label>
        OHI LA DATA
        <input
          type="date"
          onChange$={(event) => {
            search.date = event.target.value;
          }}
        />
      </label>
      <Resource
        value={festivals}
        onRejected={(error) => <>{error}</>}
        onResolved={(data) => (
          <ul>
            {data.allFestivals.map((festival) => (
              <li key={festival.id}>
                <a href={`/festival/${festival.title}`}>{festival.title}</a>
              </li>
            ))}
          </ul>
        )}
        onPending={() => <>Loading...</>}
      />
    </form>
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
