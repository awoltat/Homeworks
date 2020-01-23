//1
async function promises() {
    let count = 2;

    function prom() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(count = count * 2), 3000);
        });
    }

    function prom_second() {
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve(count = count + 1), 2000);
        });
    }

    await prom();
    let result = await prom_second();
    console.log(result);

    // prom().then(value => prom_second().then(value1 => console.log(value1)));  второй вариант
}

promises();

//2
async function foo() {
    let result = [];
    const getBooks = async (n = 1) => {
        let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting=${n}`);
        books = await books.json();
        return books.items
    };

    for (let i = 1; i <= 5; i++) {
        await getBooks(i).then(value => result = result.concat(value));
    }
    console.log(result);
}

foo();



