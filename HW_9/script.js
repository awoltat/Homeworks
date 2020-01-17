class Condidate {
    constructor(condidate) {
        this.condidate = condidate;
    }
    get state() { //1
        return this.condidate.address.split(',')[2];
    }

    get registered() { //2
        return new Date(this.condidate.registered.split(' ')[0]);
    }

    get allFriends() { //4
        let result = [];
        for (let key in this.condidate.friends) {
            result.push(this.condidate.friends[key].name.split(' ')[0]);
        }
        return result.join(', ');
    }

    get addressInfo() { //7
        let adressArr = this.condidate.address.split(',');
        return {
            street: adressArr[0],
            city: adressArr[1],
            state: adressArr[2],
            postalCode: adressArr[3]
        }
    }
}

let condidate = new Condidate(condidateArr[0]);
console.log(condidate.state);
console.log(condidate.registered);
console.log(condidate.allFriends);
console.log(condidate.addressInfo);

//3

let removeUser = function (index) {
    condidateArr.splice(index, 1);
};

console.log(condidateArr.length);
removeUser(3);
console.log(condidateArr.length);


//5

let getAllKeys = function (condidate) {
    let result = [];
    for (let key in condidate) {
        result.push(key);
    }
    return result;

};

console.log(getAllKeys(condidateArr[1]));

//6

let getAllValues = function (condidate) {
    let result = [];
    for (let key in condidate) {
        result.push(condidate[key]);
    }
    return result;
};

console.log(getAllValues(condidateArr[5]));


