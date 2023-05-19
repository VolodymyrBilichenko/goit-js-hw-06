// const inp = document.getElementById("validation-input"); // знаходжу сам input

// inp.addEventListener("blur", () => { // додаю івент на input, та створюю функцію в якій все буде виконуватися
//     const inpLength = inp.dataset.length; // знаходжу обмеження на кількість символів в input
//     const inpValue = inp.value; // знаходжу

//     if (inpValue.length === parseInt(inpLength)) { // роблю перевірку на кількість символів
//         inp.classList.add("valid")
//         inp.classList.remove("invalid")
//     } else {
//         inp.classList.add("invalid")
//         inp.classList.remove("valid")
//     };
// })


const inp = document.querySelector("#validation-input");

inp.addEventListener("blur", () => {
    const length = inp.dataset.length;
    const inpLength = inp.value.trim();
    if (parseInt(length) === inpLength.length) {
        inp.classList.add("valid");
        inp.classList.remove("invalid");
    } else {
        inp.classList.add("invalid");
        inp.classList.remove("valid");
    } 
})