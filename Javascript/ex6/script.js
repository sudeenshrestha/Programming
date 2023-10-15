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

  for (var j = 0; j < positionKeys.length; j++) {
    var key = positionKeys[j];
    var value = positionData[key];
    // console.log("key:", key);//4
    // console.log("value:", value);//5
    key1 = positionKeys[0];
    value1 = positionData[key1];

    key2 = positionKeys[1];
    value2 = positionData[key2];

    // console.log("key1:", key1);//4
    // console.log("value1:", value1);//5
    // console.log("key2:", key2);//4
    // console.log("value2:", value2);//5
  }

  const divC = document.createElement("div");
  divC.style.position = "absolute";
  divC.style.height = "20px";
  divC.style.width = "20px";
  divC.style.background = "green";
  divC.style[key1] = value1 + "px";
  divC.style[key2] = value2 + "px";
}

document.getElementById("container").appendChild(div);
console.log(document.getElementById("container").appendChild(div));
