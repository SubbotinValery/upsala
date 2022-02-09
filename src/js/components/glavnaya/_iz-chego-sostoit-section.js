const preview = document.querySelectorAll(".iz-chego-sostoit__preview img");
const list = document.querySelectorAll(".iz-chego-sostoit__list li");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", function () {
    preview[i].style.transform = "translate(-50%, -50%) rotate(360deg)";
    preview[i].style.width = "100%";
    preview[i].style.opacity = 1;
  });
  list[i].addEventListener("mouseout", function () {
    preview[i].style.transform = "translate(-50%, -50%) rotate(0deg)";
    preview[i].style.width = "0%";
    preview[i].style.opacity = 0;
  });
}

const huliganskiiProektSection = document.querySelector(
  ".huliganskii-proekt-section"
).offsetTop;
const proftruppaSection = document.querySelector(
  ".proftruppa-section"
).offsetTop;
const incluzivniiProektSection = document.querySelector(
  ".incluzivnii-proekt-section"
).offsetTop;
const chtoVRezultateSection = document.querySelector(
  ".chto-v-rezultate-section"
).offsetTop;
const kulturniiProductiSection = document.querySelector(
  ".kulturnii-producti-section"
).offsetTop;
const smiONasSection = document.querySelector(".smi-o-nas-section").offsetTop;
const chtoProishoditSection = document.querySelector(
  ".chto-proishodit-section"
).offsetTop;
const nashaIstoriaSection = document.querySelector(
  ".nasha-istoria-section"
).offsetTop;

list.forEach((element) => {
  const title = element.textContent.toLowerCase().split(" ").join("");
  console.log(title, element);
  switch (title) {
    case "хулиганскийпроект":
      element.addEventListener("click", function () {
        window.scroll({ top: huliganskiiProektSection, behavior: "smooth" });
      });
      break;
    case "профтруппа":
      element.addEventListener("click", function () {
        window.scroll({ top: proftruppaSection, behavior: "smooth" });
      });
      break;
    case "инклюзивныйпроект":
      element.addEventListener("click", function () {
        window.scroll({ top: incluzivniiProektSection, behavior: "smooth" });
      });
      break;
    case "чтоврезультате?":
      element.addEventListener("click", function () {
        window.scroll({ top: chtoVRezultateSection, behavior: "smooth" });
      });
      break;
    case "культурныепродукты":
      element.addEventListener("click", function () {
        window.scroll({ top: kulturniiProductiSection, behavior: "smooth" });
      });
      break;
    case "смионас":
      element.addEventListener("click", function () {
        window.scroll({ top: smiONasSection, behavior: "smooth" });
      });
      break;
    case "ачтопроисходитсейчас":
      element.addEventListener("click", function () {
        window.scroll({ top: chtoProishoditSection, behavior: "smooth" });
      });
      break;
    case "нашаистория":
      element.addEventListener("click", function () {
        window.scroll({ top: nashaIstoriaSection, behavior: "smooth" });
      });
      break;
    default:
      break;
  }
});
