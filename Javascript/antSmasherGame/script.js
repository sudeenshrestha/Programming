let $container = document.getElementById("container");
$container.classList.add("mx-auto", "cursor-crosshair");
let BOX_SIZE = 500;
let ANT_SPEED = 2;
let ANT_SIZE = 20;

//Random Value Generator

function getRandomInt(lowerBound, upperBound) {
  let randomNumber = Math.random();
  randomNumber = randomNumber * upperBound;
  randomNumber = Math.floor(randomNumber) + lowerBound;
  return randomNumber;
}

function generateRandomDirection() {
  return Math.floor(Math.random() * 3 + 1);
}

let numberOfAnts = getRandomInt(1, 30);
function initAnts() {
  const antData = [];

  for (let i = 0; i < numberOfAnts; i++) {
    const x = getRandomInt(0, BOX_SIZE);
    const y = getRandomInt(0, BOX_SIZE);
    const dx = generateRandomDirection();
    const dy = generateRandomDirection();

    // console.log(x, y, dx, dy);

    let smashedAntsList = document.getElementById("smashedAntsList");

    const element = document.createElement("div");
    element.id = `ant${i + 1}`;
    element.classList.add("ant", "absolute", "bg-white", "rounded-full");
    element.style.width = `${ANT_SIZE}px`;
    element.style.height = `${ANT_SIZE}px`;

    element.onclick = () => {
      const sound = document.createElement("audio");
      sound.src = "./assets/splat.mp3";
      sound.play();
      setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
      }, 350);

      let smashedAnt = $container.removeChild(element);
      antData.splice(antData.indexOf(ant), 1);

      smashedAntId = smashedAnt.id;
      const listItem = document.createElement("li");
      listItem.innerText = smashedAntId;
      smashedAntsList.appendChild(listItem);
    };
    $container.appendChild(element);

    const ant = {
      x,
      y,
      dx,
      dy,
      element,
    };
    antData.push(ant);
  }
  return antData;
}

function detectAntCollision(ant1, ant2) {
    if(ant1 === ant2) {
        return false;
    }

    const xCollision = (ant1.x + ANT_SIZE >= ant2.x) && (ant1.x <= ant2.x + ANT_SIZE);
    const yCollision = (ant1.y + ANT_SIZE >= ant2.y) && (ant1.y <= ant2.y + ANT_SIZE);

    return xCollision && yCollision;
}
function plotAnts(ants) {
  ants.forEach((ant) => {
    ant.element.style.left = `${ant.x}px`;
    ant.element.style.top = `${ant.y}px`;
  });
}

function updateAnts(ants) {
  ants.forEach((ant) => {
    ant.x += ant.dx * ANT_SPEED;
    ant.y += ant.dy * ANT_SPEED;

    if (ant.x < 0) {
      ant.x = 0;
      ant.dx = -ant.dx;
    }

    if (ant.x > BOX_SIZE - ANT_SIZE) {
      ant.x = BOX_SIZE - ANT_SIZE;
      ant.dx = -ant.dx;
    }

    if (ant.y < 0) {
      ant.y = 0;
      ant.dy = -ant.dy;
    }

    if (ant.y > BOX_SIZE - ANT_SIZE) {
      ant.y = BOX_SIZE - ANT_SIZE;
      ant.dy = -ant.dy;
    }

    ants.forEach(targetAnt => {
        const collided = detectAntCollision(ant, targetAnt)
        if(collided) {
            ant.dx = -ant.dx;
            ant.dy = -ant.dy;
            targetAnt.dx = -targetAnt.dx;
            targetAnt.dy = -targetAnt.dy;
        }
    })
  });
}
const ants = initAnts();

//  Reset Game

function resetAntGame(ants) {
    $container.innerHTML = "";
    smashedAntsList.innerHTML = "Smashed Ants";
    antData = [];
    smashedAnts = [];
    moveAnts(ants);
  }
  
  document.getElementById("refresh").addEventListener("click", resetAntGame);
  
function moveAnts(ants){
setInterval(() => {
  updateAnts(ants);
  plotAnts(ants);
}, 60);
}

moveAnts(ants);
