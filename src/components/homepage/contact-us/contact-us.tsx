import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-green p-4 text-white">
      <h4 class="text-xl font-bold">
        Sei un organizzatore di sagre? <br />
        Vuoi fare il pienone al tuo evento?
      </h4>
      <p class="mt-4">
        Trippavisor offre la piattaforma perfetta per promuovere il tuo evento a
        migliaia di appassionati.
      </p>
      <p class="mt-4">
        <a class="mr-1 underline" href="mailto:samuele.medici@quinck.io">
          Contattaci ora
        </a>
        per scoprire come mettere in evidenza la tua sagra sul nostro portale.
      </p>
    </section>
  );
});
