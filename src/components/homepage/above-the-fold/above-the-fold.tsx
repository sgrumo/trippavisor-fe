import { component$, useVisibleTask$ } from "@builder.io/qwik";
import AltraBellaSignoraImg from "~/assets/images/homepage/altrabellasignora.png?jsx";
import BellaSignoraImg from "~/assets/images/homepage/bellasignora.png?jsx";
import Title from "~/components/title/title";
import { initHomepageAnimations } from "~/lib/constants/animation/home-page";

export default component$(() => {
  useVisibleTask$(() => {
    initHomepageAnimations();
  });

  return (
    <header class="relative flex min-h-screen flex-col items-center justify-center bg-transparent">
      <div class="circle absolute z-[-1] h-full w-full bg-yellow"></div>
      <h1 class="invisible">Trippavisor</h1>
      <Title />
      <h2 class="z-100 mt-4 text-center text-[18px] md:text-[30px] lg:text-[40px]">
        Il portale <i>definitivo</i> per le sagre
      </h2>
      <picture class="bella-signora absolute bottom-0 left-0 w-[50%] lg:w-[25%]">
        <BellaSignoraImg loading="eager" />
      </picture>
      <picture class="altra-bella-signora absolute right-[3%] top-[5%] w-[50%] lg:top-[1%] lg:w-[22%]">
        <AltraBellaSignoraImg loading="eager" />
      </picture>
      <a
        href="#about"
        title="about"
        class="about-anchor absolute bottom-[3%] right-[3%] flex h-8 w-8 items-center justify-center rounded-[50%] bg-white"
      >
        &#8595;
      </a>
    </header>
  );
});
