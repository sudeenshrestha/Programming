//AST2: Convert scatter plot into ant smasher game

//2.1

function randomValue(lowerBound, upperBound){
    var randomNumber = Math.random();
    randomNumber = randomNumber*upperBound;
    randomNumber = Math.floor(randomNumber)+lowerBound;
    return randomNumber;
}

var a = randomValue(1,5);
// console.log(a);

////////////////////////////////////////////////////

let data = [
    { top: 100, left: 50 },
    { bottom: 100, top: 200 },
    { bottom: 100, left: 60 },
    { bottom: 10, left: 60 },
    { top: 40, right: 80 },
    { top: 10, right: 6 },
    { bottom: 50, right: 30 },
    { bottom: 100, right: 80 },
  ];
  var numOfAnts = [];
  var ids = [];
  var classes = [];
  function createScatterPlot(){
  for (var i = 0; i < data.length; i++) {
    // console.log(data.length); //1
    positionData = data[i];
    // console.log(positionData); //2
  
    var positionKeys = Object.keys(positionData);
    // console.log(positionKeys);//3
  
    const divC = document.createElement("div");
  
    for (var j = 0; j < positionKeys.length; j++) {
      var key = positionKeys[j];
      var value = positionData[key];
      divC.style[key] = value + "px";
      divC.id = "div"+(i+1);
      var divClass = divC.classList.add("ants");
    
    }
   
    divC.style.position = "absolute";
    divC.style.height = "50px";
    divC.style.width = "50px";
    divC.style.borderRadius = "50%";
    divC.style.background = "white";
    divC.style.backgroundImage = 'url("ant.jpg")';
    // divC.style.backgroundBlendMode = "lighten";
    divC.style.backgroundSize = "50px 50px";
    divC.style.cursor = "pointer";
    
    ids.push(divC.id);
    const container = document.getElementById("container");
    var ant = container.appendChild(divC);
    
    numOfAnts.push(ant);
    // console.log(ant);

    function smashAnts(){
      var ants = document.getElementsByClassName("ants");
      // var ants = document.getElementById("div1");
  
  // console.log(ants);
  
  ants.addEventListener('click', function(){
    container.removeChild(divC);
  });
    
  };
  
  
    smashAnts();
    
  };
};

createScatterPlot();
  // console.log(numOfAnts);
  console.log(ids);
  console.log(ids.length);
 

 

