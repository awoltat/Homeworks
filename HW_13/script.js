//Дубликат массива с пиццами
let filteredArr = [];
for (let i = 0; i < pizzaList.length; i++) {
    filteredArr.push(pizzaList[i]);
}
;

function renderPizzas() { //вызов рендера
    let menuItem = document.getElementsByClassName('menu')[0];
    for (let i = 0; i < filteredArr.length; i++) {
        menuItem.appendChild(renderPizza(filteredArr[i]));
    };
}

function onSearch(pizzaName) { //событие
    clearPizzaDom(); //вызов очистки
    filteredArr = pizzaList.filter(pizza => pizza.name.toLowerCase().includes(pizzaName.toLowerCase())); //проверка на содержание
    renderPizzas(); //рендер нужных пицц
}

function clearPizzaDom() { //функция очистки
    document.getElementsByClassName('menu')[0].innerHTML = '';
};

const renderPizza = (pizza) => {
    const card = document.createElement('div');
    card.className = 'pizzaCard';
    // card.classList.add('col-4');
    card.id = `pizza-${pizza.id}`;
    card.style.width = '30%';
    // image
    const img = document.createElement('div');
    img.className = 'pizzaImage';
    img.innerHTML = `<img src=${pizza.img} alt="pizza">`;
    img.classList.add('pizza-card');
    card.appendChild(img);
    // name
    const pizzaName = document.createElement('div');
    pizzaName.className = 'pizza_Name';
    pizzaName.innerHTML = '<h6>' + pizza.name + '</h6>';
    card.appendChild(pizzaName);
    //composition
    const composition = document.createElement('div');
    composition.innerHTML = '<p>' + 'Состав: ' + pizza.composition.join(", ") + '</p>';
    composition.className = 'pizza_Compos';
    card.appendChild(composition);
    //caloricity
    const caloricity = document.createElement('div');
    caloricity.innerHTML = '<p>' + pizza.caloricity + '</p>';
    caloricity.innerText = `Ккал: ${pizza.caloricity}`;
    caloricity.className = 'pizza_Caloricity';
    card.appendChild(caloricity);
    //price
    const price = document.createElement('div');
    price.innerHTML = '<p>' + pizza.price + '</p>';
    price.innerText = `Цена: ${pizza.price} грн.`;
    price.className = 'pizza_Price';
    card.appendChild(price);
    //button
    const button = document.createElement('div');
    button.innerText = "Добавить в корзину";
    button.className = 'pizza_btn';
    button.classList.add('btn', 'btn-dark');
    card.appendChild(button);

    button.onclick = function (e) {
        console.log(this);
    };

    return card;
};

renderPizzas();

const select = document.getElementById('select');

select.onchange = function () {
    const newArr = [...pizzaList];
    newArr.sort((a, b) => {
        if (a.price < b.price) return this.value === '1' ? -1 : 1;
        if (a.price > b.price) return this.value === '1' ? 1 : -1;
        if (a.price === b.price) return 0
    });
    filteredArr = newArr;
    clearPizzaDom();
    renderPizzas();
};








