import { component$, useVisibleTask$ } from "@builder.io/qwik";
import BelSignoreImg from "~/assets/images/homepage/belsignore.png?jsx";
import TortellinoImg from "~/assets/images/homepage/tortellino.svg?jsx";
import { initDescriptionAnimation } from "~/lib/constants/animation/description";

export default component$(() => {
  useVisibleTask$(() => {
    initDescriptionAnimation();
  });

  return (
    <section id="description" class="pt-8">
      <div class="about-content relative flex flex-col gap-y-2">
        <p class="mb-6 w-[95%] font-['Staatliches'] text-5xl font-semibold text-green md:max-w-[70%]">
          Rimani qui per esplorare le sagre che fanno tendenza in Italia
        </p>
        <picture class="absolute -top-[7%] right-[-4%] z-[-1] h-24 w-24 -rotate-[35deg] md:right-[8%] md:top-[-15%]">
          <TortellinoImg class="h-full w-full" />
        </picture>
      </div>
      <div class="about-content flex flex-col gap-y-2 md:max-w-[70%]">
        <h3 class="mb-0 mt-4 text-lg font-semibold leading-4">
          Cos'è Trippavisor
        </h3>
        <p>
          <i>Trippavisor</i> è il tuo passaporto per l'avventura nelle sagre
          italiane, dove ogni evento è un'opportunità per scoprire storie
          nascoste e sapori indimenticabili.
        </p>
        <h3 class="mb-0 mt-4 text-lg font-semibold leading-4">
          Perché Trippavisor
        </h3>
        <p>
          Lasciati ispirare da paesaggi mozzafiato e dalla passione delle
          comunità locali: <i>Trippavisor</i> è più di una guida, è un invito a
          vivere l'Italia con il cuore.
        </p>
        <h3 class="mb-0 mt-4 text-lg font-semibold leading-4">
          Non sai dove cominciare?
        </h3>
        <p>
          Con <i>Trippavisor</i> puoi trovare la sagra perfetta
        </p>
        <div class="flex gap-x-4">
          <a
            class="mt-4 rounded-2xl bg-red p-4 text-center font-bold uppercase text-white"
            title="ricerca"
            data-umami-event="About search button click"
            href="/search"
          >
            Vai alla ricerca!
          </a>
          <picture class="bel-signore absolute bottom-0 right-[3%] z-[-1] w-[30%] opacity-0 md:w-[40%] lg:w-[30%]">
            <BelSignoreImg />
          </picture>
        </div>
      </div>
    </section>
  );
});
