const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const inputEmail = formElements.email.value;
  const inputPassword = formElements.password.value;

  if (!inputEmail || !inputPassword) {
    alert("Все поля должны быть заполнены");
    return;
  }

  const formData = new FormData(event.currentTarget);
  const submitData = {};

  formData.forEach((value, name) => {
    submitData[name] = value;
  });

  console.log(submitData);
  console.log("Ваша форма успешно отправлена");

  event.currentTarget.reset();
}
