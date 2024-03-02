import anime from "animejs";

const popupTextAnimation: anime.AnimeAnimParams = {
  targets: ".out-now span",
  scale: [14, 1],
  opacity: [0, 1],
  easing: "linear",
  duration: 800,
  delay: (el, i) => 2000 + 800 * i,
};
const belSignoreAnimation: anime.AnimeAnimParams = {
  targets: ".bel-signore",
  easing: "linear",
  translateY: ["+100%", "0"],
  duration: 2500,
  delay: 2500,
};

export const initAboutAnimations = () => {
  anime(popupTextAnimation);
  anime(belSignoreAnimation);
};
