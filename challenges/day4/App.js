const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function () {
    h2.style.color = colors[0];
    h2.innerText = "The mouse is here!";
  },
  handleLeave: function () {
    h2.style.color = colors[1];
    h2.innerText = "The mouse is gone!";
  },
  handleResize: function () {
    h2.style.color = colors[2];
    h2.innerText = "You just resized!";
  },
  handleContext: function () {
    h2.style.color = colors[3];
    h2.innerText = "That was a right click!";
  },
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);
