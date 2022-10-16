const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// 시작하자마자 Clock 실행하고 1초마다 재실행
getClock();
setInterval(getClock,1000);

// 위에 기능 한번에.feat MDN
// function sayHello(){
//     clock.innerText = new Date().toLocaleTimeString();
//     }
// setInterval(sayHello,1000);