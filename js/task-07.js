// const inp = document.getElementById("font-size-control"); // знаходжу input
// const inpText = document.getElementById("text"); // знаходжу текст span

// inp.addEventListener("input", () => { // даю івент для input
//     inpText.style.fontSize = inp.value + "px"; // тексту задаю стиль = значення інпута додаю значення в px
// });




const inp = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inp.addEventListener("input", () => {
    text.style.fontSize = inp.value + "px"; 
})