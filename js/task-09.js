function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorOutput = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  colorOutput.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
