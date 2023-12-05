//AST2: Convert scatter plot into ant smasher game

//2.1

function randomValue(lowerBound, upperBound) {
  var randomNumber = Math.random();
  randomNumber = randomNumber * upperBound;
  randomNumber = Math.floor(randomNumber) + lowerBound;
  return randomNumber;
}

var noOfAnts = randomValue(1, 30);

console.log(noOfAnts);
defaultNoOfAnts = 20;
if (noOfAnts < defaultNoOfAnts) {
  noOfAnts = defaultNoOfAnts;
} else {
  noOfAnts = noOfAnts;
}

var posKey = ["top", "bottom", "left", "right"];

function positionKey(posKey) {
  return posKey[Math.floor(Math.random() * posKey.length)];
}

let data = [];

function generateAnts(noOfAnts, xvalue, yvalue) {
for (var index = 0; index < noOfAnts; index++) {
  let posX = positionKey(posKey);
  let posY = positionKey(posKey);

  if (posX !== posY){
  var xvalue = randomValue(1, 200);
  var yvalue = randomValue(1, 200);
  // console.log("posX", posX, "posY", posY);

  data.push({ [posX]: xvalue, [posY]: yvalue });
  }
}}
// console.log(data);

var antsInBox = [];
let smashedAnts = [];

function createScatterPlot() {
  for (var index = 0; index < data.length; index++) {
    // console.log(data[index]);
    var posXY = data[index];
    // console.log(posXY);
    var keys = Object.keys(posXY);
    // console.log(keys);

    var ant = document.createElement("div");

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = posXY[key];
      ant.style[key] = value + "px";
      ant.id = "ant" + (index + 1);
      ant.classList.add("ant");
      // console.log(key);
      // console.log(value);
      // console.log(ant.style[key]);
    }
    ant.style.position = "absolute";
    ant.style.height = "20px";
    ant.style.width = "20px";
    ant.style.borderRadius = "50%";
    ant.style.backgroundImage = "url('ant.jpg')";
    ant.style.backgroundSize = "20px 20px";

    const container = document.getElementById("container");
    // console.log(container);

    var numOfAnts = container.appendChild(ant);
    antsInBox.push(numOfAnts);
    console.log(antsInBox);
  }
}

createScatterPlot();

//-------------------------------------------------------
// const refreshButton = document.querySelector('#refresh');

// const refreshPage = () => {
//   location.reload();
// }
// refreshButton.addEventListener('click', refreshPage)
// -------------------------------------------------------

const refreshButton = document.querySelector('#refresh');

const refreshPage = () => {
  refresh();
}
refreshButton.addEventListener('click', refreshPage)

function ding() {
  var sound = document.querySelector('#audio');  
  sound.play();
  setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
  }, 500);
};

const ants = document.getElementsByClassName("ant");
// console.log(ants)
for (let Ant of ants) {
  Ant.addEventListener("click",ding);
  Ant.addEventListener("click", (event) => {
    event.target.remove();
    let smashedAnt = event.target.id;
    // console.log("hello", smashedAnt);
    smashedAnts.push(smashedAnt);
    let uList = document.getElementById("smashedAntsList");
    let li = document.createElement("li");
    li.innerText = smashedAnt;
    uList.appendChild(li);
    // li.style.display = "block";
    // console.log("this is within loop", smashedAnts);
  });
}

