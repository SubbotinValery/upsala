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

  const date = document.getElementById("date");

  function maskForDate(value) {
    if (value.length > 10) {
      return value.substring(0, 10);
    }

    switch (value.length) {
      case 1:
        if (value > 3) {
          value = "3";
        }
        break;
      case 2:
        if (value > 31) {
          value = "31";
        }
        break;
      case 3:
      case 4:
        if (value[2] !== ".") {
          value = value.substr(0, 2) + "." + value[2];
        }
        if (value[3] > 1) {
          value = value.substr(0, 3) + "1";
        }
        break;
      case 5:
        if (value.substr(3, 2) > 12) {
          value = value.substr(0, 3) + "12";
        }
        break;
      case 6:
      case 7:
        if (value[5] !== ".") {
          value = value.substr(0, 5) + "." + value[5];
        }
        if (value[6] < 1) {
          value = value.substr(0, 6) + "1";
        }
        break;
      default:
        break;
    }

    return value;
  }

  date.addEventListener("keyup", () => {
    date.value = maskForDate(date.value);
  });
}
