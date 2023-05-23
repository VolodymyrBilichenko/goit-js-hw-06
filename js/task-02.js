// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];


// const recipe = document.querySelector('#ingredients'); // прокладую шлях до ul
// const ingredientsArr = ingredients.map(item => { // роблю перебор массиву 
//   const createList = document.createElement('li'); // створюю в списку ul пункти li 
//   createList.classList.add('ingredients-li'); // додаю назву лішкам (class) 
//   createList.textContent = item; // заповнюю лішки контентом 
//   return createList;
// });
// recipe.append(...ingredientsArr); 







const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const recept = document.querySelector("#ingredients");

const ingrArr = ingredients.map(item => {
  const receptLi = document.createElement('li');
  receptLi.classList.add("item");
  receptLi.textContent = item;
  return receptLi;
});
recept.prepend(...ingrArr);
















// ! знайти шаг між числами массиву 

// const array = [2, 4, 7, 4, 11, 7];
// // const array = [2, 4, 7, 9, 11, 14];

// const step = [];

// for (let i = 0; i < array.length - 1; i += 1){
//   const currentStep = array[i + 1] - array[i];
//   step.push(currentStep);
// }
// console.log(step);
