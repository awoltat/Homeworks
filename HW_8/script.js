let kids = [];

class Kid{
    constructor({name, age, gender}){
        this.id = this.uuidv4() // генерируем id
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class Room{
    constructor(kidsArr, roomNumber){
        this.kidsArr = kidsArr;
        this.roomNumber = roomNumber;
    }



    getKidsCount = function () {
        return this.kidsArr.length;
    };

    getLastKid = function() {
      return this.kidsArr[this.kidsArr.length - 1];
    };

    getFemaleCount = function() {
        let result = 0;
        for (let key in kidsArr) {
            if (kidsArr[key].gender === 'female') {
                result++;
            }
        }
        return result;
    };

    getMaleCount = function() {
        let result = 0;
        for (let key in kidsArr) {
            if (kidsArr[key].gender === 'male') {
                result++;
            }
        }
        return result;
    };

    setLastKid = function (kid) {
      this.kidsArr.push(kid);
    };


}

for (let key in kidsArr) {
    kids.push(new Kid(kidsArr[key]));
}
console.log(kids);

const room = new Room(kids, 101);
room.kidsCount // 4
room.femaleCount // 1
room.maleCount // 3
room.lastKid  // Kid { id: 4, name: 'Mitya', age: 8, gender: 'male' }
room.lastKid = { name: 'Kolya', age: 9, gender: 'male' } // Kid { id: 5, name: 'Kolya', age: 9, gender: 'male' }
room.lastKid  // Kid { id: 5, name: 'Kolya', age: 9, gender: 'male' }
room.kidsCount // 5
console.log(room.getKidsCount() + ' детей');
console.log(room.getFemaleCount() + ' девочка');
console.log(room.getMaleCount() + ' мальчика');
console.log(room.getLastKid());
room.setLastKid(new Kid(kids[0]));
console.log(room.getLastKid());
console.log(room.getKidsCount() + ' детей');
