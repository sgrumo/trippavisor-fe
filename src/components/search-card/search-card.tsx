import { component$ } from "@builder.io/qwik";
import type { IBaseFestival } from "~/lib/models/festival";
import { formatDateRange } from "~/lib/utils/date-utils";
import { formatAddress } from "~/lib/utils/format-utils";

interface SearchCardProps {
  festival: IBaseFestival;
}

export const SearchCard = component$<SearchCardProps>(({ festival }) => {
  const responsiveImage = festival.thumbnail.responsiveImage;
  return (
    <a
      href={`/festival/${festival.slug}`}
      class="grid grid-cols-[30%_70%] gap-x-4 lg:grid-cols-1"
    >
      <picture class="w-full lg:h-[18rem]">
        <img
          class="h-full w-full rounded-3xl object-cover"
          src={responsiveImage.src}
          srcset={responsiveImage.srcSet}
          alt={responsiveImage.alt}
          width={250}
          height={250}
        />
      </picture>
      <div class="flex h-full flex-col lg:gap-y-4">
        <h5 class="text-xl font-bold lg:mt-2">{festival.title}</h5>
        {festival.period.map(({ startdate, enddate }) => (
          <span class="text-sm font-[500]" key={startdate}>
            {formatDateRange(startdate, enddate)}
          </span>
        ))}
        <a
          class="text-xs font-[500] underline"
          target="blank"
          href={`http://maps.google.com/maps?q=${festival.address.coordinates.latitude},${festival.address.coordinates.longitude}`}
        >
          {formatAddress(festival.address)}
        </a>
        <div class="tags-container">
          {festival.tags.map((tag) => (
            <span class="tag mr-2" key={tag.tag}>
              {tag.tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
});
