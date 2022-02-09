import anime from "../../vendor/anime.min";

const section = document.querySelector(".kulturnii-producti-section");

const titleRegular = section.querySelector(
  ".kulturnii-producti__title > *:not(.italic)"
);
const titleOutline = section.querySelector(
  ".kulturnii-producti__title  > .italic"
);

const kulturniiProductiTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    21000
  )
  .add(
    {
      targets: titleOutline,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    21000
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    kulturniiProductiTimeline.seek(window.pageYOffset);
  });
});
