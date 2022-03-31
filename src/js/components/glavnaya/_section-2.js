const section = document.querySelector(".section-2");
const sectionInfo = section.getBoundingClientRect();

const videoWrapper = section.querySelector(".video__wrapper");
const videoText = section.querySelector(".video__text");
const video = section.querySelector(".video");

if (videoWrapper !== null) {
  videoWrapper.addEventListener("click", () => {
    console.log("test");
    if (videoWrapper.className.match(/\bpause\b/)) {
      videoWrapper.classList.remove("pause");
      video.controls = true;
      video.play();
    } else {
      videoWrapper.classList.add("pause");
      video.controls = false;
      video.pause();
    }
  });
}

const videoTimeline = anime
  .timeline({ autoplay: false })
  .add(
    {
      targets: videoWrapper,
      bottom: ["-100%", "50%"],
      translateY: ["50%", "50%"],
      opacity: {
        value: [0, 1],
        delay: 200,
      },
      duration: 600,
      easing: "linear",
    },
    "+=1000"
  )
  .add({
    targets: videoText,
    bottom: ["-100%", "50%"],
    translateY: ["50%", "50%"],
    opacity: [0, 1],
    duration: 600,
    easing: "linear",
  })
  .add({
    targets: videoWrapper,
    bottom: "200%",
    duration: 600,
    easing: "linear",
  })
  .add({
    targets: videoText,
    bottom: "200%",
    duration: 600,
    easing: "linear",
  });

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    videoTimeline.seek(window.pageYOffset);
  });
});
