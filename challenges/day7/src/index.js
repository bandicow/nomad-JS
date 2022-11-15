const clockTitle = document.querySelector(".js-clock");
const Chris = new Date("2022-12-25T00:00:00");

console.log(Chris.getTime());

function Christmas() {
  const date = new Date();
  console.log(date.getTime());

  const DDAY = Chris.getTime() - date.getTime();

  const day = Math.floor(DDAY / (1000 * 60 * 24 * 60));
  const hours = Math.floor((DDAY % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Min = Math.floor((DDAY % (1000 * 60 * 60)) / (1000 * 60));
  const Sec = Math.floor((DDAY % (1000 * 60)) / 1000);

  clockTitle.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    Min < 10 ? `0${Min}` : Min
  }m ${Sec < 10 ? `0${Sec}` : Sec}s`;
}

setInterval(Christmas, 1000);

// 170d 07h 44m 14s
//Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다
