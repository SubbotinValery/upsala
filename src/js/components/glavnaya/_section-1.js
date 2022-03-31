const section = document.querySelector(".section-1");

const girlWrapper = section.querySelector(".girl__wrapper");
const girl = section.querySelector(".girl");
const handWrapper = section.querySelector(".hand__wrapper");

const cloudBlock = document.querySelector(".cloud__block");

const neCirkTimeline = anime
  .timeline({ autoplay: false })
  .add({
    targets: girlWrapper,
    top: () => {
      return window.innerWidth > 1024 ? ["60%", "50%"] : ["50%", "50%"];
    },
    left: () => {
      return window.innerWidth > 1024 ? ["70%", "50%"] : ["50%", "50%"];
    },
    translateX: ["-50%", "-50%"],
    translateY: ["-50%", "-50%"],
    width: () => {
      return window.innerWidth > 1024 ? ["200rem", "26rem"] : ["50%", "26rem"];
    },
    duration: 600,
    easing: "linear",
  })
  .add(
    {
      targets: cloudBlock,
      bottom: 0,
      duration: 200,
      easing: "linear",
    },
    "-=100"
  )
  .add(
    {
      targets: handWrapper,
      top: ["150%", "78%"],
      left: ["53%", "53%"],
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      scale: [0.65, 0.65],
      duration: 300,
      easing: "linear",
    }
    // "-=100"
  )
  .add(
    {
      targets: girlWrapper,
      top: "-50%",
      duration: 200,
      easing: "linear",
    },
    "+=100"
  )
  .add(
    {
      targets: handWrapper,
      top: "150%",
      duration: 200,
      easing: "linear",
    },
    "-=100"
  )
  .add(
    {
      targets: cloudBlock,
      bottom: "-50%",
      duration: 200,
      easing: "linear",
    },
    "+=100"
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
