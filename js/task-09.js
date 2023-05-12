function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color"); // добираюсь до кнопки
const spanColor = document.querySelector(".color"); // добираюсь до спана

btnColor.addEventListener("click", () => { // на кнопку вішаю івент(клік)

  document.body.style.backgroundColor = getRandomHexColor(); //кажу що потрібно змінити стиль бекграунда на рандомний 
  spanColor.textContent = document.body.style.backgroundColor; // кажу щоб текст також мінявся на колір який змінюється
});