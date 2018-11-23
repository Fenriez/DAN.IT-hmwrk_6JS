let createNewUser = function () {
    let user = new Object();

    user.getFirstName = function() {
        return prompt('Enter your name', '');
    }
    user.getLastName = function() {
        return prompt('Enter your last name', '');
    }

    user.getLogin = function() {
        return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    }

    user.firstName = user.getFirstName();
    user.lastName = user.getLastName();
    user.login = user.getLogin();

    return user;
}

let newUser = createNewUser();

console.log(newUser.login);