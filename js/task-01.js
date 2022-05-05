const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
const categoryElements = Object.values(categories.children);

const logCategoriesAndElements = (elements) => {
  console.log("Number of Categories: ", numberOfCategories);

  elements.forEach((element) => {
    const titleEl = element.querySelector("h2");
    const titleText = titleEl.textContent;
    const listEl = element.querySelector("ul");
    const numberOfElements = listEl.children.length;
    console.log("Category: ", titleText);
    console.log("Elements: ", numberOfElements);
  });
};

logCategoriesAndElements(categoryElements);
