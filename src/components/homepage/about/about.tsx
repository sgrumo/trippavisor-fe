import { component$, useVisibleTask$ } from "@builder.io/qwik";
import BelSignoreImg from "~/assets/images/homepage/belsignore.png?jsx";
import { initAboutAnimations } from "~/lib/constants/animation/about";

export default component$(() => {
  useVisibleTask$(() => {
    initAboutAnimations();
  });

  return (
    <section id="about" class="relative my-8 flex flex-col gap-y-2 px-8">
      <div class="flex flex-col gap-y-4">
        <ul class="text-center md:text-xl">
          <li class="font-bold">Cerchi un ristorante stellato?</li>
          <li class="font-bold">Vuoi mangiare piccoli piatti, ma delicati?</li>
        </ul>
        <div class="out-now flex justify-center gap-x-1 text-red">
          <span class="inline-block text-xl font-bold uppercase">HAI</span>
          <span class="inline-block text-xl font-bold uppercase">
            SBAGLIATO
          </span>
          <span class="inline-block text-xl font-bold uppercase">SITO.</span>
        </div>
      </div>
      <p class="mt-4">
        Rimani qui per esplorare le sagre che fanno tendenza in Italia.
      </p>
      <p>
        <strong>Trippavisor</strong> è il tuo passaporto per l'avventura nelle
        sagre italiane, dove ogni evento è un'opportunità per scoprire storie
        nascoste e sapori indimenticabili.
      </p>
      <p class="mt-2">
        <strong>Lasciati ispirare</strong> da paesaggi mozzafiato e dalla
        passione delle comunità locali: <strong>Trippavisor</strong> è più di
        una guida, è un invito a vivere l'Italia con il cuore.
      </p>
      <p>
        <strong>Non sai dove cominciare?</strong>
      </p>
      <p>Con Trippavisor puoi trovare la sagra perfetta</p>

      <a
        class="mt-4 rounded-2xl bg-red p-4 text-center font-bold uppercase text-white"
        title="ricerca"
        data-umami-event="About search button click"
        href="/search"
      >
        Vai alla ricerca!
      </a>
      <picture class="bel-signore absolute bottom-[0%] right-[3%] z-[-1] hidden w-[50%]">
        <BelSignoreImg />
      </picture>
    </section>
  );
});
