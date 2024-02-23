import { component$ } from "@builder.io/qwik";
import type { IFestivalDetail } from "~/lib/models/festival";

interface MenuCardProps {
  festival: IFestivalDetail;
}

export const MenuCard = component$<MenuCardProps>(({ festival }) => {
  return (
    <article class="detail-card lg:hidden">
      <h3 class="detail-card-header">Menù</h3>
      {festival.menus.map((menu, index) => (
        <a
          data-umami-event="Open menu mobile"
          data-umami-event-menuname={menu.filename}
          data-umami-event-festival={festival.title}
          key={menu.filename}
          class="underline"
          href={menu.url}
          target="blank"
        >
          Scarica il menù {index + 1}
        </a>
      ))}
    </article>
  );
});
