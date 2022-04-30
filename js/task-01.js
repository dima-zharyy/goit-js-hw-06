const categoriesEl = document.querySelector("#categories");
const numberOfCategories = categoriesEl.children.length;
console.log("Number of Categories: ", numberOfCategories);

const firstCategoryEl = categoriesEl.firstElementChild;
const secondCategoryEl = firstCategoryEl.nextElementSibling;
const thirdCategoryEl = categoriesEl.lastElementChild;

const logNameAndNumberOfElements = (element) => {
  const titleEl = element.querySelector("h2");
  const titleText = titleEl.textContent;
  const listEl = element.querySelector("ul");
  const numberOfElements = listEl.children.length;
  //   console.log(`Category: ${titleText}
  // Elements: ${numberOfElements}`);
  console.log("Category: ", titleText);
  console.log("Elements: ", numberOfElements);
};

logNameAndNumberOfElements(firstCategoryEl);
logNameAndNumberOfElements(secondCategoryEl);
logNameAndNumberOfElements(thirdCategoryEl);
