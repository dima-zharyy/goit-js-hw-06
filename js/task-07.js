const fontSizeRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeRange.addEventListener("input", onfontSizeRange);

function onfontSizeRange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
