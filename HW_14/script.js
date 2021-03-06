const pizzaCardContainer = document.querySelector('.pizza-info');
const pizzaCardElement = document.getElementById('pizzaContainer');
const constructor = document.querySelector('.wrapper-constructor');
const pizzaConstructorElement = document.getElementsByClassName('constructor')[0];
const basket = document.querySelector('.wrapper-basket');
const basketElement = document.querySelector('#buskets');
const headerBasket = document.querySelector('.header-basket');
const createPizza = document.getElementsByClassName('create')[0];
let sumAmount = document.getElementsByClassName('sumAmount')[0];
let sumPrice = document.getElementsByClassName('sumPrice')[0];
let select = document.getElementById('select');
let inputItem = document.getElementsByClassName('form-control')[0];
let inputPriceFrom = document.getElementById('from');
let inputPriceTo = document.getElementById('to');
let buttonItem = document.getElementById('submit-btn');
let inputCaloryFrom = document.getElementById('calory_from');
let inputCaloryTo = document.getElementById('calory_to');
let buttonCaloryItem = document.getElementById('calory_submit-btn');
let resetButton = document.getElementById('reset');

//________________ 16 ______________//
let storage = new Storage();
let bucketList = storage.bucketList;
pizzaList = storage.pizzaList;
console.log(pizzaList);
let filteredArr = [...pizzaList];
//______________ END ______________//
//_________________ 15 _____________//

pizzaCardContainer.addEventListener('click', function (e) {
    const elemClassName = e.target.className;
    if (elemClassName === 'pizza-info' || elemClassName === 'icon-close') {
        this.style.display = 'none';
    }
});

/////// СОЗДАНИЕ ПИЦЦЫ /////////////
function onPizzaSaveClick() {
    let compositionsCheckboxes = []; //массив айди
    for (let i = 0; i < document.getElementsByClassName('check').length; i++) {
        if (document.getElementsByClassName('check')[i].checked) {
            compositionsCheckboxes.push(+document.getElementsByClassName('check')[i].id);
        }
    }
    console.log(compositionsCheckboxes);

    let compositionNames = []; //массив имен
    let pizzaPrice = 0;
    let pizzaCaloricity = 0;

    for (let i = 0; i < compositionList.length; i++) {
        for (let j = 0; j < compositionsCheckboxes.length; j++) {
            if (compositionList[i].id === compositionsCheckboxes[j]) {
                compositionNames.push(compositionList[i].name);
                pizzaPrice += compositionList[i].price;
                pizzaCaloricity += compositionList[i].caloricity;
            }
        }
    }
    let pizzaName = document.getElementsByClassName('nameOfNewPizza')[0].value; //имя новой пиццы
    console.log(pizzaName);
    console.log(compositionNames);

    let newPizzaObj = {
        id: pizzaList.length + 1,
        name: pizzaName,
        caloricity: pizzaCaloricity,
        price: pizzaPrice,
        img: 'images/13_ham.png',
        composition: compositionNames,
        isSelfCreated: true,
    };

    pizzaList.push(newPizzaObj); // это твоя созданная пицца
    storage.pizzaList = pizzaList; // это гет-запрос с локал-стораджа
    filteredArr = [...pizzaList]; // это массив-копия куда я передаю обновленный пицца-лист


}

createPizza.onclick = function () {
    renderPizzaConstructor();
    constructor.style.display = 'flex';
};

constructor.addEventListener('click', function (e) {
    const elemClassName = e.target.className;
    if (elemClassName === 'wrapper-constructor' || elemClassName === 'icon-close') {
        console.log('click');
        constructor.style.display = 'none';
    }
});

basket.addEventListener('click', function (e) {
    const elemClassName = e.target.className;
    if (elemClassName === 'wrapper-basket' || elemClassName === 'icon-close') {
        basket.style.display = 'none';
    }
});

/////// РЕНДЕР ИНФО-КАРТОЧКИ //////////////
const renderPizzaCard = (pizza) => {
    const template = `<div class="exit-btn">
<a href="#">
<i class="icon-close"></i>
</a>
</div>
<div class="info-wrapper">
<div class="left-side">
<h3>${pizza.name}</h3>
<img src="${pizza.img}" alt="pizza">
</div>
<div class="right-side">
<span>Состав:</span>
<ul>
${pizza.composition.map(composition => {
        return `<li>${composition}</li>`
    }).join('')
    }
</ul>
<p>Цена: ${pizza.price}</p>
<p>Калорийность: ${pizza.caloricity}</p>
</div>
</div>`;
    pizzaCardElement.innerHTML = template;
};

/////// РЕНДЕР КОНСТРУКТОРА //////////////
const renderPizzaConstructor = () => {
    const template = ` <div class="exit-btn">
            <a href="#">
                <i class="icon-close"></i>
            </a>
        </div>
        <h2 class="constructor-title">Конструктор пиццы</h2>
        <input type="text" class="form-control nameOfNewPizza" placeholder="Введите название пиццы:" required>
        <button class="btn btn-primary btn-success" id="save-pizza-button" type="button" onclick="onPizzaSaveClick()">Сохранить</button>
        <div class="content-holder">
            <div class="left-side">
                <div class="image-container">
                    <img src="images/01_osnovanie.png" alt="osnovanie" class="img-osnova">
                    <img class="component" src="images/02_sous.png" alt="components">
                </div>
            </div>
        <div class="right-side">
                <div class="top">
                    <div class="left">
                        <h5>Выберите соус:</h5>
                        <div class="sous-holder">
                            <label for="2"><input class="check" type="checkbox" id="2"> Классический</label>
                            <label for="17"><input class="check" type="checkbox" id="17" > Соус BBQ</label>
                            <label for="18"><input class="check" type="checkbox" id="18" > Соус Рикотта</label>
                        </div>
                    </div>
                    <div class="right">
                        <h5>Выберите сыр:</h5>
                        <div class="cheese-holder">
                            <label for="3"><input class="check" type="checkbox" id="3" > Моцарелла</label>
                            <label for="4"><input class="check" type="checkbox" id="4" > Чеддар</label>
                            <label for="5"><input class="check" type="checkbox" id="5" > Пармезан</label>
                            <label for="6"><input class="check" type="checkbox" id="6" > Дорблю</label>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <h5>Выберите мясо:</h5>
                        <div class="meat-holder">
                            <label for="12"><input class="check" type="checkbox" id="12">Пепперони</label>
                            <label for="13"><input class="check" type="checkbox" id="13" > Ветчина</label>
                            <label for="14"><input class="check" type="checkbox" id="14" > Лосось</label>
                            <label for="15"><input class="check" type="checkbox" id="15" > Бекон</label>
                            <label for="16"><input class="check" type="checkbox" id="16" > Курица</label>
                        </div>
                    </div>
                    <div class="right">
                        <h5>Выберите мясо:</h5>
                        <div class="veggie-holder">
                            <label for="7"><input class="check" type="checkbox" id="7" > Томаты</label>
                            <label for="8"><input class="check" type="checkbox" id="8" > Лук</label>
                            <label for="9"><input class="check" type="checkbox" id="9" > Кукуруза</label>
                            <label for="10"><input class="check" type="checkbox" id="10" > Перец</label>
                            <label for="11"><input class="check" type="checkbox" id="11" > Ананас</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
`;
    pizzaConstructorElement.innerHTML = template;
};
renderPizzaConstructor();

/////// РЕНДЕР КОРЗИНЫ //////////////////
const renderBasket = (pizzas) => {
    let pizza = pizzas[0];
    return `
        <div class="content">
            <div class="image">
                <img src="${pizza.img}" alt="pizza">
            </div>
            <div class="info">
                <p>${pizza.name}</p>
            </div>
            <div class="price">
                <span>${pizza.price} грн</span>
            </div>
            <div class="amount">
                <span>${pizzas.length}</span>
            </div>
        </div>`;
};

/////// ВЫЗОВ РЕНДЕРА //////////////
function renderPizzas() {
    let menuItem = document.getElementsByClassName('menu')[0];
    for (let i = 0; i < filteredArr.length; i++) {
        menuItem.appendChild(renderPizza(filteredArr[i]));
    }
}

/////// СБРОС ФИЛЬТРОВ //////////////
resetButton.addEventListener('click', function () { // №3
    inputPriceFrom.value = null;
    inputPriceTo.value = null;
    inputCaloryFrom.value = null;
    inputCaloryTo.value = null;
    filteredArr = pizzaList;
    clearPizzaDom();
    renderPizzas();
});

/////// ФИЛЬТР ПО ЦЕНЕ //////////////
buttonItem.addEventListener('click', function () { // №2, фильтр по цене
    clearPizzaDom();
    filteredArr = pizzaList.filter(pizza => pizza.price >= inputPriceFrom.value && pizza.price <= inputPriceTo.value);
    renderPizzas();
});

/////// ФИЛЬТР ПО КАЛОРИЯМ //////////////
buttonCaloryItem.addEventListener('click', function () { // №2, фильтр по калориям
    clearPizzaDom();
    filteredArr = pizzaList.filter(pizza => pizza.caloricity >= inputCaloryFrom.value && pizza.caloricity <= inputCaloryTo.value);
    renderPizzas();
});

/////// ПОИСК ПО ИМЕНИ И КОМПОНЕНТАМ //////////////
inputItem.addEventListener('input', function () {
    function getCompositionElements() {
        let compos = document.getElementsByClassName('pizza_Compos');
        return compos;
    }

    console.log(this.value);
    clearPizzaDom();
    const searchValue = this.value.toLowerCase();
    filteredArr = pizzaList.filter(pizza => {
        let pizzaNameCondition = pizza.name.toLowerCase().includes(searchValue);
        let foundCompositions = pizza.composition.filter(pizzaComposition =>
            pizzaComposition.toLowerCase().includes(searchValue));
        let compositionsCondition = foundCompositions.length > 0;
        return pizzaNameCondition || compositionsCondition;
    });
    renderPizzas();
    let compElements = getCompositionElements();
    for (let i = 0; i < compElements.length; i++) {
        const spanStr = '<span>Состав: </span>';
        let originalStr = compElements[i].childNodes[0].innerHTML.replace(spanStr, '');
        originalStr = originalStr.replace(searchValue, '<mark>' + searchValue + '</mark>');
        console.log(originalStr);
        let resultText = spanStr + originalStr;
        compElements[i].childNodes[0].innerHTML = resultText;
    }
});

/////// ОЧИСТКА DOM //////////////
function clearPizzaDom() { //функция очистки
    document.getElementsByClassName('menu')[0].innerHTML = '';
}

/////// РЕНДЕР ПИЦЦ //////////////
const renderPizza = (pizza) => {
    const card = document.createElement('div');
    card.className = 'pizzaCard';
    card.id = `pizza-${pizza.id}`;
    card.style.width = '30%';
    card.onclick = function () {
        renderPizzaCard(pizza);
        pizzaCardContainer.style.display = 'flex';
    };

    // image
    const img = document.createElement('div');
    img.className = 'pizzaImage';
    img.innerHTML = `<img src=${pizza.img} alt="pizza">`;
    img.classList.add('pizza-card');
    card.appendChild(img);
    // name-
    const pizzaName = document.createElement('div');
    pizzaName.className = 'pizza_Name';
    pizzaName.innerHTML = '<h6>' + pizza.name + '</h6>';
    card.appendChild(pizzaName);
    //composition
    const composition = document.createElement('div');
    composition.innerHTML = '<p>' + '<span>Состав: </span>' + pizza.composition.join(", ") + '</p>';
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
    //favorite
    const fav = document.createElement('button');
    fav.className = 'btn';
    fav.classList = 'btn-fav';
    fav.innerText = 'Добавить в избранное';
    card.appendChild(fav);

    fav.addEventListener("click", ev => { // №4
        let elementId = +fav.parentNode.id.replace('pizza-', '');

        for (let i = 0; i < filteredArr.length; i++) {
            if (filteredArr[i].id === elementId) {
                filteredArr[i].isFavorite = true;
            }
        }
        console.log(filteredArr);

    });

    /***
     * Homework 17
     * Сreated a multidimensional array,
     * that helps to find out how many copies of pizza were ordered
     */

    button.onclick = function (event) {
        bucketList = storage.bucketList;
        console.log(bucketList);

        let isFirstElement = true;
        for (let i = 0; i < bucketList.length; i++) {
            if (bucketList[i][0].id === pizza.id) {
                bucketList[i].push(pizza);
                isFirstElement = false;
                break;
            }
        }

        if (isFirstElement) {
            bucketList.push([pizza]);
        }
        let renderResult = '';
        for (let i = 0; i < bucketList.length; i++) {
            renderResult += renderBasket(bucketList[i]);
        }

        basketElement.innerHTML = renderResult;
        basket.style.display = 'flex';
        event.stopPropagation();

        storage.bucketList = bucketList;
    };

    headerBasket.onclick = function () {
        bucketList = storage.bucketList;
        let price = 0;
        let pizzasAmount = 0;
        let renderResult = '';
        for (let i = 0; i < bucketList.length; i++) {
            renderResult += renderBasket(bucketList[i]);
            price += bucketList[i][0].price * bucketList[i].length;
            pizzasAmount += bucketList[i].length;
        }

        storage.pizzasPrice = price;
        storage.pizzasCount = pizzasAmount;

        basketElement.innerHTML = renderResult;
        sumAmount.innerHTML = String(pizzasAmount) + ' pizzas';
        sumPrice.innerHTML = String(price);
        basket.style.display = 'flex';
    };

    return card;
};

renderPizzas();

/////// СОРТИРОВКА ОТ БОЛЬШЕГО К МЕНЬШЕМУ И НАОБОРОТ //////////////
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









