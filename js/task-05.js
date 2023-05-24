// const textInput = document.querySelector("#name-input"); // знаходжу сам інпут
// const output = document.querySelector("#name-output"); // знаходжу текст яких повинен змінюватись на текст яких знаходиться в інпут

// textInput.addEventListener("input", (sense) => { // додаю інпуту івент
//     output.textContent = sense.currentTarget.value ? sense.currentTarget.value : "Anonymous";
// }); // тексту я кажу що за допомогою тернарного оператора ти виводиш текст яких знаходиться в інпуті,
//     // якщо інпут порожній або з нього все видалили, тоді "Anonymous";



// const textSpan = document.querySelector("#name-output");
// const textInp = document.querySelector("#name-input");

// 1 способ

// textInp.addEventListener("input", (event) => {
//     if (event.currentTarget.value.trim() === "") { // если значение данного поля в текущем событии <---- читать по стрелке
//         textSpan.textContent = "Anonymous";
//     } textSpan.textContent = event.currentTarget.value;
// })

// textInp.addEventListener("input", (event) => {
//     textSpan.textContent = !event.currentTarget.value.trim() ? "Anonymous" : event.currentTarget.value.trim();
// })





const textInp = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

textInp.addEventListener("input", txt => {
    if (txt.currentTarget.value.trim() === "") {
        nameOut.textContent = "Anonymous";
    } nameOut.textContent = txt.currentTarget.value;
});