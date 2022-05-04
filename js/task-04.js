const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

incrementBtn.addEventListener("click", onIncrement);
decrementBtn.addEventListener("click", onDecrement);

function onIncrement() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function onDecrement() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
