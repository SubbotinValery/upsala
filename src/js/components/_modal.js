const modal = document.querySelector(".modal");

if (modal !== null) {
  const btns = document.querySelectorAll(
    '[class*="modal__btn-"]:not(.modal__btn-close)'
  );

  const contents = document.querySelectorAll('[class*="modal__content-"]');
  let currentContent = null;

  const findBtnType = (btnClasses) => {
    let type = "";
    for (let i = 0; i < btnClasses.length; i++) {
      if (btnClasses[i].startsWith("modal__btn-")) {
        type = btnClasses[i].replace("modal__btn-", "");
      }
    }
    return type;
  };

  const getCurrentContent = (type) => {
    let current = null;
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].classList.contains(`modal__content-${type}`)) {
        current = contents[i];
      }
    }
    return current;
  };

  modal.addEventListener("click", function (e) {
    if (e.target == this) {
      if (modal.className.match(/\bis-open\b/)) {
        modal.classList.remove("is-open");
        currentContent.classList.remove("is-open");
      }
    }
  });

  btns.forEach((btn) => {
    const btnClasses = btn.className.split(" ");
    const btnType = findBtnType(btnClasses);
    currentContent = getCurrentContent(btnType);
    const closeBtn = currentContent.querySelector(".modal__btn-close");
    if (closeBtn !== null) {
      closeBtn.addEventListener("click", function () {
        modal.classList.remove("is-open");
        currentContent.classList.remove("is-open");
      });
    }
    btn.addEventListener("click", function () {
      currentContent = getCurrentContent(btnType);
      modal.classList.add("is-open");
      currentContent.classList.add("is-open");
    });
  });
}
