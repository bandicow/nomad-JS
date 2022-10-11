document.title = "Doragi";

const h1 = document.querySelector("div.hello h1");

console.log(h1);

// JS 가 HTML을 건드리면 HTML을 바라보는 CSS가 변경된 HTML에 맞춘다.
// h1.className는 getter이면서 setter
function handleh1click() {
    const clickedClass = "clicked";
    if (h1.className===clickedClass) {
        h1.className = "";
    }
    else {
        h1.className = clickedClass;
    }
};



h1.addEventListener("click",handleh1click);