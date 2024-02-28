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

const bellaSignoraAnimation: anime.AnimeAnimParams = {
  targets: "header picture.bella-signora",
  easing: "spring(1, 80, 10, 0)",
  translateY: ["+100%", "0"],
  duration: BASE_DURATION / 2,
  delay: TITLE_DELAY,
};

const altraBellaSignoraAnimation: anime.AnimeAnimParams = {
  targets: "header picture.altra-bella-signora",
  easing: "spring(1, 80, 10, 0)",
  translateX: ["+150%", "0"],
  duration: BASE_DURATION / 2,
  delay: TITLE_DELAY,
};

const vaffanculoAnimation: anime.AnimeAnimParams = {
  targets: ".ml15 p",
  scale: [14, 1],
  opacity: [0, 1],
  easing: "easeOutCirc",
  duration: 800,
  delay: (el, i) => TITLE_DELAY + 800 * i,
};

export const initAnimations = () => {
  anime(titleAnimation);
  anime(titleFillAnimation);
  anime(subtitleAnimation);
  anime(headerAnimation);
  anime(bellaSignoraAnimation);
  anime(altraBellaSignoraAnimation);
  anime(vaffanculoAnimation);
};
