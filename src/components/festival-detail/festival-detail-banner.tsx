import { component$ } from "@builder.io/qwik";
import ImgCalendar from "~/assets/images/shared/icon_calendar.svg?jsx";
import ImgMap from "~/assets/images/shared/icon_map.svg?jsx";
import type { IFestivalDetail } from "~/lib/models/festival";
import { formatDateRange } from "~/lib/utils/date-utils";
import { formatAddress } from "~/lib/utils/format-utils";

interface FestivalDetailBannerProps {
  festival: IFestivalDetail;
}

export const FestivalDetailBanner = component$<FestivalDetailBannerProps>(
  ({ festival }) => {
    return (
      <section class="flex flex-col gap-y-2 bg-secondary-yellow p-4">
        <h1 class="text-xl font-bold">{festival.title}</h1>
        <p class="icon-paragraph">
          <ImgMap class="icon" />
          <a
            class="underline"
            target="blank"
            href={`http://maps.google.com/maps?q=${festival.address.coordinates.lat},${festival.address.coordinates.lng}`}
          >
            {formatAddress(festival.address)}
          </a>
        </p>
        <p class="icon-paragraph">
          <ImgCalendar class="icon" />
          {festival.period.map(({ startdate, enddate }) => (
            <span key={startdate}>{formatDateRange(startdate, enddate)}</span>
          ))}
        </p>
      </section>
    );
  },
);
