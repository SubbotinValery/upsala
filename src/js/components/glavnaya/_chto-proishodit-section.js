import anime from "../../vendor/anime.min";

const section = document.querySelector(".chto-proishodit-section");

const titleRegular = section.querySelector(
  ".chto-proishodit__title > *:not(.italic)"
);
const titleOutline = section.querySelector(
  ".chto-proishodit__title  > .italic"
);

const titleRegularSecondary = section.querySelector(
  ".chto-proishodit-secondary__title > *:not(.italic)"
);
const titleOutlineSecondary = section.querySelector(
  ".chto-proishodit-secondary__title  > .italic"
);

const chtoProishoditTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    24000
  )
  .add(
    {
      targets: titleOutline,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    24000
  )
  .add(
    {
      targets: titleRegularSecondary,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    24600
  )
  .add(
    {
      targets: titleOutlineSecondary,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    24600
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    chtoProishoditTimeline.seek(window.pageYOffset);
  });
});
