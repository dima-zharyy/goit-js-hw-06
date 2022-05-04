const form = document.querySelector(".login-form");
const inputEmail = form[0];
const inputPassword = form[1];

console.log(inputEmail);
console.log(inputPassword);
console.log(form);

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.dir(inputEmail);
  if (!inputEmail.value || !inputPassword.value) {
    alert("Все поля должны быть заполнены");
    return;
  }
  console.dir(event.currentTarget);

  const formData = new FormData(event.currentTarget);
  const submitData = {};

  formData.forEach(({ name, value }) => {
    submitData.name = name;
    submitData.value = value;
  });
  console.log(submitData);
  console.dir(event.currentTarget);
  return;
}
