const tab = document.querySelector(".tab");
if (tab !== null) {
  const navItems = tab.querySelectorAll(".tab__nav .nav__item");
  const items = tab.querySelectorAll(".tab__item");

  const getCurrentId = () => {
    let currentId = null;
    for (let i = 0; i < navItems.length; i++) {
      if (navItems[i].className.match(/\bopen\b/)) {
        currentId = i;
      }
    }
    return currentId;
  };

  const showTab = (tab) => {
    tab.style.opacity = 1;
    tab.style.visibility = "visible";
    tab.style.position = "static";
  };

  const hideTab = (tab) => {
    tab.style.opacity = 0;
    tab.style.visibility = "hidden";
    tab.style.position = "absolute";
  };

  for (let i = 0; i < navItems.length; i++) {
    if (getCurrentId() === i) {
      showTab(items[i]);
    } else {
      hideTab(items[i]);
    }
    navItems[i].addEventListener("click", function () {
      const currentTab = items[getCurrentId()];
      const tab = items[i];

      navItems[getCurrentId()].classList.remove("open");
      hideTab(currentTab);

      navItems[i].classList.add("open");
      showTab(tab);
    });
  }
}
