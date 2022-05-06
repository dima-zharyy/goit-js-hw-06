function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const controlsElements = Object.values(controls.children);
const refs = {
  input: controlsElements[0],
  createBtn: controlsElements[1],
  destroyBtn: controlsElements[2],
};
const boxes = document.querySelector("#boxes");

let selectedNumber = 0;
refs.input.addEventListener("change", onSelectNumber);
refs.createBtn.addEventListener("click", onCreateBoxes);
refs.destroyBtn.addEventListener("click", onDestroyBoxes);

function onSelectNumber(event) {
  selectedNumber = Number(event.currentTarget.value);
}

function onCreateBoxes() {
  const numberOfBoxesToCreate = selectedNumber;
  if (!numberOfBoxesToCreate) {
    alert("Please select a number of boxes to create!");
    return;
  }
  const boxesCollection = createBoxes(numberOfBoxesToCreate);
  boxes.append(...boxesCollection);
}

function createBoxes(amount) {
  if (!amount) return;
  const newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    if (i === 0) {
      const newBox = document.createElement("div");
      newBox.style.height = "30px";
      newBox.style.width = "30px";
      newBox.style.backgroundColor = getRandomHexColor();
      newBoxes.push(newBox);
      continue;
    }

    const newBox = document.createElement("div");
    newBox.style.height = `${parseInt(newBoxes[i - 1].style.height) + 10}px`;
    newBox.style.width = `${parseInt(newBoxes[i - 1].style.width) + 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newBox);
  }
  return newBoxes;
}

function onDestroyBoxes() {
  for (let i = boxes.childElementCount - 1; i >= 0; i -= 1) {
    boxes.children[i].remove();
  }
  refs.input.value = "";
  selectedNumber = 0;
}
