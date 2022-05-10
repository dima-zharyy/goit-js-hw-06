const textEl = document.querySelector("#text");
const fontSizeRange = document.querySelector("#font-size-control");
textEl.style.fontSize = `${fontSizeRange.value}px`;

fontSizeRange.addEventListener("input", onfontSizeRange);

function onfontSizeRange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
