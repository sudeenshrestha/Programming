//AST2: Convert scatter plot into ant smasher game

//2.1

function randomValue(lowerBound, upperBound){
    var randomNumber = Math.random();
    randomNumber = randomNumber*upperBound;
    randomNumber = Math.floor(randomNumber)+lowerBound;
    return randomNumber;
}

var a = randomValue(1,5);
console.log(a);

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
  var divPoints = [];
  var ids = [];
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
      
    }
  
    
    divC.style.position = "absolute";
    divC.style.height = "20px";
    divC.style.width = "20px";
    divC.style.background = "green";
    ids.push(divC.id);
  
    var divPoint = document.getElementById("container").appendChild(divC);
    
    divPoints.push(divPoint);
    console.log(divPoint);
    
  };
  console.log(divPoints);
  console.log(ids);
//   console.log(divPoint);
  
var remPoints = function(){
          aa = divPoints.includes()
          console.log(aa);
    }

remPoints();


 

