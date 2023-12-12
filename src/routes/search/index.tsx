import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Multiselect } from "~/components/input/multiselect/multiselect";
import { SearchInput } from "~/components/input/search-input/search-input";
import { searchFestival } from "~/lib/api/queries";
import { TAGS_OPTIONS } from "~/lib/constants/api/cms";
import { DEFAULT_RADIUS } from "~/lib/constants/generics";
import type { FestivalQueryOptions } from "~/lib/models/api";
import type { IGetAllFestivals } from "~/lib/models/cms";

export default component$(() => {
  const search = useStore<FestivalQueryOptions>({ radius: DEFAULT_RADIUS });

  const festivals = useResource$<IGetAllFestivals>(({ track, cleanup }) => {
    track(() => [
      search.date,
      search.query,
      search.longitude,
      search.latitude,
      search.radius,
      search.tags,
    ]);

    const controller = new AbortController();
    cleanup(() => controller.abort());

    if (
      search.date === undefined &&
      search.longitude === undefined &&
      search.latitude === undefined &&
      search.query === undefined &&
      (search.tags === undefined || search.tags.length === 0)
    )
      return Promise.resolve({ allFestivals: [] });

    return searchFestival(search, controller);
  });

  return (
    <div>
      <form class="grid grid-cols-2">
        <label>
          OHI LA QUERY STRING
          <input
            type="text"
            value={search.query}
            onChange$={(event) => (search.query = event.target.value as string)}
          />
        </label>

        <SearchInput
          onChangeLocation$={({ latitude, longitude }) => {
            search.latitude = latitude;
            search.longitude = longitude;
          }}
        />
        <label>
          RADIUS
          <input
            class="px-5"
            type="number"
            value={search.radius}
            onChange$={(e) => (search.radius = parseInt(e.target.value))}
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
        <label>
          TAGS
          <Multiselect
            options={TAGS_OPTIONS}
            onChangeValues$={(values) => {
              search.tags = values;
            }}
          />
        </label>

        <button
          onClick$={() => {
            search.latitude = undefined;
            search.longitude = undefined;
            search.radius = DEFAULT_RADIUS;
            search.query = undefined;
            search.date = undefined;
          }}
          type="reset"
        >
          Clear filters
        </button>
      </form>
      <Resource
        value={festivals}
        onRejected={(error) => <>{error}</>}
        onResolved={(data) => (
          <>
            {(data.allFestivals.length === 0 && search.date !== undefined) ||
              (search.longitude === undefined &&
                search.latitude === undefined) ||
              (search.tags !== undefined && search.tags.length > 0) ||
              (search.query === undefined && (
                <span>La tua ricerca non ha prodotto risultati</span>
              ))}
            {data.allFestivals.length === 0 &&
              search.date === undefined &&
              search.longitude === undefined &&
              search.latitude === undefined &&
              search.query === undefined &&
              search.tags === undefined && (
                <span>Metti qualcosa per cercare la tua sagra preferita</span>
              )}
            <ul>
              {data.allFestivals.map((festival) => (
                <li key={festival.id}>
                  <a href={`/festival/${festival.slug}`}>{festival.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}
        onPending={() => <>Loading...</>}
      />
    </div>
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
