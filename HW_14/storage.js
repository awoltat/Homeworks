const PIZZAS_KEY = 'pizzaList';
const BUCKET_KEY = 'bucketList';
const SUM_KEY = 'pizzasPriceSum';
const COUNT_KEY = 'pizzasCount';

class Storage {
    constructor () {
        if (!this.pizzaList) {
            this.pizzaList = pizzaList;
        }
        if (!this.bucketList) {
            this.bucketList = [];
        }
    }

    get pizzaList() {
        return this.getItemInLocalStorage(PIZZAS_KEY);
    }

    get pizzasPrice() {
        return this.getItemInLocalStorage(SUM_KEY);
    }

    get pizzasCount() {
        return this.getItemInLocalStorage(COUNT_KEY);
    }

    get bucketList() {
        return this.getItemInLocalStorage(BUCKET_KEY);
    }

    set pizzaList(arr) {
        this.setItemInLocalStorage(PIZZAS_KEY, arr);
    }

    set pizzasPrice(price) {
        this.setItemInLocalStorage(SUM_KEY, price);
    }

    set pizzasCount(count) {
        this.setItemInLocalStorage(COUNT_KEY, count);
    }

    set bucketList(arr) {
        this.setItemInLocalStorage(BUCKET_KEY, arr);
    }

    setItemInLocalStorage(key, arr) {
        localStorage.setItem(key, JSON.stringify(arr));
    };

    getItemInLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    };
}
