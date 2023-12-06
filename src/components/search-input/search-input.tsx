declare let google: any;

import type { PropFunction } from "@builder.io/qwik";
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { Localization } from "~/lib/models/festival";
import type { GeometryLocation, Place } from "~/lib/models/places";

export interface SearchInputProps {
  onChangeLocation$: PropFunction<(location: Localization) => void>;
}

export const SearchInput = component$<SearchInputProps>(
  ({ onChangeLocation$ }) => {
    useVisibleTask$(() => {
      const searchInput = document.getElementById("search-input");

      const center = { lat: 44.3353, lng: 33.11 };

      const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
      };

      const options = {
        bounds: defaultBounds,
        componentRestrictions: { country: "it" },
        fields: ["address_components", "geometry", "icon", "name"],
        strictBounds: false,
      };

      const autocomplete = new google.maps.places.Autocomplete(
        searchInput,
        options,
      );

      autocomplete.addListener("place_changed", () => {
        const place: Place = autocomplete.getPlace();
        const { lat, lng } =
          place.geometry.location.toJSON() as GeometryLocation;
        const localization: Localization = { latitude: lat, longitude: lng };
        onChangeLocation$(localization);
      });
    });

    return (
      <input
        id="search-input"
        type="text"
        class="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm focus:border-gray-400 focus:outline-none"
        placeholder="Cerca..."
      />
    );
  },
);
