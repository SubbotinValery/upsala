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
