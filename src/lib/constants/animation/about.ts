import anime from "animejs";

const POPUP_TEXT_ANIMATION_DELAY = 2000;
const POPUP_TEXT_ANIMATION_DURATION = 600;

const popupTextAnimation: anime.AnimeAnimParams = {
  targets: ".out-now span",
  scale: [4, 1],
  opacity: [0, 1],
  easing: "linear",
  duration: POPUP_TEXT_ANIMATION_DURATION,
  delay: (_, i) =>
    POPUP_TEXT_ANIMATION_DELAY + POPUP_TEXT_ANIMATION_DURATION * i,
};

const aboutContentAnimation: anime.AnimeAnimParams = {
  targets: ".about-content",
  easing: "linear",
  opacity: [0, 1],
  duration: 500,
  delay: POPUP_TEXT_ANIMATION_DELAY + POPUP_TEXT_ANIMATION_DURATION * 3,
};

const belSignoreAnimation: anime.AnimeAnimParams = {
  targets: ".bel-signore",
  easing: "linear",
  translateY: ["+100%", "0"],
  duration: 2500,
  delay: 2000 + POPUP_TEXT_ANIMATION_DELAY + POPUP_TEXT_ANIMATION_DURATION * 3,
};

export const initAboutAnimations = () => {
  anime(popupTextAnimation);
  anime(belSignoreAnimation);
  anime(aboutContentAnimation);
};
