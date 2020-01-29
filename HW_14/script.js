/////Дубликат массива с пиццами
let filteredArr = [...pizzaList];

function renderPizzas() { //вызов рендера
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


resetButton.addEventListener('click', function () { // №3
    inputPriceFrom.value = null;
    inputPriceTo.value = null;
    inputCaloryFrom.value = null;
    inputCaloryTo.value = null;
    select.value = null;
    filteredArr = pizzaList;
    clearPizzaDom();
    renderPizzas();
});

buttonItem.addEventListener('click', function () { // №2, фильтр по цене
    clearPizzaDom();
    filteredArr = pizzaList.filter(pizza => pizza.price >= inputPriceFrom.value && pizza.price <= inputPriceTo.value);
    renderPizzas();
});

buttonCaloryItem.addEventListener('click', function () { // №2, фильтр по калориям
    clearPizzaDom();
    filteredArr = pizzaList.filter(pizza => pizza.caloricity >= inputCaloryFrom.value && pizza.caloricity <= inputCaloryTo.value);
    renderPizzas();
});


function getCompositionElements() {
    let compos = document.getElementsByClassName('pizza_Compos');
    return compos;
}

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




function clearPizzaDom() { //функция очистки
    document.getElementsByClassName('menu')[0].innerHTML = '';
}

const renderPizza = (pizza) => {
    const card = document.createElement('div');
    card.className = 'pizzaCard';
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

// function onSearch(pizzaName) { //событие
//     clearPizzaDom(); //вызов очистки
//     filteredArr = pizzaList.filter(pizza => pizza.name.toLowerCase().includes(pizzaName.toLowerCase())); //проверка на содержание
//     renderPizzas(); //рендер нужных пицц
// }





