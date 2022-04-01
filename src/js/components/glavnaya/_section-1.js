const section = document.querySelector(".section-1");

const girlWrapper = section.querySelector(".girl__wrapper");
const girl = section.querySelector(".girl");
const handWrapper = section.querySelector(".hand__wrapper");

const downBtn = section.querySelector(".down__btn");
const section2 = document.querySelector(".section-2").offsetTop;

const clouds = document.querySelectorAll("#indexPage > .cloud__item");
const pin = document.querySelector("#indexPage > .pin");
const section9 = document.querySelector(".section-9");
const distanceSection9 =
  section9.getBoundingClientRect().top - section9.clientHeight;

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
      targets: clouds,
      bottom: ["-50%", "-2%"],
      duration: 200,
      easing: "linear",
    },
    "-=100"
  )
  .add({
    targets: handWrapper,
    top: ["150%", "78%"],
    left: ["53%", "53%"],
    translateX: ["-50%", "-50%"],
    translateY: ["-50%", "-50%"],
    duration: 300,
    easing: "linear",
  })
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
      targets: clouds,
      bottom: "-50%",
      duration: 300,
      easing: "linear",
    },
    "-=200"
  );

const pinTimeLine = anime
  .timeline({ autoplay: false })
  .add({
    targets: pin,
    opacity: 0,
    duration: 200,
    easing: "linear",
    delay: 500,
    update: () => {
      if (pin.style.opacity === "0") {
        pin.style.visability = "hidden";
        pin.style.zIndex = -1;
      } else {
        pin.style.visability = "visible";
        pin.style.zIndex = 1;
      }
    },
  })
  .add({
    targets: pin,
    opacity: 1,
    duration: 200,
    easing: "linear",
    delay: distanceSection9,
    update: () => {
      if (pin.style.opacity === "0") {
        pin.style.visability = "hidden";
        pin.style.zIndex = -1;
      } else {
        pin.style.visability = "visible";
        pin.style.zIndex = 1;
      }
    },
  })
  .add({
    targets: pin,
    opacity: 0,
    duration: 200,
    easing: "linear",
    delay: 800,
    update: () => {
      if (pin.style.opacity === "0") {
        pin.style.visability = "hidden";
        pin.style.zIndex = -1;
      } else {
        pin.style.visability = "visible";
        pin.style.zIndex = 1;
      }
    },
  });
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

  downBtn.addEventListener("click", () => {
    window.scroll({ top: section2, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    neCirkTimeline.seek(window.pageYOffset);
    pinTimeLine.seek(window.pageYOffset);
  });
});
