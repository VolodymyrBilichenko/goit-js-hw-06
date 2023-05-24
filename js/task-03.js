// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];


// const galList = document.querySelector('.gallery'); // отримую доступ до списку ul
// galList.style.display = "flex"; // додаю стилі для item
// galList.style.listStyleType = "none"; 
// galList.style.alignItems = "center";
// galList.style.gap = "50px";


// const imgList = document.createElement('img'); // створюю картинки в item
// const imagesArr = images.map(imgArr =>         // перибираю масив об'єктів
//   `<li><img src = ${imgArr.url} alt = ${imgArr.alt} width = 300px></img></li>` // за допомогою шаблоного рядка вивожу значення об'єктів
// ).join(' ') // потрібно перечитати 

// galList.insertAdjacentHTML('beforeend', imagesArr); // в список ul додаю весь свій контент в середину в кінець 





// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];


// const gallery = document.querySelector(".gallery");
// const img = images.map(item => 
//   `<li class = "photo"><img src = "${item.url}" alt = "${item.alt}" width = 500px height = 300px></img></li>`
// ).join("");
// gallery.insertAdjacentHTML("beforeend", img);











const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

const img = images.map(({url, alt}) => 
  `<li class="photo"><img src="${url}" alt="${alt}" width="500px" height="300px"></img></li>`
).join("");

gallery.insertAdjacentHTML("afterend", img);