import anime from "../../vendor/anime.min";

const section = document.querySelector(".chto-v-rezultate-section");

const titleRegular = section.querySelector(".chto-v-rezultate__title");
const bottomImg = section.querySelector(".chto-v-rezultate__img");

const chtoVRezultateTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    19000
  )
  .add(
    {
      targets: bottomImg,
      bottom: ["-70%", "-20%"],
      left: ["100%", "70%"],
      duration: 200,
      easing: "linear",
    },
    19200
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    chtoVRezultateTimeline.seek(window.pageYOffset);
  });
});
