document.title = "Doragi";

// 1번째
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 2번째
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    // const username = loginInput.value;
    console.log(loginInput.value)
    }

//서브밋은 엔터 or 클릭으로 작동
loginForm.addEventListener("submit",onLoginSubmit);

