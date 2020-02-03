const PIZZAS_KEY = 'pizzaList';
const BUCKET_KEY = 'bucketList';

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

    get bucketList() {
        return this.getItemInLocalStorage(BUCKET_KEY);
    }

    set pizzaList(arr) {
        this.setItemInLocalStorage(PIZZAS_KEY, arr);
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
