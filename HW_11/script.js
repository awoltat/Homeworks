
async function promises() {
    let count = 2;
    function prom() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve( count = count * 2), 3000);
        });
    }

    function prom_second() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => resolve( count = count + 1), 2000);
        });
    }

    await prom();
    let result = await prom_second();
    console.log(result);

    // prom().then(value => prom_second().then(value1 => console.log(value1)));  второй вариант
}
promises();

