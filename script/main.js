let firstName = prompt('Enter your name', '');
let lastName = prompt('Enter your last name', '');

let createNewUser = function (firstName, lastName) {
    let user = new Object();

    user.getFirstName = function() {
        this.firstName = firstName; 
    }
    user.getLastName = function() {
        this.lastName = lastName; 
    }

    user.getLogin = function() {
        user.login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    }

    user.getFirstName();
    user.getLastName();
    user.getLogin();

    return user;
}

let newUser = createNewUser(firstName, lastName);
let newUser2 = createNewUser('John', 'Smith');

console.log('Your login: ' + newUser.login);
console.log('Test user: ' + newUser2.login);