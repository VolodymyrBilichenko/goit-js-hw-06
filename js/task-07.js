const inp = document.getElementById("font-size-control"); // знаходжу input 
const inpText = document.getElementById("text"); // знаходжу текст span

inp.addEventListener("input", () => { // даю івент для input 
    inpText.style.fontSize = inp.value + "px"; // тексту задаю стиль = значення інпута додаю значення в px
});