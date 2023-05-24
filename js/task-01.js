
// const category = document.querySelector('#categories');
// const categoryList = category.querySelectorAll('.item');
// console.log(`Number of categories: ${categoryList.length}`);

// categoryList.forEach((items) => {
//     const itemH = items.querySelector("h2").textContent;
//     const itemList = items.querySelectorAll("li").length;
//     console.log(`Category: ${itemH}`);
//     console.log(`Elements: ${itemList}`);
// });




// const category = document.querySelector("#categories").children // добираюсь до списку
// console.log(`Number of categories: ${category.length}`); // виводжу кількість категорій

// const categoryLi = document.querySelectorAll(".item"); // добираюсь до дітей всього списка
// categoryLi.forEach(item => { // перебираю всіх дітей(все що знаходиться в списку) списка
//     const firstCategoryLi = item.firstElementChild.textContent; // за допомогою навігаціі по ДОМ я добираюсь до заголовка
//     const lastCategoryLi = item.lastElementChild.children; // добираюсь до дітей списка (до інших списків), та знаходжу їх дітей

//     console.log(`Category: ${firstCategoryLi}`); // виводжу у консоль категорії
//     console.log(`Elements: ${lastCategoryLi.length}`); // виводжу у консоль всю длинну внуків
// });




// const refs = {
//     categor: document.querySelector("#categories").children,
//     categorLi: document.querySelectorAll(".item")
// }

// console.log(`Number of categories: ${refs.categor.length}`);
// refs.categorLi.forEach(itemEl => {
//     const firstCategor = itemEl.firstElementChild.textContent;
//     console.log(`Category: ${firstCategor}`);

//     const lastCategor = itemEl.lastElementChild.children;
//     console.log(`Elements: ${lastCategor.length}`);
// });






const refs = {
    listLi: document.querySelectorAll(".item"),
} 
console.log(`Number of categories: ${refs.listLi.length}`);

refs.listLi.forEach(item => {
    const liTitle = item.querySelector("h2").textContent;
    console.log(`Category: ${liTitle}`);
    
    const elements = item.querySelectorAll("li").length;
    console.log(`Elements: ${elements}`);
});