//№1
let name = prompt('Как Вас зовут?')
const sayHi = (time) => {
    if (time >= 6 && time <= 12) {
        console.log('Доброе утро,' + " " + name);
    } else if (time > 12 && time <= 18) {
        console.log('Добрый день,' + " " + name);
    } else if (time > 18 && time <= 24) {
        console.log('Добрый вечер,' + " " + name);
    } else if (time > 0 && time < 6) {
        console.log('Доброй ночи,' + " " + name);
    } else {
        console.log('Incorrect time')
    }
};
sayHi(20);

//№2
const correctEmail = 'Qwerty@gmail.com'
const correctPassword = 'Qwe123'

const checkIsUserValid = (email, password) => {
    if (correctEmail === email && correctPassword === password) {
        console.log('Access successful');
    } else {
        console.log('Access denied');
    }
}
checkIsUserValid('Qwerty@gmail.com', 'Qwe123');

//№3
let checkEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        console.log('Number' + " " + number + " " + 'is Even');
    } else {
        console.log('Number' + " " + number + " " + 'is Odd');
    }
};

checkEvenOrOdd(15);

//№4

const getPorchAndFloor = (number) => {
    const appPerFloor = 3;
    const appPerPorch = 9 * appPerFloor;

    let porch = number / appPerPorch | 0;
    if (number % appPerPorch !== 0) {
        porch++;
    }

    if (porch > 1) {
        number = number - (porch * appPerPorch - appPerPorch);
    }

    let floor = number / appPerFloor | 0;
    if (number % appPerFloor !== 0) {
        floor++;
    }

    console.log(porch);
    console.log(floor);

};
getPorchAndFloor(312);

//№5
let checkNumEvenOrOdd = (number) => {
    let result;
    let numArray = ("" + number).split("");

    if (number % 2 === 0) {
        result = 0;
        for (let i = 0; i < numArray.length; i++) {
            result += Number(numArray[i]);
        }
    } else {
        result = 1;
        for (let i = 0; i < numArray.length; i++) {
            result *= Number(numArray[i]);
        }
    }
    console.log(result);
};

checkNumEvenOrOdd(312);
checkNumEvenOrOdd(125);

