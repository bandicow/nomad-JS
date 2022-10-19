document.title = "Chrome";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  paintGreetings();
  localStorage.setItem(USERNAME_KEY, username);
}
/**이름 입력하면 반기는 함수 */
function paintGreetings() {
  greetings.classList.remove(HIDDEN_CLASSNAME);
  greetings.innerText = `Hello ${savedUsername} nice to meet you!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings();
}

//서브밋은 엔터 or 클릭으로 작동
loginForm.addEventListener("submit", onLoginSubmit);
