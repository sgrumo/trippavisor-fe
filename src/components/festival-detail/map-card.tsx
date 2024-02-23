import { component$ } from "@builder.io/qwik";
import ImgMail from "~/assets/images/shared/icon_mail.svg?jsx";
import ImgMap from "~/assets/images/shared/icon_map.svg?jsx";
import ImgTelephone from "~/assets/images/shared/icon_telephone.svg?jsx";
import type { IFestivalDetail } from "~/lib/models/festival";
import { formatAddress } from "~/lib/utils/format-utils";

interface MapCardProps {
  festival: IFestivalDetail;
}

export const MapCard = component$<MapCardProps>(({ festival }) => {
  return (
    <article class="detail-card hidden lg:flex">
      <h3 class="detail-card-header">Località e Contatti</h3>
      <iframe
        width="100%"
        height="320"
        style="border:0"
        loading="lazy"
        allowFullscreen={true}
        onLoad$={() => {
          console.log("loaded"); // TODO: loader
        }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.PUBLIC_MAPS_API_KEY
        }&q=${festival.title}&center=${
          festival.address.coordinates.latitude
        },${festival.address.coordinates.longitude}`}
      />
      <p class="icon-paragraph">
        <ImgMap class="icon" />
        <a
          class="underline"
          target="blank"
          href={`http://maps.google.com/maps?q=${festival.address.coordinates.latitude},${festival.address.coordinates.longitude}`}
        >
          {formatAddress(festival.address)}
        </a>
      </p>
      <p class="icon-paragraph">
        <ImgMail class="icon" />
        <a href={`mailto:${festival.email}`}>{festival.email}</a>
      </p>
      {festival.phoneNumber && (
        <p class="icon-paragraph">
          <ImgTelephone class="icon" />
          <a href={`tel:${festival.phoneNumber}`}>{festival.phoneNumber}</a>
        </p>
      )}
    </article>
  );
});
