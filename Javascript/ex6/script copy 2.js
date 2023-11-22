let data = [
  { top: 100, left: 50 },
  { bottom: 100, top: 200 },
  // { bottom: 100, left: 60 },
  // { bottom: 10, left: 60 },
  // { top: 40, right: 80 },
  // { top: 10, right: 6 },
  // { bottom: 50, right: 30 },
  // { bottom: 100, right: 80 },
];

for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
  var objectKeys = Object.keys(data[dataIndex]); // [‘name’, ‘author’]

  for (var i = 0; i < objectKeys.length; i++) {
    var key = objectKeys[i];
    dict = data[dataIndex];
    var value = dict[key];
    console.log("key: ", key); //name, author
    console.log("value: ", value); //200,400

    var x = key[0];
    var y = key[1];
  

    var xvalue = dict[x];
    var yvalue = dict[y];
  }
}

const dFrag = document.createDocumentFragment();
for (let p = 0; p < data.length; p++) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = "20px";
  div.style.width = "20px";
  div.style.background = "green";
  div.style[x] = xvalue + "px";
  div.style[y] = yvalue + "px";

  dFrag.appendChild(div);
  document.getElementById("container").appendChild(dFrag);
  console.log(document.getElementById("container").appendChild(dFrag));

  // console.log(document.getElementsByTagName('body')[0].appendChild(dFrag));
}
