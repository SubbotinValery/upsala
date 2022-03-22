const profileNav = document.querySelectorAll(".profile__nav .nav__item");
const profileBlock = document.querySelector(".profile__block");

if (profileNav !== null && profileBlock !== null) {
  const getCurrentId = () => {
    let currentId = null;
    for (let i = 0; i < profileNav.length; i++) {
      if (profileNav[i].className.match(/\bis-active\b/)) {
        currentId = i;
      }
    }
    return currentId;
  };

  const getScrollTarget = (navItem) => {
    const navContent = navItem.innerHTML.toLowerCase().split(" ").join("");
    switch (navContent) {
      case "подписка":
        profileBlock.querySelector(".subscription__block").scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;
      case "данныепрофиля":
        profileBlock.querySelector(".profile__data").scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;

      case "транзакции":
        profileBlock.querySelector(".transaction__block").scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };

  for (let i = 0; i < profileNav.length; i++) {
    profileNav[i].addEventListener("click", function () {
      const current = profileNav[getCurrentId()];
      const next = profileNav[i];

      current.classList.remove("is-active");
      next.classList.add("is-active");

      getScrollTarget(next);
    });
  }
}
