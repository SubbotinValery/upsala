const expandVerticalBlocks = document.querySelectorAll(
  ".expand-vertical-block"
);

expandVerticalBlocks.forEach((expandBlock) => {
  const btn = expandBlock.querySelector(".expand-btn");
  const items = expandBlock.querySelectorAll(".expand-item");

  let itemsHight = 0;
  for (let i = 0; i < items.length; i++) {
    itemsHight += items[i].getBoundingClientRect().height;
  }

  if (expandBlock.className.match(/\bclose\b/)) {
    const defaultHeight = items[0].getBoundingClientRect().height;
    expandBlock.style.height = `${defaultHeight}px`;
  }

  const show = () => {
    let itemsHight = 0;
    for (let i = 0; i < items.length; i++) {
      itemsHight += items[i].getBoundingClientRect().height;

      items[i].style.transform = `translateY(${
        itemsHight - items[i].getBoundingClientRect().height
      }px)`;
      items[i].style.opacity = 1;
    }

    expandBlock.style.height = `${itemsHight}px`;
  };

  const hide = () => {
    const defaultHeight = items[0].getBoundingClientRect().height;
    let itemsHight = 0;
    for (let i = 0; i < items.length; i++) {
      itemsHight += items[i].getBoundingClientRect().height;
      if (i !== 0) {
        items[i].style.transform = `translateY(${0}%)`;
        items[i].style.opacity = 0;
      }
    }

    expandBlock.style.height = `${defaultHeight}px`;
  };

  btn.addEventListener("click", function () {
    console.log("test", itemsHight);

    if (expandBlock.className.match(/\bclose\b/)) {
      expandBlock.classList.remove("close");
      expandBlock.classList.add("open");
      show();
    } else {
      expandBlock.classList.remove("open");
      expandBlock.classList.add("close");
      hide();
    }
  });
});
