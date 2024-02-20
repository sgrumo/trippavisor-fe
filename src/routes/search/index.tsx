import type { QRL } from "@builder.io/qwik";
import { $, component$, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";

import { reset, useForm } from "@modular-forms/qwik";
import { SearchInput } from "~/components/input/search-input/search-input";
import { searchFestival } from "~/lib/api/queries";
import { TAGS_OPTIONS } from "~/lib/constants/api/cms";
import { DEFAULT_RADIUS } from "~/lib/constants/generics";
import type { FestivalQueryOptions } from "~/lib/models/api";
import type { Coordinates } from "~/lib/models/festival";
import type { SearchForm } from "~/lib/models/forms";

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

export default component$(() => {
  const coordinates = useStore<Coordinates>({});

  const [searchForm, { Form, Field }] = useForm<SearchForm>({
    loader: useFormLoader(),
  });

  const handleSubmit: QRL<SubmitHandler<SearchForm>> = $(async (values) => {
    const tags = values.tags.array;
    const options: FestivalQueryOptions = {
      ...values,
      tags,
      date: values.date ? values.date.toLocaleDateString() : undefined,
    };
    const res = await searchFestival(options);

    res.allFestivals;
  });

  console.log(searchForm);

  return (
    <div class="p-4">
      <h2>Cerca le tue sagre preferite su Trippavisor&#33;</h2>
      <Form
        onSubmit$={handleSubmit}
        class="grid grid-cols-1 gap-y-4 py-2 lg:grid-cols-3 lg:gap-x-4"
      >
        <Field name="query">
          {(field, props) => (
            <input {...props} placeholder="Parola chiave" type="text" />
          )}
        </Field>
        <SearchInput
          onChangeLocation$={({ latitude, longitude }) => {
            coordinates.latitude = latitude;
            coordinates.longitude = longitude;
            searchForm.dirty = true;
          }}
        />
        <Field name="latitude" type="number">
          {(field, props) => (
            <input {...props} type="hidden" value={coordinates.latitude} />
          )}
        </Field>
        <Field name="longitude" type="number">
          {(_, props) => (
            <input {...props} type="hidden" value={coordinates.longitude} />
          )}
        </Field>
        <label
          class={`${coordinates.latitude && coordinates.longitude ? "visible" : "hidden lg:invisible lg:block"}`}
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
          {(field, props) => (
            <input {...props} placeholder="Data" type="date" />
          )}
        </Field>
        <button
          class="flex items-center justify-center rounded-2xl bg-black p-4 text-white disabled:cursor-not-allowed disabled:bg-slate-500 lg:col-start-2 lg:row-start-2"
          type="submit"
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
            coordinates.latitude = undefined;
            coordinates.longitude = undefined;
          }}
        >
          Reset ricerca
        </button>
      </Form>
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
