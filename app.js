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

loginButton.addEventListener('click',onLoginBtnClick);

const h1 = document.querySelector('.hello h1');

console.dir(h1);

function handleTitleclick(){
    console.log("title click!");
    h1.style.color = "blue";
}

function handlemousewheel(){
    console.log("title wheel!");
    h1.style.color = "black";
}
function handlemouseenter(){
    console.log("mouse is here!");
    h1.innerText = "mouse is here!";
}

function handlemouseleave(){
    console.log("mouse is gone..");
    h1.innerText = "mouse is gone..";
}

h1.onclick = handleTitleclick;
h1.addEventListener('click',handleTitleclick);

h1.addEventListener('mousewheel',handlemousewheel);
h1.addEventListener('mouseenter',handlemouseenter);
h1.addEventListener('mouseleave',handlemouseleave);


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowcopy() {
    alert("copier!");
}

function handleWindowoffline() {
    alert("offline?! SOS!");
}
function handleWindowonline() {
    alert("online!");
}

