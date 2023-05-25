function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const boxesContainer = document.getElementById("boxes");
// const inputEl = document.querySelector("#controls input ");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");

// btnCreate.addEventListener("click", () => {
//   const amount = Number(inputEl.value);
//   createBoxes(amount);
// });

// function createBoxes(amount) {
//   destroyBoxes();

//   const boxes = [];
//   for (let i = 1; i <= amount; i++) {
//     const box = document.createElement("div");

//     const size = 30 + i * 10 + "px";

//     box.style.width = size;
//     box.style.height = size;
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.margin = "6px";
//     boxes.push(box);
//   }

//   boxesContainer.append(...boxes);
// }

// btnDestroy.addEventListener("click", destroyBoxes);
// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }






const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes')
}

refs.btnCreate.addEventListener('click', createFunc);

function createFunc() {
  const inpTxt = Number(refs.input.value);
  const maxInp = refs.input.max;

  if (inpTxt > maxInp) {
    alert('Error');
    refs.input.value = '';
    return;
  } createBoxes(inpTxt);
};

function createBoxes(inpTxt) {
  destroyBoxes();

  const obj = [];
  for (let i = 0; i < inpTxt; i += 1) {
    const boxEl = document.createElement('div');
    const size = 30 + i * 10 + 'px';
    boxEl.style.width = size;
    boxEl.style.height = size;
    boxEl.style.margin = '10px';
    boxEl.style.backgroundColor = getRandomHexColor();
    obj.push(boxEl);
  }
  refs.box.append(...obj);
};

refs.btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.box.innerHTML = '';
  refs.input.value = '';
}