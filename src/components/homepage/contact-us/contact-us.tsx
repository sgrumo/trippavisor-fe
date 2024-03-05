import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-green p-4 text-white md:p-8 lg:px-24 xl:px-48">
      <h4 class="text-xl font-bold">
        Sei un organizzatore di sagre? <br />
        Vuoi fare il pienone al tuo evento?
      </h4>
      <p class="mt-4">
        Trippavisor offre la piattaforma perfetta per promuovere il tuo evento a
        migliaia di appassionati.
      </p>
      <p class="mb-8 mt-4">
        Scopri come mettere in evidenza la tua sagra sul nostro portale:
      </p>
      <a
        class="rounded-2xl bg-white px-4 py-2 text-black"
        href="mailto:samuele.medici@quinck.io"
      >
        Contattaci ora
      </a>
    </section>
  );
});
