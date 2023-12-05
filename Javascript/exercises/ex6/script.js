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
  }

  
  divC.style.position = "absolute";
  divC.style.height = "20px";
  divC.style.width = "20px";
  divC.style.background = "green";

  document.getElementById("container").appendChild(divC);
  console.log(document.getElementById("container").appendChild(divC));
};
