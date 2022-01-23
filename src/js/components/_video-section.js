import anime from "../vendor/anime.min";

const video = document.querySelector(".video-block");
const videoText = document.querySelector(".video-block__text");

const videoTimeline = anime
  .timeline({ autoplay: false })
  .add({
    delay: 1000,
    targets: video,
    bottom: ["-100%", "0%"],
    duration: 1000,
    easing: "linear",
  })
  .add(
    {
      targets: videoText,
      bottom: ["-100%", "100%"],
      duration: 1500,
      easing: "linear",
    },
    "-=100"
  )
  .add(
    {
      targets: video,
      bottom: "150%",
      duration: 400,
      easing: "linear",
    },
    "-=1000"
  );

window.addEventListener("scroll", () => {
  videoTimeline.seek(window.pageYOffset);
});
