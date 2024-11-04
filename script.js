const menuActive = document.querySelector("div.menu");
console.log(menuActive);

const menuClose = menuActive.querySelector("button.menu__close");
console.log(menuClose);

const menuButton = document.querySelector("a.menu__button");
console.log(menuButton);

const topEl = document.querySelector("div.top");
console.log(topEl);

menuButton.addEventListener("click", function (e) {
  menuActive.classList.toggle("hidden");
  topEl.classList.toggle("top__image_menu");
});

menuClose.addEventListener("click", function (e) {
  menuActive.classList.toggle("hidden");
  topEl.classList.toggle("top__image_menu");
});

const parseDataItems = JSON.parse(dataItems);
const sectionItems = document.querySelector("section.section__items");
console.log(sectionItems);

const template = new__template.content;
console.log(template);
parseDataItems.forEach((element) => {
  const newTemplate = template.cloneNode(true);
  const imgEl = newTemplate.querySelector("img.item__img");
  imgEl.src = element.img;
  imgEl.setAttribute("alt", element.altImg);
  newTemplate.querySelector("h2.item__title").textContent = element.title;
  newTemplate.querySelector("p.item__about").textContent = element.about;
  newTemplate.querySelector("button.item__buttons").textContent = element.price;
  sectionItems.appendChild(newTemplate);
});

const itemsEl = document.querySelectorAll("items.items");
console.log(itemsEl);

const itemsImgEl = document.querySelectorAll("items.items > img");
console.log(itemsImgEl);

const productEl = document.querySelector("div.product");
console.log(productEl);

// const divCartEl = document.createElement("div");
// divCartEl.classList.add(".items__to_cart");
// const titleCartEl = document.createElement("h3");
// titleCartEl.classList.add(".items__to_cart_h3");
// titleCartEl.textContent = "You cart";
// divCartEl.appendChild(titleCartEl);

// itemsEl.forEach((element) => {
//   element.addEventListener("mouseenter", function (event) {
//     const divActiveEl = document.createElement("div");
//     divActiveEl.classList.add(".items__active");
//     const buttonActiveEl = document.createElement("button");
//     buttonActiveEl.textContent = "Add to Cart";
//     buttonActiveEl.classList.add("items__active_button");

//     divActiveEl.appendChild(buttonActiveEl);
//     element.insertAdjacentElement("afterbegin", divActiveEl);

//     buttonActiveEl.addEventListener("click", function (e) {
//       divCartEl.appendChild(element);
//       productEl.insertAdjacentElement("afterend", divCartEl);
//     });
//   });
// });

// itemsEl.forEach((element) => {
//   element.addEventListener("mouseleave", function (e) {
//     element.firstChild.remove();
//   });
// });
