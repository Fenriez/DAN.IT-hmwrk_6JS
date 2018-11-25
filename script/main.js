let firstName = prompt('Enter your name', '');
let lastName = prompt('Enter your last name', '');

let createNewUser = function (firstName, lastName) {
    let user = new Object();

    user.getFirstName = function() {
        return this.firstName = firstName; 
    }
    user.getLastName = function() {
        return this.lastName = lastName; 
    }

    user.getLogin = function() {
        this.login = this.getFirstName().charAt(0).toLowerCase() + this.getLastName().toLowerCase();
        return this.login;
    }

    return user;
}

let newUser = createNewUser(firstName, lastName);
let newUser2 = createNewUser('John', 'Smith');

console.log('Your login: ' + newUser.getLogin());
console.log('Test user: ' + newUser2.getLogin());