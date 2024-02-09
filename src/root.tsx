import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${
            import.meta.env.PUBLIC_MAPS_API_KEY
          }&libraries=places`}
        />
        <script
          async
          src="https://eu.umami.is/script.js"
          data-website-id="7c1a06fc-5a40-4b3d-99df-324a8a8e534f"
        />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
