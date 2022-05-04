const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onKeypress);

function onKeypress(event) {
  inputEl.value === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.currentTarget.value);
}
