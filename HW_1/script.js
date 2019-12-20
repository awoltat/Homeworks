//#1
let num = 3.14; //number
let name = 'Tanya'; //string
let isMale = false; //boolean
let age = null; //null
let surname; //undefined

//#2
let kiaRio = {
    brand: 'Kia',
    model: 'Rio',
    year: 2013,
    engineCapacity: 1.6,
    isAutoTransmission: true,
    isNew: false,
    mileage: null,
    fuel: null,
    color: 'gray',
    weight: null,
};
let toyotaCorolla = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2015,
    engineCapacity: 1.8,
    isAutoTransmission: true,
    isNew: true,
    mileage: null,
    fuel: null,
    color: 'black',
    weight: null,
};
let mazda = {
    brand: 'Mazda',
    model: '6',
    year: 2009,
    engineCapacity: 1.6,
    isAutoTransmission: false,
    isNew: true,
    mileage: null,
    fuel: null,
    color: 'light gray',
    weight: null,
};
let hondaAccord = {
    brand: 'Honda',
    model: 'Accord',
    year: 2011,
    engineCapacity: 1.8,
    isAutoTransmission: true,
    isNew: false,
    mileage: null,
    fuel: null,
    color: 'black',
    weight: null,
};
let nissanQashqai = {
    brand: 'Nissan',
    model: 'Qashqai',
    year: 2018,
    engineCapacity: 2,
    isAutoTransmission: true,
    isNew: true,
    mileage: null,
    fuel: null,
    color: 'red',
    weight: null,
};

//#3
let getVehicleAttributes = () => {
    console.log(kiaRio)
};
getVehicleAttributes()

//#5
const arr = [
    kiaRio, toyotaCorolla, mazda,hondaAccord, nissanQashqai
];

const getCarByIndex = (num) => {
    console.log(arr[num])
};
getCarByIndex(1);