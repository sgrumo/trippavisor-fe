import { component$ } from "@builder.io/qwik";
import ImgLogo from '~/assets/images/logo.svg?jsx';

export const Navbar = component$(() => {
    return (
        <nav class="bg-yellow dark:bg-yellow-900 fixed w-full z-20 top-0 start-0">
            <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <ImgLogo />
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0">
                    <a href="mailto:samuele.medici@quinck.io">
                        Contattaci
                    </a>
                </div>
            </div>
        </nav >
    );
})