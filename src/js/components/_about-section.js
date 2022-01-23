import anime from "../vendor/anime.min";

const jugglerWrapper = document.querySelector(".juggler__wrapper");
const jumperWrapper1 = document.querySelector(".jumper__wrapper-1");
const jumperWrapper2 = document.querySelector(".jumper__wrapper-2");

const clouds = document.querySelector(".clouds__wrapper");
const star = document.querySelector(".star__wrapper");

const aboutTimeline = anime
  .timeline({ autoplay: false })
  .add({
    delay: 2500,
    targets: jugglerWrapper,
    top: ["100%", "5%"],
    duration: 800,
    autoplay: false,
    easing: "linear",
  })
  .add(
    {
      targets: star,
      top: ["100%", "-10%"],
      duration: 800,
      autoplay: false,
      easing: "linear",
    },
    "-=800"
  )
  .add(
    {
      targets: jugglerWrapper,
      top: "100%",
      duration: 800,
      autoplay: false,
      easing: "linear",
    },
    "+=1000"
  )
  .add(
    {
      targets: jumperWrapper2,
      top: ["65%", "150%"],
      left: ["35%", "30%"],
      opacity: {
        value: [0, 1],
        duration: 1,
      },
      duration: 1000,
      autoplay: false,
      easing: "linear",
      direction: "alternate",
    },
    "+=100"
  )
  .add({
    targets: jumperWrapper2,
    opacity: 0,
    zIndex: "-100",
    duration: 100,
    autoplay: false,
    easing: "linear",
  })
  .add(
    {
      targets: clouds,
      bottom: ["0%", "-50%"],
      duration: 500,
      autoplay: false,
      easing: "linear",
    },
    "-=1000"
  );

window.addEventListener("scroll", () => {
  aboutTimeline.seek(window.pageYOffset);
});
