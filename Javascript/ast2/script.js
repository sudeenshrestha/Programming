//AST2: Convert scatter plot into ant smasher game

//2.1

var data = [
  { top: 100, left: 50 },
  { bottom: 100, top: 200 },
  { bottom: 100, left: 60 },
  { bottom: 10, left: 60 },
  { top: 40, right: 80 },
  { top: 10, right: 6 },
  { bottom: 50, right: 30 },
  { bottom: 100, right: 80 },
];

let datas = {
  numAnts: 10, 
  posnX: 10, 
  posnY: 10
}
var antsInBox = [];

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
      ant.id = "ant"+(index+1);
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

    console.log("...................................");

  }
}

createScatterPlot();

for (a=0;a<antsInBox.length;a++){
  // console.log(antsInBox[a])
}

// function removeAnts(){
  let smashedAnts = [];
const ants = document.getElementsByClassName('ant');;
// console.log(ants)
let antss = function(){
for (let Ant of ants){
  Ant.addEventListener('click', (event) => {
    event.target.remove();
    let smashedAnt = event.target.id;
    console.log("hello",smashedAnt);
    smashedAnts.push(smashedAnt);
    console.log("this is within loop", smashedAnts);
  });
};
}
antss();

console.log("this is outside loop", smashedAnts);
    let uList = document.getElementById('smashedAntsList');

    for (l=0;l<smashedAnts.length;l++){
      let li = document.createElement('li');
      li.innerText = "ant"+(l+1);
      uList.appendChild(li);
    };

