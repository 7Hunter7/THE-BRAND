// Переменные для элементов меню и корзины
const menuActive = document.querySelector("div.menu");
const menuClose = menuActive.querySelector("button.menu__close");
const menuButton = document.querySelector("a.menu__button");
const topEl = document.querySelector("div.top");
const sectionItems = document.querySelector("section.section__items");
const productEl = document.querySelector("div.product");

// Отображение/скрытие меню
menuButton.addEventListener("click", function () {
  menuActive.classList.toggle("hidden");
  topEl.classList.toggle("top__image_menu");
});

menuClose.addEventListener("click", function () {
  menuActive.classList.toggle("hidden");
  topEl.classList.toggle("top__image_menu");
});

// Инициализация массива для хранения товаров в корзине
let cartItems = [];

// Элемент для отображения количества товаров в иконке корзины
const cartCountElement = document.querySelector(".nav__button.basket .cart");

// Функция для обновления отображения количества товаров в корзине
function updateCartCount() {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartCountElement.textContent = itemCount;
}

// Функция для добавления товара в корзину
function addToCart(item) {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // Увеличиваем количество, если товар уже в корзине
    existingItem.quantity += 1;
  } else {
    // Устанавливаем количество нового товара в 1 и добавляем его в корзину
    item.quantity = 1;
    cartItems.push(item);
  }

  updateCartView();
  updateCartCount();
}

// Функция для удаления товара из корзины
function removeFromCart(itemId) {
  cartItems = cartItems.filter((item) => item.id !== itemId);
  updateCartView();
  updateCartCount();
}

// Функция для обновления отображения товаров в секции корзины
function updateCartView() {
  const cartItemsContainer = document.querySelector(".cart__items_grid");
  cartItemsContainer.innerHTML = ""; // Очищаем контейнер перед обновлением

  cartItems.forEach((item) => {
    const cartItemEl = document.createElement("div");
    cartItemEl.classList.add("cart__item");

    // Изображение товара
    const imgEl = document.createElement("img");
    imgEl.src = item.img;
    imgEl.alt = item.title;
    imgEl.classList.add("cart__item_img");

    // Детали товара
    const itemDetailsEl = document.createElement("div");
    itemDetailsEl.classList.add("cart__item_unit");

    // Название товара
    const titleEl = document.createElement("div");
    titleEl.classList.add("cart__item_title");
    titleEl.textContent = `Title: ${item.title}`;

    // Цена товара
    const priceEl = document.createElement("div");
    priceEl.classList.add("cart__item_price");
    priceEl.innerHTML = `Price: <span class="cart__item_price_span">$${item.price}</span>`;

    // Количество с возможностью изменения
    const quantityEl = document.createElement("div");
    quantityEl.classList.add("cart__item_quantity");
    quantityEl.innerHTML = `Quantity: `;
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.dataset.id = item.id;
    quantityEl.appendChild(quantityInput);

    // Кнопка для удаления товара
    const removeButton = document.createElement("button");
    removeButton.classList.add("menu__close"); // Используем класс из меню
    removeButton.innerHTML = '<img src="./img/menu__close.png" alt="close" />';
    removeButton.addEventListener("click", () => removeFromCart(item.id));

    // Добавляем элементы в структуру карточки товара в корзине
    itemDetailsEl.append(titleEl, priceEl, quantityEl);
    cartItemEl.append(imgEl, itemDetailsEl, removeButton);
    cartItemsContainer.appendChild(cartItemEl);
  });
}

// Обработчик клика по кнопке "Add to Cart"
document.querySelectorAll(".items__img_hover_btn").forEach((button) => {
  button.addEventListener("click", () => {
    const item = {
      id: button.dataset.id, // data-id товара
      title: button.dataset.title, // Название товара
      price: button.dataset.price, // Цена товара
      img: button.dataset.img, // Путь к изображению товара
    };
    addToCart(item);
  });
});

// Обработчик для изменения количества товаров через инпут
document.querySelector(".cart__items_grid").addEventListener("input", (e) => {
  if (e.target.type === "number") {
    const itemId = e.target.dataset.id;
    const newQuantity = parseInt(e.target.value, 10);

    if (newQuantity > 0) {
      const item = cartItems.find((item) => item.id === itemId);
      if (item) item.quantity = newQuantity;
    } else {
      removeFromCart(itemId); // Удаляем товар, если количество стало 0
    }

    updateCartCount(); // Обновляем счетчик товаров
  }
});
