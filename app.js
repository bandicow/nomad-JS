document.title = "Doragi";

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

//창 크기 변하면 바로 빨개짐
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowcopy);

// wifi 통신 여부
window.addEventListener("offline",handleWindowoffline);
window.addEventListener("online",handleWindowonline);
