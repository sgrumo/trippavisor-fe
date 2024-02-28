import { component$, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  useVisibleTask$(() => {});

  return (
    <section class="mb-4 mt-4 flex flex-col gap-y-2 px-4">
      <p>
        Cerchi un ristorante stellato? Vuoi mangiare piccoli piatti ma delicati?
      </p>
      <h1 class="ml15">
        <p class="font-bold">Vaffanculo.</p>
      </h1>
      <p>Sei nel posto sbagliato.</p>
      <p>
        Rimani qui per esplorare le sagre che fanno tendenza in Italia. Cibo
        iconico, cultura lit e un sacco di good times ti aspettano. Swipe right
        sulla tua prossima avventura gastronomica.
      </p>
      <p>
        Trippavisor è il tuo passaporto per l'avventura nelle sagre italiane,
        dove ogni evento è un'opportunità per scoprire
        <i class="ml-1">storie nascoste e sapori indimenticabili.</i>
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
