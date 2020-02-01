const pizzaCardContainer = document.querySelector('.pizza-info');
const pizzaCardElement = document.getElementById('pizzaContainer');
const constructor = document.querySelector('.wrapper-constructor');
const pizzaConstructorElement = document.getElementsByClassName('constructor')[0];
const createPizza = document.getElementsByClassName('create')[0];

pizzaCardContainer.addEventListener('click', function (e) {
    const elemClassName = e.target.className;
    if (elemClassName === 'pizza-info' || elemClassName === 'icon-close') {
        this.style.display = 'none';
    }
});

function foo(compositionCheckboxElement) {
    console.log(compositionCheckboxElement.checked);
};

/////// СОЗДАНИЕ ПИЦЦЫ //////////////
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
                compositionNames.push(compositionList[i].name);  //!
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
        img: 'images/pizza_12',
        composition: compositionNames,
        isSelfCreated: true,
    };

    pizzaList.push(newPizzaObj);
    filteredArr = pizzaList;
    renderPizza(newPizzaObj);
};

createPizza.onclick = function () {
    renderPizzaConstructor();
    constructor.style.display = 'flex';
    console.log('Helooooo');
};

constructor.addEventListener('click', function (e) {
    const elemClassName = e.target.className;
    if (elemClassName === 'wrapper-constructor' || elemClassName === 'icon-close') {
        console.log('click');
        constructor.style.display = 'none';
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
    const template = `

\t\t<div class="exit-btn">
\t\t\t<a href="#">
\t\t\t\t<i class="icon-close"></i>
\t\t\t</a>
\t\t</div>
\t\t<h2 class="constructor-title">Конструктор пиццы</h2>
\t\t<input type="text" class="form-control nameOfNewPizza" placeholder="Введите название пиццы:" required>
\t\t<button class="btn btn-primary btn-success" id="save-pizza-button" type="button" onclick="onPizzaSaveClick()">Сохранить</button>
\t\t<div class="content-holder">
\t\t\t<div class="left-side">
\t\t\t\t<div class="image-container">
\t\t\t\t\t<img src="images/01_osnovanie.png" alt="osnovanie" class="img-osnova">
\t\t\t\t\t<img class="component" src="images/02_sous.png" alt="components">
\t\t\t\t</div>
\t\t\t</div>
<div class="right-side">
\t\t\t\t<div class="top">
\t\t\t\t\t<div class="left">
\t\t\t\t\t\t<h5>Выберите соус:</h5>
\t\t\t\t\t\t<div class="sous-holder">
\t\t\t\t\t\t\t<label for="2"><input class="check" type="checkbox" id="2" onchange="foo(this)"> Классический</label>
\t\t\t\t\t\t\t<label for="17"><input class="check" type="checkbox" id="17" onchange="foo(this)"> Соус BBQ</label>
\t\t\t\t\t\t\t<label for="18"><input class="check" type="checkbox" id="18" onchange="foo(this)"> Соус Рикотта</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="right">
\t\t\t\t\t\t<h5>Выберите сыр:</h5>
\t\t\t\t\t\t<div class="cheese-holder">
\t\t\t\t\t\t\t<label for="3"><input class="check" type="checkbox" id="3" onchange="foo(this)"> Моцарелла</label>
\t\t\t\t\t\t\t<label for="4"><input class="check" type="checkbox" id="4" onchange="foo(this)"> Чеддар</label>
\t\t\t\t\t\t\t<label for="5"><input class="check" type="checkbox" id="5" onchange="foo(this)"> Пармезан</label>
\t\t\t\t\t\t\t<label for="6"><input class="check" type="checkbox" id="6" onchange="foo(this)"> Дорблю</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="bottom">
\t\t\t\t\t<div class="left">
\t\t\t\t\t\t<h5>Выберите мясо:</h5>
\t\t\t\t\t\t<div class="meat-holder">
\t\t\t\t\t\t\t<label for="12"><input class="check" type="checkbox" id="12" onchange="foo(this)"> Пепперони</label>
\t\t\t\t\t\t\t<label for="13"><input class="check" type="checkbox" id="13" onchange="foo(this)"> Ветчина</label>
\t\t\t\t\t\t\t<label for="14"><input class="check" type="checkbox" id="14" onchange="foo(this)"> Лосось</label>
\t\t\t\t\t\t\t<label for="15"><input class="check" type="checkbox" id="15" onchange="foo(this)"> Бекон</label>
\t\t\t\t\t\t\t<label for="16"><input class="check" type="checkbox" id="16" onchange="foo(this)"> Курица</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="right">
\t\t\t\t\t\t<h5>Выберите мясо:</h5>
\t\t\t\t\t\t<div class="veggie-holder">
\t\t\t\t\t\t\t<label for="7"><input class="check" type="checkbox" id="7" onchange="foo(this)"> Томаты</label>
\t\t\t\t\t\t\t<label for="8"><input class="check" type="checkbox" id="8" onchange="foo(this)"> Лук</label>
\t\t\t\t\t\t\t<label for="9"><input class="check" type="checkbox" id="9" onchange="foo(this)"> Кукуруза</label>
\t\t\t\t\t\t\t<label for="10"><input class="check" type="checkbox" id="10" onchange="foo(this)"> Перец</label>
\t\t\t\t\t\t\t<label for="11"><input class="check" type="checkbox" id="11" onchange="foo(this)"> Ананас</label>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t</div>
\t\t</div>
`;
    pizzaConstructorElement.innerHTML = template;
};
renderPizzaConstructor();

/////Дубликат массива с пиццами
let filteredArr = [...pizzaList];

/////// ВЫЗОВ РЕНДЕРА //////////////
function renderPizzas() {
    let menuItem = document.getElementsByClassName('menu')[0];
    for (let i = 0; i < filteredArr.length; i++) {
        menuItem.appendChild(renderPizza(filteredArr[i]));
    }
}

let select = document.getElementById('select');
let inputItem = document.getElementsByClassName('form-control')[0];
let inputPriceFrom = document.getElementById('from');
let inputPriceTo = document.getElementById('to');
let buttonItem = document.getElementById('submit-btn');
let inputCaloryFrom = document.getElementById('calory_from');
let inputCaloryTo = document.getElementById('calory_to');
let buttonCaloryItem = document.getElementById('calory_submit-btn');
let resetButton = document.getElementById('reset');

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


function getCompositionElements() {
    let compos = document.getElementsByClassName('pizza_Compos');
    return compos;
}

/////// ПОИСК ПО ИМЕНИ И КОМПОНЕНТАМ //////////////
inputItem.addEventListener('input', function (e) { // №1
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
    // name
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

    button.onclick = function (e) {
        console.log(this);
    };

    return card;
};

renderPizzas();

/////// СОРТИРОВКА ОТ БОЛЬШЕГО К МЕНЬШЕМУ И НАОБОРОТ //////////////
select.onchange = function () {
    const newArr = [...pizzaList];
    newArr.sort((a, b) => {
        // if (this.value === '0') return newArr = [...pizzaList]''
        if (a.price < b.price) return this.value === '1' ? -1 : 1;
        if (a.price > b.price) return this.value === '1' ? 1 : -1;
        if (a.price === b.price) return 0
    });
    filteredArr = newArr;
    clearPizzaDom();
    renderPizzas();
};







