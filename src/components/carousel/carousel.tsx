import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import type { IGalleryImage } from "~/lib/models/festival";
import styles from "./carousel.css?inline";

interface CarouselProps {
  gallery: IGalleryImage[];
}

export const Carousel = component$<CarouselProps>(({ gallery }) => {
  useStylesScoped$(styles);

  const state = useStore({
    currentSlide: 0,
    slides: gallery.map((image) => image.responsiveImage.src),
  });

  const nextSlide = $(() => {
    state.currentSlide = (state.currentSlide + 1) % state.slides.length;
  });

  const prevSlide = $(() => {
    state.currentSlide =
      (state.currentSlide + state.slides.length - 1) % state.slides.length;
  });

  return (
    <div class="relative mt-4 flex items-center justify-center">
      <div class="carousel-container h-64 w-full">
        {state.slides.map((slide, index) => (
          <div
            key={index}
            class={`slide ${index === state.currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide})`,
              transform: `translateX(-${state.currentSlide * 100}%)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>
      <button class="prev" onClick$={prevSlide}>
        &#10094;
      </button>
      <button class="next" onClick$={nextSlide}>
        &#10095;
      </button>
    </div>
  );
});
