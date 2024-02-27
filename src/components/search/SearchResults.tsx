import { component$ } from "@builder.io/qwik";
import type { IBaseFestival } from "~/lib/models/festival";
import { SearchCard } from "../search-card/search-card";

interface SearchCardProps {
  festivals: IBaseFestival[];
}

export const SearchResults = component$<SearchCardProps>(({ festivals }) => {
  return (
    <>
      {festivals.length > 0 && (
        <div class="grid grid-cols-1 gap-y-4 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5">
          {festivals.map((festival) => (
            <SearchCard key={festival.id} festival={festival} />
          ))}
        </div>
      )}
    </>
  );
});
