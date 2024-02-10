import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="min-h-[50vh] bg-yellow">
      <h1 class="mb-4 pt-4 text-center text-5xl font-bold">
        Il portale <i>definitivo</i> per le sagre
      </h1>
      <h2 class="mt-16 px-4 text-sm lg:max-w-[60%]">
        Cerchi un ristorante stellato? Vuoi mangiare piccoli piatti ma delicati?
        <br />
        <strong>Vaffanculo.</strong>
        <br /> Sei nel posto sbagliato. <br />
        Rimani qui per esplorare le sagre che fanno tendenza in Italia. Cibo
        iconico, cultura lit e un sacco di good times ti aspettano. Swipe right
        sulla tua prossima avventura gastronomica.
      </h2>
    </header>
  );
});
