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
        <a key={menu.filename} class="underline" href={menu.url} target="blank">
          Scarica il menù {index + 1}
        </a>
      ))}
    </article>
  );
});
