import anime from "../../vendor/anime.min";

const video = document.querySelector(".video-block");
const videoText = document.querySelector(".video-block__text");

const videoTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: video,
      bottom: ["-100%", "0%"],
      duration: 600,
      easing: "linear",
    },
    1100
  )
  .add(
    {
      targets: videoText,
      bottom: ["-100%", "0%"],
      duration: 600,
      easing: "linear",
    },
    1700
  )
  .add(
    {
      targets: video,
      bottom: "100%",
      duration: 600,
      easing: "linear",
    },
    2300
  )
  .add(
    {
      targets: videoText,
      bottom: "100%",
      duration: 600,
      easing: "linear",
    },
    2300
  );

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    videoTimeline.seek(window.pageYOffset);
  });
});
