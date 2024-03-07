import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "./components/uikit/router-head/router-head";

import "./global.css";

export default component$(() => {
  const endTimer = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const scrollTimeout = setTimeout(() => {
      endTimer.value = true;
    }, 1500);
    cleanup(() => {
      clearTimeout(scrollTimeout);
    });
  });

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
          data-website-id={import.meta.env.PUBLIC_UMAMI_WEBSITE_ID}
        />
        <RouterHead />
      </head>
      <body lang="en" class={endTimer.value ? "" : "h-full overflow-hidden"}>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
