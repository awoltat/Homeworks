//№1

const getPizzasNames = () => {
    let pizzaNames = [];
    for (let i = 0; i < pizzaList.length; i++) {
        pizzaNames.push(pizzaList[i].name);
    }

    return pizzaNames;
};
console.log(getPizzasNames());

//№2

const getPizzaById = (id) => {
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id === id) {
            return pizzaList[i];
        }
    }
};

console.log(getPizzaById(5));

//№3

let getPizzasByComposition = (composition) => {
    let result = [];
    for (let i = 0; i < pizzaList.length; i++) {
        for (let j = 0; j < pizzaList[i].composition.length; j++) {
            if (composition === pizzaList[i].composition[j]) {
                result.push(pizzaList[i]);
            }
        }
    }

    return result;
};

console.log(getPizzasByComposition('соус BBQ'));

//№4
const maxCaloricity = 1100;
const getPizzasByCalloricity = (caloricity) => {
    let result = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].caloricity > caloricity) {
            result.push(pizzaList[i]);
        }
    }

    return result;
};

console.log(getPizzasByCalloricity(maxCaloricity));

//№5

const getAllWithoutPizzaById = (id) => {
    let result = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id !== id) {
            result.push(pizzaList[i]);
        }
    }

    return result;
};

console.log(getAllWithoutPizzaById(2));


//№6

const maxCompositions = 6;

const sortByMaxCompositions = (compositions) => {
    let result = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].composition.length > compositions) {
            result.push(pizzaList[i]);
        }
    }

    return result;
};

console.log(sortByMaxCompositions(maxCompositions));
