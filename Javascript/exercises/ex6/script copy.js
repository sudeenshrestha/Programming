let data = [
  { top: 200, left: 50 },
  { top: 100, left: 500 },
  // { bottom: 100, left: 60 },
  // { bottom: 10, left: 60 },
  // { top: 40, right: 80 },
  // { top: 10, right: 6 },
  // { bottom: 50, right: 30 },
  // { bottom: 100, right: 80 },
];
for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
  var objectKeys = Object.keys(data[dataIndex]); // [‘name’, ‘author’]

  let x = objectKeys[0];
  let y = objectKeys[1];

  let xvalue = data[dataIndex][x];
  let yvalue = data[dataIndex][y];

  console.log(x,xvalue);
  console.log(y,yvalue);

  // for (var i = 0; i < objectKeys.length; i++) {
  //   var key = objectKeys[i];
  //   var value = data[dataIndex][key];
  //   // console.log("key: ", key);
  //   // console.log("value: ", value);
  for(let ind=0; ind<5;ind++){
    let point = document.querySelectorAll(".scatterPlotData")[ind];
    console.log(point);
    point.style.position = "absolute";
    point.style[x] = xvalue + "px";
    point.style[y] = yvalue + "px";

  
    console.log(point.style[x]);
    console.log(point.style[y]);
}
}
    // for (let k = 0; k < data.length; k++) {
    //   let p = document.createElement("div");
    //   p.id = "d" + (k+1);
    //   p.style.background = "yellow";
    //   p.style.width = "20px";
    //   p.style.height = "20px";
    //   p.style.top = "200px";
    //   p.style.position = "absolute";
    //   // p.style.zIndex = ;

    //   let body = document.getElementsByTagName("body")[0];
    //   body.appendChild(p)