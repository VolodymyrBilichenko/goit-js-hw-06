// const countBtnMin = document.querySelector('[data-action="decrement"]'); // знаходжу кнопку за data-action (-)
// const countBtnMax = document.querySelector('[data-action="increment"]'); // аналогічно але (+)
// const countSum = document.querySelector('#value'); // знаходжу span в якому буде зберігатися значення
// let counterValue = 0; // створюю стартове значення для лічильника

// countBtnMax.addEventListener("click", () => { // вішаю івент на кнопку (швент - клік), та створюю змінну
//     countSum.textContent = counterValue += 1; // до span я додаю стартовому значенню +1 при кожному кліку
// });
// countBtnMin.addEventListener("click", () => { // аналогічно але для (-)
//     countSum.textContent = counterValue -= 1;
// });





const minusBtn = document.querySelector(`[data-action="decrement"]`);
const plusBtn = document.querySelector(`[data-action="increment"]`);
const textValue = document.querySelector("#value");
let counterValue = 0;

minusBtn.addEventListener("click", () => {
    textValue.textContent = counterValue -= 1;
});
plusBtn.addEventListener("click", () => {
    textValue.textContent = counterValue += 1;
});
