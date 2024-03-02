import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/homepage/about/about";
import AboveTheFold from "~/components/homepage/above-the-fold/above-the-fold";
import ContactUs from "~/components/homepage/contact-us/contact-us";

export default component$(() => {
  return (
    <>
      <AboveTheFold />
      <About />
      <ContactUs />
    </>
  );
});

export const head: DocumentHead = {
  title: "Trippavisor | Il portale definitivo per le sagre",
  meta: [
    {
      name: "description",
      content:
        "Scopri le migliori sagre d'Italia su Trippavisor! Trova eventi gastronomici, festival e feste in base alle tue preferenze.",
    },
    {
      name: "keywords",
      content:
        "sagre, sagre italiane, eventi gastronomici, ricerca sagre, cibo di strada, festival",
    },
    {
      property: "og:title",
      content: "Trippavisor | Il portale definitivo per le sagre",
    },
    {
      property: "og:description",
      content:
        "Scopri le migliori sagre d'Italia su Trippavisor! Trova eventi gastronomici, festival e feste in base alle tue preferenze.",
    },
    {
      property: "twitter:title",
      content: "Trippavisor | Il portale definitivo per le sagre",
    },
    {
      property: "twitter:description",
      content:
        "Scopri le migliori sagre d'Italia su Trippavisor! Trova eventi gastronomici, festival e feste in base alle tue preferenze.",
    },
  ],
};
