document.title = "Doragi";

<<<<<<< HEAD
// 1ë²ˆì§¸
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 2ë²ˆì§¸
const loginInput = document.querySelector("#login-form input");
const loginButton =  document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username)
    }
};


loginButton.addEventListener('click',onLoginBtnClick);
=======
const h1 = document.querySelector('.hello:first-child h1');

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

// hello.onclick = handleTitleclick;
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

//Ã¢ Å©±â º¯ÇÏ¸é ¹Ù·Î »¡°³Áü
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowcopy);

// wifi Åë½Å ¿©ºÎ
window.addEventListener("offline",handleWindowoffline);
window.addEventListener("online",handleWindowonline);
>>>>>>> 7d8c9122be3f5c80cf86514a5d9889cb8f26a08e
