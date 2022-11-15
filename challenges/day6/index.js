/** Generate a num form */
const limitForm = document.querySelector("#limit");
/** Generate a num input */
const limit = document.querySelector("#limit h3 input");
/** Guess a num form */
const game = document.querySelector("#game");
/** Guess a num input */
const you = document.querySelector("#game span input");
/** result div */
const choses = document.querySelector("#choses");
const vs = document.querySelector("#vs");

/**word */
const HIDDEN_CLASSNAME = "hidden";
const LIMIT_KEY = "Limit";
const CHOSE_KEY = "Chose";

/**0~limit settings*/
function handleLinkClick(event) {
  event.preventDefault();
  const limitnum = limit.value;
  localStorage.setItem(LIMIT_KEY, limitnum);
  console.log(limit.value);
}

/**입력하면 보여주는 함수 */
function paintresult() {
  const chosenum = you.value;
  /** max 숫자 */
  const max = parseInt(localStorage.getItem(LIMIT_KEY));
  localStorage.setItem(CHOSE_KEY, chosenum);
  const yournum = parseInt(localStorage.getItem(CHOSE_KEY));
  choses.classList.remove(HIDDEN_CLASSNAME);
  const rannum = Math.random() * max;
  const machine = Math.ceil(rannum);
  /**게임을 시작하지 */
  choses.innerText = `You chose:${yournum}, the machine chose:${machine}`;
  vs.classList.remove(HIDDEN_CLASSNAME);
  /**값 여부*/
  if (yournum == machine) {
    vs.innerText = "You won!";
  } else {
    vs.innerText = "Yous lost!";
  }
}

/**실행함수 */
function handlePlayClick(event) {
  event.preventDefault();
  paintresult();
}

limitForm.addEventListener("submit", handleLinkClick);
game.addEventListener("submit", handlePlayClick);
