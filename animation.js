const button = document.getElementById("button");
const body = document.querySelector("body");
const text = document.getElementById("text");
let textopacity = 1;

function zoom() {
  var width = button.offsetWidth;
  var height = button.offsetHeight;

  textopacity -= 0.09;
  text.style.opacity = String(textopacity);
  width += 30;
  height += 30;
  button.style.width = width + "px";
  button.style.height = height + "px";
}

function weiter() {
  window.location.href = "Gameübers.html";
}

function onClick() {
  setInterval(zoom, 0.1);
  setTimeout(weiter, 1500);
  clearInterval();
}

button.addEventListener("click", onClick);
