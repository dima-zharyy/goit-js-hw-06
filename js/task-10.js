function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const controlsElements = Object.values(controls.children);
const refs = {
  input: controlsElements[0],
  createBtn: controlsElements[1],
  destroyBtn: controlsElements[2],
  boxes: document.querySelector("#boxes"),
};

refs.input.addEventListener("change", onSelectNumber);
refs.createBtn.addEventListener("click", onCreateBoxes);
refs.destroyBtn.addEventListener("click", onDestroyBoxes);
let selectedNumber = 0;

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
  refs.boxes.append(...boxesCollection);
  refs.input.value = "";
  selectedNumber = 0;
}

function createBoxes(amount) {
  const newBoxes = [];

  let lastHeight = refs.boxes.childElementCount
    ? refs.boxes.lastElementChild.style.height
    : "20px";
  let lastWidth = refs.boxes.childElementCount
    ? refs.boxes.lastElementChild.style.width
    : "20px";

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.height = `${parseInt(lastHeight) + 10}px`;
    newBox.style.width = `${parseInt(lastWidth) + 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newBox);
    lastHeight = newBoxes[i].style.height;
    lastWidth = newBoxes[i].style.width;
  }
  return newBoxes;
}

function onDestroyBoxes() {
  if (!refs.boxes.childElementCount) {
    alert("There is nothing to destroy! Create at least one box.");
    return;
  }
  for (let i = refs.boxes.childElementCount - 1; i >= 0; i -= 1) {
    refs.boxes.children[i].remove();
  }
  refs.input.value = "";
  selectedNumber = 0;
}
