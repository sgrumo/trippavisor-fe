import anime from "animejs";

const TITLE_LETTER_WRITE_ANIMATION = 150;
const TITLE_DELAY = "TRIPPAVISOR".length * TITLE_LETTER_WRITE_ANIMATION;
const BASE_DURATION = 500;
const TEXT_ANIMATION_DURATION = 300;

const titleAnimation: anime.AnimeAnimParams = {
  targets: ".loader path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: BASE_DURATION,
  delay: (_, i) => i * TITLE_LETTER_WRITE_ANIMATION,
};

const titleFillAnimation: anime.AnimeAnimParams = {
  targets: ".loader path",
  fill: ["#000"],
  easing: "linear",
  duration: TEXT_ANIMATION_DURATION,
  delay: TITLE_DELAY,
};

const subtitleAnimation: anime.AnimeAnimParams = {
  targets: "header h2",
  opacity: [0, 1],
  easing: "linear",
  duration: TEXT_ANIMATION_DURATION,
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
  delay: TITLE_DELAY + BASE_DURATION,
};

const altraBellaSignoraAnimation: anime.AnimeAnimParams = {
  targets: "header picture.altra-bella-signora",
  easing: "spring(1, 80, 10, 0)",
  translateX: ["+150%", "0"],
  duration: BASE_DURATION / 2,
  delay: TITLE_DELAY + BASE_DURATION,
};

const aboutAnchorAnimation: anime.AnimeAnimParams = {
  targets: "header .about-anchor",
  easing: "spring(1, 120, 10, 0)",
  translateY: ["+200%", "0"],
  duration: BASE_DURATION / 2,
  delay: TITLE_DELAY + BASE_DURATION / 2 + BASE_DURATION,
};

export const initHomepageAnimations = () => {
  anime(titleAnimation);
  anime(titleFillAnimation);
  anime(subtitleAnimation);
  anime(headerAnimation);
  anime(bellaSignoraAnimation);
  anime(altraBellaSignoraAnimation);
  anime(aboutAnchorAnimation);
};
