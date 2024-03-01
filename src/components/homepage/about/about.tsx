import { component$, useVisibleTask$ } from "@builder.io/qwik";
import anime from "animejs";

export default component$(() => {
  useVisibleTask$(() => {
    const popupTextAnimation: anime.AnimeAnimParams = {
      targets: ".out-now span",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "linear",
      duration: 800,
      delay: (el, i) => 1500 + 800 * i,
    };
    anime(popupTextAnimation);
  });

  return (
    <section id="about" class="mb-4 mt-4 flex flex-col gap-y-2 px-4">
      <div class="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-8">
        <ul>
          <li>Cerchi un ristorante stellato?</li>
          <li>Vuoi mangiare piccoli piatti ma delicati?</li>
        </ul>
        <div class="out-now flex gap-x-1">
          <span class="inline-block text-xl font-bold uppercase">HAI</span>
          <span class="inline-block text-xl font-bold uppercase">
            SBAGLIATO
          </span>
          <span class="inline-block text-xl font-bold uppercase">SITO.</span>
        </div>
      </div>
      <p>Rimani qui per esplorare le sagre che fanno tendenza in Italia.</p>
      <p>
        <strong>Trippavisor</strong> è il tuo passaporto per l'avventura nelle
        sagre italiane, dove ogni evento è un'opportunità per scoprire storie
        nascoste e sapori indimenticabili.
      </p>
      <p class="mt-2">
        Lasciati ispirare da paesaggi mozzafiato e dalla passione delle comunità
        locali: <strong class="underline">Trippavisor</strong> è più di una
        guida, è un invito a vivere l'Italia con il cuore.
      </p>
      <a
        class="mt-4 rounded-2xl bg-red p-4 text-center font-bold uppercase text-white"
        title="ricerca"
        data-umami-event="About search button click"
        href="/search"
      >
        Vai alla ricerca!
      </a>
    </section>
  );
});
