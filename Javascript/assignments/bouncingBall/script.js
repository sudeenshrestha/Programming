//  Dark Mode Toggle
document.getElementById("toggle").addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

    //  AST5: Bouncing Ball
  
let BOX_SIZE = 500;

const container = document.createElement('div');
container.classList.add('relative', 'h-[500px]', 'w-[500px]', 'bg-blue-800','dark:bg-black', 'my-3');
document.body.appendChild(container);

const ball = document.createElement('div');
ball.classList.add('absolute', 'h-[50px]', 'w-[50px]', 'bg-red-700', 'rounded-full','dark:bg-white');

container.appendChild(ball);

let firstBall = {
  element: ball,
  x: 10,
  y: 10,
  dx: 5,
  dy: 5,
};
// let ballBounce = setInterval(function(){

function plotBall(){
    firstBall.element.style.left = `${firstBall.x}px`;
    firstBall.element.style.top = `${firstBall.y}px`;
}

function updateBall() {
    firstBall.x += firstBall.dx;
    firstBall.y += firstBall.dy;

    if (firstBall.x > 500) {
        firstBall.x = 500;
        firstBall.dx = -firstBall.dx;
    }
    // console.log(firstBall.left,firstBall.top);
}
setInterval(() => {
    updateBall();
    plotBall();
},60)





let ballPosition = ball.getBoundingClientRect();

let x = ballPosition.x;
let y = ballPosition.y;

console.log(x,y)






// ......................................................

// //Random Value Generator

// function getRandomInt(lowerBound, upperBound) {
//     let randomNumber = Math.random();
//     randomNumber = randomNumber * upperBound;
//     randomNumber = Math.floor(randomNumber) + lowerBound;
//     return randomNumber;
//   }
  
//   //MAIN
  
//   let numberOfAnts = getRandomInt(1, 5);
  
//   console.log(numberOfAnts);
  
//   defaultNumberOfAnts = 1;
//   if (numberOfAnts < defaultNumberOfAnts) {
//     numberOfAnts = defaultNumberOfAnts;
//     console.log(numberOfAnts);
//   } else {
//     numberOfAnts = numberOfAnts;
//     console.log(numberOfAnts);
//   }
  
//   //Declarations
  
//   let antData = [];
//   let antsInBox = [];
//   let smashedAnts = [];
  
//   const html = document.documentElement;
//   const container = document.createElement('div');
// container.classList.add('relative', 'h-[500px]', 'w-[500px]', 'bg-blue-800','dark:bg-black', 'my-3');
// document.body.appendChild(container);

//   let smashedAntsList = document.createElement("div");
//   const possiblePositions = ["top", "bottom", "left", "right"];
  
//   function getRandomPossiblePositions(possiblePositions) {
//     return possiblePositions[
//       Math.floor(Math.random() * possiblePositions.length)
//     ];
//   }
  
//   function generateRandomAntData() {
//     let positionX, positionY;
//     for (let index = 0; index < numberOfAnts; index++) {
//       do {
//         positionX = getRandomPossiblePositions(possiblePositions);
//         positionY = getRandomPossiblePositions(possiblePositions);
//       } while (positionX === positionY);
  
//       let xCoords = getRandomInt(1, 200);
//       let yCoords = getRandomInt(1, 200);
  
//       antData.push({
//         [positionX]: xCoords,
//         [positionY]: yCoords,
//       });
//     }
//     return antData;
//   }
//   generateRandomAntData();
//   console.log(antData);
  
//   function createAntElements() {
//     for (index = 0; index < antData.length; index++) {
//       let antPosition = antData[index];
//       let coordinates = Object.keys(antPosition);
//       const ant = document.createElement("div");
  
//       console.log(antPosition);
//       console.log(coordinates);
  
//       let value;
//       coordinates.forEach((coordinate) => {
//         value = antPosition[coordinate];
//         ant.style[coordinate] = `${value}px`;
//         // console.log(coordinate);
//         // console.log(value);
//       });
  
//       ant.id = `ant${index + 1}`;
//       ant.classList.add("ant");
//       ant.style.position = "absolute";
//       ant.style.height = "20px";
//       ant.style.width = "20px";
//       ant.style.borderRadius = "50%";
//       ant.style.backgroundColor = "white";
//       ant.style.backgroundSize = "20px 20px";
  
//       let ants = container.appendChild(ant);
//       antsInBox.push(ants);
//       console.log("hello",antsInBox);
//     }
//   }

//   createAntElements();