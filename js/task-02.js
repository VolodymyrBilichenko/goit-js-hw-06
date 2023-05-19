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



