const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createLiElementsFromData = (array) => {
  const newElements = array.map((el) => {
    const newElement = document.createElement("li");
    newElement.textContent = el;
    newElement.classList.add("item");
    return newElement;
  });
  return newElements;
};

const newElements = createLiElementsFromData(ingredients);
const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...newElements);
