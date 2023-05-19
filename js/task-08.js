// const mainForm = document.querySelector(".login-form"); // добираюсь до форми

// mainForm.addEventListener("submit", (event) =>{ // даю івент дормі при сабміт
//   event.preventDefault(); // скидую стандартні настройки (щоб не перезавантажувалась сторінка при відправці) 
//   const emailInput = mainForm.elements.email; // добираюсь до інпута з емейл
//   const passwordInput = mainForm.elements.password; // добираюсь до інпута з паролем
  
//   if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") { // даю умову якщо інпути пусті тоді...
//     alert("Please fill in all fields of the form."); // виведе вікно з написом
//     return;
//   }
  
//   const dataForm = {}; // 
//   dataForm[emailInput.name] = emailInput.value.trim(); 
//   dataForm[passwordInput.name] = passwordInput.value.trim();
//   console.log(dataForm);
//   mainForm.reset();

// });







const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inpEmail = form.elements.email;
  const inpPassword = form.elements.password;
  if (inpEmail.value.trim() === "" || inpPassword.value.trim() === "") {
    alert("Заповніть поля");
    return;
  } const formObject = {};
  formObject[inpEmail.name] = inpEmail.value.trim();
  formObject[inpPassword.name] = inpPassword.value.trim();
  console.log(formObject);
  form.reset();
})
