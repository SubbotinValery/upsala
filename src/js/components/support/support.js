const radios = document.querySelectorAll(
  "input[type='radio'][name='amountType']"
);
const amountInput = document.querySelector(".amount__input");

if (radios !== null && amountInput !== null) {
  const hide = () => {
    amountInput.classList.remove("is-visible");
    amountInput.value = "";
  };

  const show = () => {
    amountInput.classList.add("is-visible");
  };

  hide();
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked && radio.id === "amountCustom") {
        show();
        console.log("этот");
      } else {
        hide();
        console.log("не этот");
        console.log(radio.checked);
      }
    });
  });
}
