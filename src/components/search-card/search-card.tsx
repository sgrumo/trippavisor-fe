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
    <div class="grid grid-cols-[30%_70%] gap-x-4">
      <picture>
        <img
          class="rounded-3xl"
          src={responsiveImage.src}
          srcset={responsiveImage.srcSet}
          alt={responsiveImage.alt}
          width={responsiveImage.width}
          height={responsiveImage.height}
        />
      </picture>
      <div class="flex flex-col gap-y-2">
        <strong>{festival.title}</strong>
        {festival.period.map(({ startdate, enddate }) => (
          <span key={startdate}>{formatDateRange(startdate, enddate)}</span>
        ))}
        <a
          target="blank"
          href={`https://www.google.com/maps/place/${festival.address.coordinates.lat},${festival.address.coordinates.lng}`}
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
    </div>
  );
});
