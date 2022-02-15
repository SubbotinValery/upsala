const accordionItems = document.querySelectorAll(".accordion .accordion__item");

accordionItems.forEach((item) => {
  const btn = item.querySelector(".accordion__control .accordion__btn");

  const close = () => {
    const control = item.querySelector(".accordion__control");
    const contentWrapper = item.querySelector(".accordion-content__wrapper");
    const content = item.querySelector(".accordion-content");

    const itemHeight = item.offsetHeight;
    const itemBorderWidth = getComputedStyle(item, null).getPropertyValue(
      "border-bottom-width"
    );
    const controlHeight = control.offsetHeight;
    const contentWrapperHeight = contentWrapper.offsetHeight;
    const contentHeight = content.offsetHeight;

    contentWrapper.style.opacity = 0;
    contentWrapper.style.transform = `translateY(0%)`;
    contentWrapper.style.height = "0px";
    item.style.height = `calc(${controlHeight}px + ${itemBorderWidth} * 2)`;
  };

  const open = () => {
    const control = item.querySelector(".accordion__control");
    const contentWrapper = item.querySelector(".accordion-content__wrapper");
    const content = item.querySelector(".accordion-content");

    const itemHeight = item.offsetHeight;
    const controlHeight = control.offsetHeight;
    const contentWrapperHeight = contentWrapper.offsetHeight;
    const contentHeight = content.offsetHeight;

    contentWrapper.style.opacity = 1;
    contentWrapper.style.transform = `translateY(${controlHeight}px)`;
    contentWrapper.style.height = `${controlHeight + contentHeight}px`;
    item.style.height = `${controlHeight + contentHeight + 30}px`;
  };

  close();
  btn.addEventListener("click", function () {
    if (item.className.match(/\bopen\b/)) {
      item.classList.remove("open");
      close();
    } else {
      item.classList.add("open");
      open();
    }
  });
});
