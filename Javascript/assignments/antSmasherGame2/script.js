//AST2: Ant Smasher Game

//Random Value Generator

function getRandomInt(lowerBound, upperBound) {
  let randomNumber = Math.random();
  randomNumber = randomNumber * upperBound;
  randomNumber = Math.floor(randomNumber) + lowerBound;
  return randomNumber;
}

//MAIN

let numberOfAnts = getRandomInt(1, 30);

// console.log(numberOfAnts);

defaultNumberOfAnts = 10;
if (numberOfAnts < defaultNumberOfAnts) {
  numberOfAnts = defaultNumberOfAnts;
  // console.log(numberOfAnts);
} else {
  numberOfAnts = numberOfAnts;
  // console.log(numberOfAnts);
}

//Declarations

let antData = [];
let antsInBox = [];
let smashedAnts = [];

const html = document.documentElement;
const antContainer = document.getElementById("container");
let smashedAntsList = document.getElementById("smashedAntsList");
const possiblePositions = ["top", "bottom", "left", "right"];

function getRandomPossiblePositions(possiblePositions) {
  return possiblePositions[
    Math.floor(Math.random() * possiblePositions.length)
  ];
}

function generateRandomAntData() {
  let positionX, positionY;
  for (let index = 0; index < numberOfAnts; index++) {
    do {
      positionX = getRandomPossiblePositions(possiblePositions);
      positionY = getRandomPossiblePositions(possiblePositions);
    } while (positionX === positionY);

    let xCoords = getRandomInt(1, 200);
    let yCoords = getRandomInt(1, 200);

    antData.push({
      [positionX]: xCoords,
      [positionY]: yCoords,
    });
  }
  return antData;
}
generateRandomAntData();
// console.log(antData);

function createAntElements() {
  for (index = 0; index < antData.length; index++) {
    let antPosition = antData[index];
    let coordinates = Object.keys(antPosition);
    const ant = document.createElement("div");

    // console.log(antPosition);
    // console.log(coordinates);

    let value;
    coordinates.forEach((coordinate) => {
      value = antPosition[coordinate];
      ant.style[coordinate] = `${value}px`;
      // console.log(coordinate);
      // console.log(value);
    });

    ant.id = `ant${index + 1}`;
    ant.classList.add("ant");
    ant.style.position = "absolute";
    ant.style.height = "20px";
    ant.style.width = "20px";
    ant.style.borderRadius = "50%";
    ant.style.backgroundSize = "20px 20px";

    if (html.classList.contains("dark")) {
      ant.style.backgroundImage = "url('assets/ant2.jpg')";
    } else {
      ant.style.backgroundImage = "url('assets/ant.jpg')";
    }

    let ants = antContainer.appendChild(ant);
    antsInBox.push(ants);
    // console.log(antsInBox);

    ant.addEventListener("click", antClick);
  }
}

createAntElements();

function antClick(event) {
  const sound = document.querySelector("#audio");
  sound.play();
  setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
  }, 350);

  event.target.remove();
  const smashedAntId = event.target.id;
  smashedAnts.push(smashedAntId);

  const listItem = document.createElement("li");
  listItem.innerText = smashedAntId;
  smashedAntsList.appendChild(listItem);
}

//  Dark Mode Toggle
document.getElementById("toggle").addEventListener("change", function () {
  antsInBox.forEach((ant) => {
    if (this.checked) {
      document.documentElement.classList.add("dark");
      ant.style.backgroundImage = "url('assets/ant2.jpg')";
    } else {
      document.documentElement.classList.remove("dark");
      ant.style.backgroundImage = "url('assets/ant.jpg')";
    }
  });
});

//  Reset Game

function resetAntGame() {
  antContainer.innerHTML = "";
  smashedAntsList.innerHTML = "Smashed Ants";
  antData = [];
  smashedAnts = [];
  antsInBox = [];
  generateRandomAntData();
  createAntElements();
}

document.getElementById("refresh").addEventListener("click", resetAntGame);
