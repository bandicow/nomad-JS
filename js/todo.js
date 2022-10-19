/**전체 폼 */
const toDoForm = document.getElementById("todo-form");
/**Todo 리스트 기입 저장 */
const toDoInput = document.querySelector("#todo-form input");
/**  Todo 리스트 추가 */
const toDoList = document.getElementById("todo-list");
/** newtodo가 생길때마다 array로 push해서 저장 */
let toDos = [];
/**todos(로컬스토리지 저장 키) 오타 안치게, 치면 경고뜨게*/
const TODOS_KEY = "todos";

/** Todo 리스트 localStorage에 JSON string 저장*/
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**제출 했을 때 재실행 막기, 입력한 값 저장*/
function handleToDoSubmit(event) {
  event.preventDefault();
  /**인풋 값 비우기전에 newTodo 저장 */
  const newTodo = toDoInput.value;
  /**Input된 값 비우기 */
  toDoInput.value = "";
  /**값을 오브젝트 형태로 저장(ID[Date.now]로 삭제 용이) */
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

/**toDo를 그리는 역할(li span button) */
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", DeleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

/**클릭한 li를 찾아 삭제 */
function DeleteTodo(event) {
  const li = event.target.parentElement;
  /**X 버튼 클릭시 해당 li의 id를 가진 것만 제외하고 저장 */
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

/**submit했을때 handleToDoSubmit 발생 */
toDoForm.addEventListener("submit", handleToDoSubmit);

/**키값으로 값 저장 */
const savedToDos = localStorage.getItem(TODOS_KEY);

// 불러온게 null 일때 있음(로컬 저장소에 값이 없을때)
/**JSON.parse로 살아있는JS 오브젝트 만들기(안에 값이 있을때), 새로고침해도 남음 */
if (savedToDos !== null) {
  /**값 JSON 형태 string data type을 object로 */
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

/**filter에 필요함, 반드시 true를 리턴 */
function sexyfilter(item) {
  return item !== 3;
}

/**filter는 foreach와 비슷 */
[1, 2, 3, 4].filter(sexyfilter);
