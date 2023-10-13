// Exercise 5
// Program to toggle background of a div

var colors = ["red", "blue", "green", "yellow"];
var divCurrent = document.getElementById("color");

currentColorCount = 0;

divCurrent.onclick = function () {
  divCurrent.style.background = colors[currentColorCount];

  currentColorCount++;

  if (currentColorCount === colors.length) {
    currentColorCount = 0;
  }
};
