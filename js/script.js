let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userPassInput = document.getElementById("userPass");
let signEmailInput = document.getElementById("signEmail");
let signPassInput = document.getElementById("signPass");
let users = [];


if (localStorage.getItem("usersList") == null) {
    users = [];
}else {
    users = JSON.parse(localStorage.getItem("usersList"))
};
function addUser() {
    if (!checkIsEmpty()) {
        if (exist()) {
            displayExist();
        }
        else{
            let user = {
                name: userNameInput.value,
                email: userEmailInput.value,
                password: userPassInput.value,
            }
            users.push(user);
            localStorage.setItem("usersList", JSON.stringify(users));
            displaySuccess()
        }
    }
    else {
        displayRequired();
    }
    clearForm();
};

function welcome() {
    document.getElementById("welcome").innerHTML = `Welcome  ${JSON.parse(localStorage.getItem("homeList"))}`;
    // console.log("5raaaa");
};
function exist() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == userEmailInput.value) {
            return true;
        }
    }
    return false;
};
function existLogin() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == signEmailInput.value && users[i].password == signPassInput.value) {

            let name = users[i].name;
            localStorage.setItem("homeList", JSON.stringify(name));
            location.replace("home.html");
            return true;
        }
    }
};
function searchUser() {
    if (checkIsEmptySign()) {
        displayRequiredSign();
    }
    else {
        if (existLogin()) {

        }
        else {
            displayIncorrect();
        }

    }

};
function clearForm() {
    userNameInput.value = "";
    userEmailInput.value = "";
    userPassInput.value = "";
    // *console.log("foll 3leek");
};
function checkIsEmpty() {
    if (userNameInput.value != "" && userPassInput.value != "" && userEmailInput.value != "") {
        return false;
    }
    else {
        return true;
    }
};
function checkIsEmptySign() {
    if (signEmailInput.value == "" || signPassInput.value == "") {
        return true;
    }
    else {
        return false;
    }
}
function displayRequired() {
    document.getElementById("required").innerHTML = `<span class=' text-warning'>All inputs is required</span>`;
};
function displayExist() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>email already exists</span>`;

};
function displayIncorrect() {
    document.getElementById("result-sign").innerHTML = `<span class=' text-danger'>incorrect email or password</span>`;
};
function displayRequiredSign() {
    document.getElementById("result-sign").innerHTML = `<span class=' text-warning'>All inputs is required</span>`;
};
function displaySuccess() {
    document.getElementById("required").innerHTML = `<span class=' text-success'>Success</span>`;
};

// ! need to learn where i call it .
// function validation() {
//     let nameRegex = /^[ِA-Za-z]{3,10}$/;
//     let emailRegex = /^[A-Za-z]{3,9}[0-9]{1,5}@[a-z]{3,9}\.com$/;
//     let passRegex = /^[A-Z][0-9]{1,6}$/;
//     return nameRegex.test(userNameInput.value) && emailRegex.test(userEmailInput.value) && passRegex.test(userPassInput.value);
// }