import { component$ } from "@builder.io/qwik";
import type { IFestivalDetail } from "~/lib/models/festival";

interface DetailCardProps {
  festival: IFestivalDetail;
}

export const DetailCard = component$<DetailCardProps>(({ festival }) => {
  return (
    <article class="detail-card">
      <header>
        <h3 class="detail-card-header">Dettagli</h3>
      </header>
      <p>{festival.description}</p>
      <h4 class="detail-card-secondary-header">Cucina</h4>
      <div class="detail-tag-container">
        {festival.tags.map(({ tag }, index, arr) => (
          <span class="break-words" key={tag}>
            {tag}
            {index !== arr.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    </article>
  );
});
