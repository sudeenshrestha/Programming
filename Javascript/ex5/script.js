// Exercise 5
// Program to toggle background of a div

var colors = ["red", "blue", "green", "yellow"];
var divC = document.getElementById("color");

for (let i = 0; i < colors.length; i++) {
  divC.onclick = function () {
    divC.style.background = colors[i];
  };
  if (colors[0] == colors.slice(-1)[0]) {
    console.log("ok");
  }
}
