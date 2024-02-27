import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="mb-4 mt-4 grid grid-cols-1 gap-x-4 px-4">
      <p class="mt-16 px-4 text-sm lg:max-w-[60%]">
        Cerchi un ristorante stellato? Vuoi mangiare piccoli piatti ma delicati?
        <br />
        <strong>Vaffanculo.</strong>
        <br /> Sei nel posto sbagliato. <br />
        Rimani qui per esplorare le sagre che fanno tendenza in Italia. Cibo
        iconico, cultura lit e un sacco di good times ti aspettano. Swipe right
        sulla tua prossima avventura gastronomica.
      </p>
      <h3 class="text-lg font-bold">Cos'è Trippavisor</h3>
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
