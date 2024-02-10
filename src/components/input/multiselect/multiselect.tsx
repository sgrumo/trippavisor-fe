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
      <div class="lg:col-span-2 lg:row-start-4">
        {options.map((option) => {
          const selected = state.selectedValues.includes(option.value);
          return (
            <label class="mr-4 mt-2 text-center" key={option.value}>
              <input
                type="checkbox"
                class="hidden"
                checked={selected}
                onClick$={$(() => {
                  if (selected) {
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
              {selected && " x"}
            </label>
          );
        })}
      </div>
    );
  },
);
