import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="mb-4 mt-4 grid grid-cols-1 gap-x-4 px-4">
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
        href="/search"
      >
        Vai alla ricerca!
      </a>
    </section>
  );
});
