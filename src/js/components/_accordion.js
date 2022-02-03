const accordionItems = document.querySelectorAll(".accordion .accordion__item");

accordionItems.forEach((item) => {
  const btn = item.querySelector(".accordion__control .accordion__btn");
  const content = item.querySelector(".accordion__content");

  if (item.className.match(/\bclose\b/)) {
    const itemHeight = item.offsetHeight;
    item.style.height = `${itemHeight}px`;
    content.style.opacity = 0;
    content.style.transform = `translateY(0%)`;
  }

  const show = () => {
    const itemHeight = item.offsetHeight;
    const contentHeight = content.offsetHeight;

    item.style.height = `${itemHeight + contentHeight}px`;
    content.style.opacity = 1;
    content.style.transform = `translateY(${itemHeight - 30}px)`;
  };

  const hide = () => {
    const itemHeight = item.offsetHeight;
    const contentHeight = content.offsetHeight;

    item.style.height = `${itemHeight - contentHeight}px`;
    content.style.opacity = 0;
    content.style.transform = `translateY(0%)`;
  };

  btn.addEventListener("click", function () {
    if (item.className.match(/\bclose\b/)) {
      item.classList.remove("close");
      item.classList.add("open");
      show();
    } else {
      item.classList.remove("open");
      item.classList.add("close");
      hide();
    }
  });
});
