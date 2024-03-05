import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { initAboutAnimations } from "~/lib/constants/animation/about";
import Description from "./description";

export default component$(() => {
  useVisibleTask$(() => {
    initAboutAnimations();
  });

  return (
    <section
      id="about"
      class="relative px-4 py-16 md:px-10 md:pt-24 lg:mt-32 lg:px-24 xl:px-48"
    >
      <div class="grid h-screen grid-cols-1 py-24">
        <ul class="text-3xl">
          <li>Cerchi un ristorante stellato?</li>
          <li class="mt-20 md:mt-8 md:text-right">
            Vuoi mangiare piccoli piatti, ma delicati?
          </li>
        </ul>
        <div class="out-now flex justify-center gap-x-2 text-center font-['Staatliches'] text-6xl text-red md:text-5xl">
          <span class="inline-block font-bold uppercase">
            hai sbagliato sito
          </span>
        </div>
      </div>
      <a
        href="#description"
        title="description"
        class="absolute right-[3%] top-[50%] flex h-8 w-8 items-center justify-center rounded-[50%] "
      >
        &#8595;
      </a>

      <Description />
    </section>
  );
});
