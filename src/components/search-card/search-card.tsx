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
        <h5>{festival.title}</h5>
        {festival.period.map(({ startdate, enddate }) => (
          <span key={startdate}>{formatDateRange(startdate, enddate)}</span>
        ))}
        <a
          class="underline"
          target="blank"
          href={`http://maps.google.com/maps?q=${festival.address.coordinates.lat},${festival.address.coordinates.lng}`}
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
