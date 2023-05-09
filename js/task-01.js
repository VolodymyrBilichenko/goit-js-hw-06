
const category = document.querySelector('#categories');
const categoryList = category.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((items) => { 
    const itemH = items.querySelector("h2").textContent;
    const itemList = items.querySelectorAll("li").length;
    console.log(`Category: ${itemH}`);
    console.log(`Elements: ${itemList}`);
});