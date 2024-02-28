import { component$ } from "@builder.io/qwik";
import AltraBellaSignoraImg from "~/assets/images/homepage/altrabellasignora.png?jsx";
import BellaSignoraImg from "~/assets/images/homepage/bellasignora.png?jsx";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <header class="relative flex min-h-screen flex-col items-center justify-center bg-transparent">
      <div class="circle absolute z-[-1] h-full w-full bg-yellow"></div>
      <h1 class="invisible">Trippavisor</h1>
      <Title />
      <h2 class="z-100 mt-4 text-center text-[18px] md:text-[30px] lg:text-[40px]">
        Il portale <i>definitivo</i> per le sagre
      </h2>
      <picture class="bella-signora absolute bottom-0 left-0 w-[50%] lg:w-[25%]">
        <BellaSignoraImg />
      </picture>
      <picture class="altra-bella-signora absolute right-[3%] top-[5%] w-[50%] lg:top-[1%] lg:w-[22%]">
        <AltraBellaSignoraImg />
      </picture>
    </header>
  );
});
