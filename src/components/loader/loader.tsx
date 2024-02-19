import { component$, useSignal } from "@builder.io/qwik";
import loader from "../../assets/loader.json";
import { QwikLottie } from "../qwik-lottie/qwik-lottie";

interface LoaderProps {
  text: string;
}

export const Loader = component$<LoaderProps>(({ text }) => {
  const container = useSignal<HTMLElement>();

  return (
    <div class="flex flex-col text-center">
      <span>{text}</span>
      <QwikLottie container={container.value} animationData={loader} />;
    </div>
  );
});
