const supportPage = document.getElementById("supportPage");
if (supportPage !== null) {
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
        } else {
          hide();
        }
      });
    });
  }
}
