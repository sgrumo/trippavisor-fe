import { component$ } from "@builder.io/qwik";
import FantozziImg from "~/assets/images/homepage/fantozzi.png?jsx";
import SordiImg from "~/assets/images/homepage/sordi.png?jsx";

export default component$(() => {
  return (
    <header class="relative flex min-h-screen flex-col items-center justify-center bg-yellow">
      <h1 class="text-center text-[45px] font-bold leading-none md:text-[100px] lg:text-[160px]">
        TRIPPAVISOR
      </h1>
      <h2 class="text-center text-[18px] md:text-[40px] lg:text-[60px]">
        Il portale <i>definitivo</i> per le sagre
      </h2>
      <picture class="absolute left-0 top-0 w-[50%]">
        <FantozziImg />
      </picture>
      <picture>
        <SordiImg class="absolute bottom-0 right-0 w-[50%]" />
      </picture>
    </header>
  );
});
