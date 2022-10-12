document.title = "Doragi";

// 1번째
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 2번째
const loginInput = document.querySelector("#login-form input");
const loginButton =  document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username)
    }
};


loginButton.addEventListener('click',onLoginBtnClick);