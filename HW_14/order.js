function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(1000000));
};

let storage = new Storage();

const cartObj = JSON.parse(localStorage.getItem('.orderId')) || [];
let orderCount = JSON.parse(localStorage.getItem('.orderId'));
orderId = document.querySelector('.orderId');
orderId.innerHTML = `Ваш номер заказа: ` + getRandomNumber(1000000);
totalOrderCount = document.querySelector('.totalCount');
totalOrderCount.innerHTML = `Итого: ` + storage.pizzasCount + ` пицц`;

totalOrderPrice = document.querySelector('.totalPrice');
totalOrderPrice.innerHTML = `Всего: ` + storage.pizzasPrice + ' грн';


console.log(storage.pizzasCount);
console.log(storage.pizzasPrice);