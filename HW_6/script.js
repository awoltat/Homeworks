console.log(faker.helpers.createCard());

// 1
function CreateCustomer(customer) {
    this.id = getId();
    this.name = customer.name;
    this.username = customer.username;
    this.email = customer.email;
    this.address = customer.address;
    this.phone = customer.phone;
    this.website = customer.website;
    this.company = customer.company;
    this.posts = customer.posts;
    this.accountHistory = customer.accountHistory;

    function getId() {
        return Math.floor(Math.random() * Math.floor(99999999));
    }
}

function getCustomerArray() {
    let result = [];
    for (let i = 0; i < 50; i++) {
        result.push(new CreateCustomer(faker.helpers.createCard()));
    }
    return result;
}

let customerArray = getCustomerArray();

// 2

function getAllNameSAndEmails(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        let newObj = {
            name: inputArray[i].name,
            email: inputArray[i].email,
        };
        result.push(newObj);
    }
    return result;
}

console.log(getAllNameSAndEmails(customerArray));

// 3

function getAllCustomersIdsWithComDomain(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        let site = inputArray[i].website;
        let index = site.indexOf('.');
        let resultSite = site.substring(index);
        if (resultSite === '.com') {
            result.push(inputArray[i].id);
        }
    }
    return result;
}

console.log(getAllCustomersIdsWithComDomain(customerArray));

// 4

function getAllGmailCustomers(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        let site = inputArray[i].email;
        let index = site.indexOf('@');
        let resultSite = site.substring(index);
        if (resultSite === '@gmail.com') {
            result.push(inputArray[i].id);
        }
    }
    return result;
}

console.log(getAllGmailCustomers(customerArray));

// 5

function sortByCompanyType(inputArray) {
    const llcType = 'LLC';
    const groupType = 'GROUP';
    const incType = 'INC';
    let llcResult = [];
    let groupResult = [];
    let incResult = [];
    for (let i = 0; i < inputArray.length; i++) {
        let companyNameArray = inputArray[i].company.name.split(' ');
        let companyType = companyNameArray[companyNameArray.length - 1].toUpperCase();

        if (companyType === llcType) {
            llcResult.push(inputArray[i].id);
        }
        if (companyType === groupType) {
            groupResult.push(inputArray[i].id);
        }
        if (companyType === incType) {
            incResult.push(inputArray[i].id);
        }
    }

    let obj = {
        LLC: llcResult,
        GROUP: groupResult,
        Inc: incResult,
    };

    return obj;
}

console.log(sortByCompanyType(customerArray));



