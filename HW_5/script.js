// const studentsArr = studentArr;

function CreateStudent(student) {
    this.id = getId();
    this.name = student.name;
    this.surname = student.surname;
    this.ratingPoint = student.ratingPoint;
    this.schoolPoint = student.schoolPoint;
    this.isSelfPayment = ifSelfPayment();

    function getId() {
        return Math.floor(Math.random() * Math.floor(99999999));
    }

    function ifSelfPayment() {
        if (student.ratingPoint >= 800) {
            return false;
        } else {
            return true;
        }
    }

    return this;
};

function createNewArray() {
    let result = [];
    for (let i = 0; i < studentArr.length; i++) {
        result.push(new CreateStudent(studentArr[i]));
    }
    return result;
}

let createdStudents = createNewArray();



