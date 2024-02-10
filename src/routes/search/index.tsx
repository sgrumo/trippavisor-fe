import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Multiselect } from "~/components/input/multiselect/multiselect";
import { SearchInput } from "~/components/input/search-input/search-input";
import { SearchCard } from "~/components/search-card/search-card";
import { searchFestival } from "~/lib/api/queries";
import { TAGS_OPTIONS } from "~/lib/constants/api/cms";
import { DEFAULT_RADIUS } from "~/lib/constants/generics";
import type { FestivalQueryOptions } from "~/lib/models/api";
import type { IGetAllFestivals } from "~/lib/models/cms";

const MIN_RADIUS = 5;
const MAX_RADIUS = 100;

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
      search.radius === DEFAULT_RADIUS &&
      (search.tags === undefined || search.tags.length === 0)
    ) {
      console.log("entro qua");
      return Promise.resolve({ allFestivals: [] });
    }

    return searchFestival(search, controller);
  });

  return (
    <div class="p-4">
      <h2>Cerca le tue sagre preferite su Trippavisor&#33;</h2>
      <form class="grid grid-cols-1 gap-y-4 py-2 lg:grid-cols-3 lg:gap-x-4">
        <input
          title="query"
          placeholder="Parola chiave"
          type="text"
          value={search.query}
          onInput$={(e) =>
            (search.query = (e.target as HTMLInputElement).value)
          }
        />
        <SearchInput
          onChangeLocation$={({ latitude, longitude }) => {
            search.latitude = latitude;
            search.longitude = longitude;
          }}
        />

        <label
          class={`${search.latitude !== undefined && search.longitude !== undefined ? "visible" : "hidden lg:invisible lg:block"}`}
        >
          Raggio &#40;in km&#41;&#58;
          <input
            title="radius"
            type="range"
            min={MIN_RADIUS}
            max={MAX_RADIUS}
            value={search.radius}
            onChange$={(e) =>
              (search.radius = parseInt((e.target as HTMLInputElement).value))
            }
          />
          {search.radius}
        </label>
        <input
          title="data"
          placeholder="Data"
          type="date"
          onChange$={(e) => {
            search.date = (e.target as HTMLInputElement).value;
          }}
        />
        {/* <button
          class="flex items-center justify-center rounded-2xl bg-black p-4 text-white lg:col-start-2 lg:row-start-2"
          type="submit"
        >
          Cerca
        </button> */}
        <Multiselect
          options={TAGS_OPTIONS}
          onChangeValues$={(values) => {
            search.tags = values;
          }}
        />
        <button
          class="text-left font-semibold text-green underline lg:col-start-2 lg:row-start-2"
          onClick$={() => {
            search.latitude = undefined;
            search.longitude = undefined;
            search.query = undefined;
            search.date = undefined;
            search.radius = DEFAULT_RADIUS;
          }}
          type="reset"
        >
          Reset ricerca
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
            <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5">
              {data.allFestivals.map((festival) => (
                <SearchCard festival={festival} key={festival.title} />
              ))}
            </div>
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
