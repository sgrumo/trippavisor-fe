import { component$ } from "@builder.io/qwik";
import ImgMail from "~/assets/images/shared/icon_mail.svg?jsx";
import ImgTelephone from "~/assets/images/shared/icon_telephone.svg?jsx";
import type { IFestivalDetail } from "~/lib/models/festival";

interface ContactCardProps {
  festival: IFestivalDetail;
}

export const ContactCard = component$<ContactCardProps>(({ festival }) => {
  return (
    <article class="detail-card lg:hidden">
      <h3 class="detail-card-header">Contatti</h3>
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
