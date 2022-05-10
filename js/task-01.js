const categories = document.querySelector("#categories");
const numberOfCategories = categories.children.length;
const categoryElements = Object.values(categories.children);

const logCategoriesAndElements = (elements) => {
  console.log("Number of Categories: ", numberOfCategories);

  elements.forEach((element) => {
    const titleText = element.firstElementChild.textContent;
    const numberOfElements = element.lastElementChild.children.length;
    console.log("Category: ", titleText);
    console.log("Elements: ", numberOfElements);
  });
};

logCategoriesAndElements(categoryElements);
