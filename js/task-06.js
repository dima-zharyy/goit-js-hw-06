const inputEl = document.querySelector("#validation-input");

console.log(inputEl.dataset.length);

inputEl.addEventListener("blur", onValidation);

function onValidation(event) {
  if (event.currentTarget.value === "") {
    inputEl.classList.remove("valid", "invalid");
    return;
  }

  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
