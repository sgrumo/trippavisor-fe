import type { QRL } from "@builder.io/qwik";
import { $, component$, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";

import { reset, useForm } from "@modular-forms/qwik";
import { SearchInput } from "~/components/input/search-input/search-input";
import { SearchCard } from "~/components/search-card/search-card";
import { searchFestival } from "~/lib/api/queries";
import { TAGS_OPTIONS } from "~/lib/constants/api/cms";
import { DEFAULT_RADIUS } from "~/lib/constants/generics";
import type { FestivalQueryOptions } from "~/lib/models/api";
import type { IBaseFestival } from "~/lib/models/festival";
import { type Coordinates } from "~/lib/models/festival";
import { type SearchForm } from "~/lib/models/forms";

const INITIAL_VALUES = {
  latitude: undefined,
  longitude: undefined,
  query: undefined,
  range: DEFAULT_RADIUS,
  date: undefined,
  tags: { boolean: false, array: [] },
};

export const useFormLoader = routeLoader$<InitialValues<SearchForm>>(
  () => INITIAL_VALUES,
);
type SearchStore = {
  coordinates: Coordinates;
  festivals: IBaseFestival[];
  loading: boolean;
};

export default component$(() => {
  const store = useStore<SearchStore>({
    coordinates: {},
    loading: false,
    festivals: [],
  });

  const [searchForm, { Form, Field }] = useForm<SearchForm>({
    loader: useFormLoader(),
  });

  const handleSubmit: QRL<SubmitHandler<SearchForm>> = $(async (values) => {
    store.loading = true;

    const tags = values.tags.array;
    const options: FestivalQueryOptions = {
      ...values,
      tags,
      date: values.date ? values.date.toLocaleDateString() : undefined,
    };
    const res = await searchFestival(options);
    store.festivals = res.allFestivals;
    store.loading = false;
  });

  return (
    <div class="p-4">
      <h2>Cerca le tue sagre preferite su Trippavisor&#33;</h2>
      <Form
        onSubmit$={handleSubmit}
        class="grid grid-cols-1 gap-y-4 py-2 lg:grid-cols-3 lg:gap-x-4"
      >
        <Field name="query">
          {(_, props) => (
            <input {...props} placeholder="Parola chiave" type="text" />
          )}
        </Field>
        <SearchInput
          onChangeLocation$={({ latitude, longitude }) => {
            store.coordinates.latitude = latitude;
            store.coordinates.longitude = longitude;
            searchForm.dirty = true;
          }}
        />
        <Field name="latitude" type="number">
          {(_, props) => (
            <input
              {...props}
              type="hidden"
              value={store.coordinates.latitude}
            />
          )}
        </Field>
        <Field name="longitude" type="number">
          {(_, props) => (
            <input
              {...props}
              type="hidden"
              value={store.coordinates.longitude}
            />
          )}
        </Field>
        <label
          class={`${store.coordinates.latitude && store.coordinates.longitude ? "visible" : "hidden lg:invisible lg:block"}`}
        >
          Raggio &#40;in km&#41;&#58;
          <Field name="range" type="number">
            {(field, props) => (
              <>
                <input {...props} type="range" />
                {field.value}
              </>
            )}
          </Field>
        </label>
        <Field name="date" type="Date">
          {(_, props) => <input {...props} placeholder="Data" type="date" />}
        </Field>
        <button
          class="flex items-center justify-center rounded-2xl bg-black p-4 text-white disabled:cursor-not-allowed disabled:bg-slate-500 lg:col-start-2 lg:row-start-2"
          type="submit"
          data-umami-event="Search button"
          data-umami-event-query={searchForm.internal.fields.query?.value}
          data-umami-event-date={searchForm.internal.fields.date?.value}
          data-umami-event-range={searchForm.internal.fields.range?.value}
          data-umami-event-geolocation={`Lat: ${searchForm.internal.fields.latitude?.value} Long: ${searchForm.internal.fields.longitude?.value}`}
          data-umami-event-tags={
            searchForm.internal.fields["tags.array"]?.value
          }
          disabled={!searchForm.dirty}
        >
          Cerca
        </button>
        <div class="lg:col-span-2 lg:row-start-4">
          {TAGS_OPTIONS.map(({ label, value }) => (
            <Field key={value} name="tags.array" type="string[]">
              {(field, props) => (
                <label class="mr-4 mt-2 text-center">
                  <input
                    {...props}
                    class="hidden"
                    type="checkbox"
                    value={value}
                    checked={field.value?.includes(value)}
                  />
                  {label}
                </label>
              )}
            </Field>
          ))}
        </div>
        <button
          class="text-left font-semibold text-green underline lg:col-start-2 lg:row-start-3"
          type="reset"
          onClick$={() => {
            reset(searchForm, {});
            store.coordinates.latitude = undefined;
            store.coordinates.longitude = undefined;
          }}
        >
          Reset ricerca
        </button>
      </Form>
      {store.loading && <>Caricamento...</>}
      {store.festivals.length > 0 && (
        <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5">
          {store.festivals.map((festival) => (
            <SearchCard key={festival.id} festival={festival} />
          ))}
        </div>
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Trippavisor | Search",
  meta: [
    {
      name: "description",
      content: "Ricerca le tue sagre preferite",
    },
    {
      property: "og:title",
      content: "Trippavisor | Search",
    },
    {
      property: "og:description",
      content: "Il portale definitivo per le sagre",
    },
    {
      property: "twitter:title",
      content: "Trippavisor | Search",
    },
    {
      property: "twitter:description",
      content: "Ricerca le tue sagre preferite",
    },
  ],
};
