import { component$ } from "@builder.io/qwik";
import type { IGalleryImage } from "~/lib/models/festival";

interface CarouselProps {
  gallery: IGalleryImage[];
}

export const Carousel = component$<CarouselProps>(({ gallery }) => {
  return (
    <div class="carousel-wrapper">
      <nav class="lil-nav">
        {gallery.map(({ responsiveImage }, index) => (
          <a key={``} href={`#image-${index}`}>
            <img
              class="lil-nav__img"
              width={responsiveImage.width}
              height={responsiveImage.height}
              src={responsiveImage.src}
              srcset={responsiveImage.srcSet}
              alt={responsiveImage.alt}
            />
          </a>
        ))}
      </nav>
    </div>
  );
});
