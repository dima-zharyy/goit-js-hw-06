const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createLiElementsFromData = (data) => {
  const newElements = data.map((el) => {
    const newElement = document.createElement("li");
    newElement.textContent = el;
    newElement.classList.add("item");
    return newElement;
  });
  return newElements;
};

const newElements = createLiElementsFromData(ingredients);
const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...newElements);
