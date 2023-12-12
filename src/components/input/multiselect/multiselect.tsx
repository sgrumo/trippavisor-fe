import type { PropFunction } from "@builder.io/qwik";
import { $, component$, useStore } from "@builder.io/qwik";
import type { MultiselectValue } from "~/lib/models/festival";

interface MultiselectProps {
  options: MultiselectValue[];
  onChangeValues$: PropFunction<(selectedValues: string[]) => void>;
}

export const Multiselect = component$<MultiselectProps>(
  ({ options, onChangeValues$ }) => {
    const state = useStore<{ selectedValues: string[] }>({
      selectedValues: [],
    });

    return (
      <div class="mx-auto max-w-md">
        {options.map((option) => (
          <div
            key={option.value}
            class="mb-2 block rounded-md bg-white p-2 shadow"
          >
            <label>
              <input
                type="checkbox"
                class="mr-2"
                checked={state.selectedValues.includes(option.value)}
                onClick$={$(() => {
                  if (state.selectedValues.includes(option.value)) {
                    state.selectedValues = state.selectedValues.filter(
                      (o) => o !== option.value,
                    );
                  } else {
                    state.selectedValues = [
                      ...state.selectedValues,
                      option.value,
                    ];
                  }
                  const values = state.selectedValues;
                  onChangeValues$(values);
                })}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  },
);
