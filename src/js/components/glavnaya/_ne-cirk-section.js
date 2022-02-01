import anime from "../../vendor/anime.min";

const girlInner = document.querySelector(".girl__inner");
const girl = document.querySelector(".girl");

const handInner = document.querySelector(".hand__inner");

const cloudInner = document.querySelector(".cloud__inner");

const titleRegular = document.querySelectorAll(
  ".ne-cirk__title > * > *:not(.outline)"
);
const titleOutline = document.querySelectorAll(
  ".ne-cirk__title > * > .outline"
);

const neCirkTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: girlInner,
      top: ["60%", "50%"],
      left: ["70%", "50%"],
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      scale: [1.5, 0.25],
      duration: 600,
      easing: "linear",
    },
    0
  )
  .add(
    {
      targets: titleRegular,
      translateX: [0, "-100vw"],
      duration: 400,
      easing: "linear",
    },
    200
  )
  .add(
    {
      targets: titleOutline,
      translateX: [0, "100vw"],
      duration: 400,
      easing: "linear",
    },
    200
  )
  .add(
    {
      targets: handInner,
      top: ["150%", "78%"],
      left: ["53%", "53%"],
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      scale: [0.65, 0.65],
      duration: 300,
      easing: "linear",
    },
    500
  )
  .add(
    {
      targets: cloudInner,
      bottom: ["-50%", "0%"],
      left: ["0%", "0%"],
      duration: 200,
      easing: "linear",
    },
    600
  )
  .add(
    {
      targets: girlInner,
      top: "-50%",
      duration: 100,
      easing: "linear",
    },
    1000
  )
  .add(
    {
      targets: handInner,
      top: "150%",
      duration: 100,
      easing: "linear",
    },
    1000
  );

document.addEventListener("DOMContentLoaded", function () {
  const girlRotate = anime({
    targets: girl,
    rotate: [-30, 30],
    translateX: ["-10%", "10%"],
    duration: 2000,
    loop: true,
    direction: "alternate",
    easing: "easeInOutQuad",
  });
  window.addEventListener("scroll", () => {
    neCirkTimeline.seek(window.pageYOffset);
  });
});
