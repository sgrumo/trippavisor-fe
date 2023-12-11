import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SearchInput } from "~/components/search-input/search-input";
import { searchFestival } from "~/lib/api/queries";
import type { FestivalQueryOptions } from "~/lib/models/api";
import type { IGetAllFestivals } from "~/lib/models/cms";

export default component$(() => {
  const search = useStore<FestivalQueryOptions>({});

  const festivals = useResource$<IGetAllFestivals>(({ track, cleanup }) => {
    track(() => [search.date, search.query, search.localization]);

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
      <SearchInput
        onChangeLocation$={(location) => {
          search.localization = { ...location, radius: 30 };
        }}
      />
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
          <>
            {data.allFestivals.length === 0 && (
              <span>La tua ricerca non ha prodotto risultati</span>
            )}
            <ul>
              {data.allFestivals.map((festival) => (
                <li key={festival.id}>
                  <a href={`/festival/${festival.title}`}>{festival.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}
        onPending={() => <>Loading...</>}
      />
      <button
        onClick$={() => {
          search.localization = undefined;
          search.query = undefined;
          search.date = undefined;
        }}
        type="reset"
      >
        Clear filters
      </button>
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
