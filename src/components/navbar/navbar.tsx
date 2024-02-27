import { component$ } from "@builder.io/qwik";
import ImgLogo from "~/assets/images/logo.svg?jsx";

export const Navbar = component$(() => {
  return (
    <nav class="dark:bg-yellow-900 fixed start-0 top-0 z-20 hidden w-full bg-yellow">
      <div class="mx-auto flex flex-wrap items-center justify-between p-4">
        <a title="homepage" href="/" class="flex items-center">
          <ImgLogo />
        </a>
        {/* <div class="flex space-x-3 md:order-2 md:space-x-0">
          <a href="mailto:samuele.medici@quinck.io">Contattaci</a>
        </div> */}
      </div>
    </nav>
  );
});
