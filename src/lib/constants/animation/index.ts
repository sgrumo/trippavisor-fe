import anime from "animejs";

const TITLE_DELAY = "TRIPPAVISOR".length * 250;
const BASE_DURATION = 800;

const titleAnimation: anime.AnimeAnimParams = {
  targets: ".loader path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: BASE_DURATION,
  delay: function (el, i) {
    return i * 250;
  },
};

const titleFillAnimation: anime.AnimeAnimParams = {
  targets: ".loader path",
  fill: ["#000"],
  easing: "linear",
  duration: 500,
  delay: TITLE_DELAY,
};

const subtitleAnimation: anime.AnimeAnimParams = {
  targets: "header h2",
  opacity: [0, 1],
  easing: "linear",
  duration: 500,
  delay: TITLE_DELAY,
};

const headerAnimation: anime.AnimeAnimParams = {
  targets: "header .circle",
  easing: "easeInOutSine",
  backgroundColor: "#E7B545",
  keyframes: [{ clipPath: "circle(0)" }, { clipPath: "circle(100%)" }],
  duration: BASE_DURATION * 2,
  delay: TITLE_DELAY,
};

const headerImagesAnimation: anime.AnimeAnimParams = {
  targets: "header picture",
  easing: "easeInOutSine",
  opacity: [0, 1],
  duration: BASE_DURATION * 2,
  delay: TITLE_DELAY,
};

export const initAnimations = () => {
  anime(titleAnimation);
  anime(titleFillAnimation);
  anime(subtitleAnimation);
  anime(headerAnimation);
  anime(headerImagesAnimation);
};
