import anime from "animejs";

const POPUP_TEXT_ANIMATION_DELAY = 1000;
const POPUP_TEXT_ANIMATION_DURATION = 350;

const aboutContentAnimation: anime.AnimeAnimParams = {
  targets: ".about-content",
  easing: "linear",
  opacity: [0, 1],
  duration: 500,
  delay: POPUP_TEXT_ANIMATION_DELAY,
};

const belSignoreAnimation: anime.AnimeAnimParams = {
  targets: ".bel-signore",
  easing: "linear",
  translateY: ["+100%", "0"],
  duration: 2500,
  delay: POPUP_TEXT_ANIMATION_DELAY + POPUP_TEXT_ANIMATION_DURATION * 3,
};

export const initDescriptionAnimation = () => {
  anime(belSignoreAnimation);
  anime(aboutContentAnimation);
};
