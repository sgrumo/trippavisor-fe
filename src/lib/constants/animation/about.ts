import anime from "animejs";

const POPUP_TEXT_ANIMATION_DELAY = 1000;
const POPUP_TEXT_ANIMATION_DURATION = 350;

const popupTextAnimation: anime.AnimeAnimParams = {
  targets: ".out-now span",
  scale: [2.5, 1],
  opacity: [0, 1],
  easing: "linear",
  duration: POPUP_TEXT_ANIMATION_DURATION,
  delay: (_, i) =>
    POPUP_TEXT_ANIMATION_DELAY + POPUP_TEXT_ANIMATION_DURATION * i,
};
export const initAboutAnimations = () => {
  anime(popupTextAnimation);
};
