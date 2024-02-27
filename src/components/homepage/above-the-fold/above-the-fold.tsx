import { component$ } from "@builder.io/qwik";
import FantozziImg from "~/assets/images/homepage/fantozzi.png?jsx";
import SordiImg from "~/assets/images/homepage/sordi.png?jsx";
import Title from "~/components/title/title";

export default component$(() => {
  return (
    <header class="relative flex min-h-screen flex-col items-center justify-center bg-transparent">
      <div class="circle absolute z-[-1] h-full w-full bg-yellow"></div>
      <Title />
      <h2 class="z-100 text-center text-[18px] leading-none md:text-[30px] lg:text-[40px]">
        Il portale <i>definitivo</i> per le sagre
      </h2>
      <picture class="absolute left-0 top-0 w-[50%] lg:w-[25%]">
        <FantozziImg />
      </picture>
      <picture class="absolute bottom-0 right-0 w-[50%] lg:w-[25%]">
        <SordiImg />
      </picture>
    </header>
  );
});
