const mainForm = document.querySelector(".login-form"); // добираюсь до форми

mainForm.addEventListener("submit", (event) =>{ // даю івент дормі при сабміт
  event.preventDefault(); // скидую стандартні настройки (щоб не перезавантажувалась сторінка при відправці) 
  const emailInput = mainForm.elements.email; // добираюсь до інпута з емейл
  const passwordInput = mainForm.elements.password; // добираюсь до інпута з паролем
  
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") { // даю умову якщо інпути пусті тоді...
    alert("Please fill in all fields of the form."); // виведе вікно з написом
    return;
  }
  
  const dataForm = {}; // 
  dataForm[emailInput.name] = emailInput.value.trim(); 
  dataForm[passwordInput.name] = passwordInput.value.trim();
  console.log(dataForm);
  mainForm.reset();

});
