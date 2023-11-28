let $container = document.getElementById("container");
$container.classList.add("mx-auto", "cursor-crosshair");
let BOX_SIZE = 500;
let ANT_SPEED = 1;
let ANT_SIZE = 20;
let antData = [];

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

function initAnts(rawAntData) {
  const antData = [];

  for (let i = 0; i < rawAntData.length; i++) {
    const { x, y, dx, dy } = rawAntData[i];

    const element = document.createElement("div");
    element.id = `ant${i + 1}`;
    element.classList.add("ant", "absolute", "rounded-full");
    element.style.backgroundImage = "url(./assets/ant.jpg)";
    element.style.backgroundSize = "20px 20px";
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
      let smashedAntsList = document.getElementById("smashedAntsList");

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
  if (ant1 === ant2) {
    return false;
  }

  const xCollision = ant1.x + ANT_SIZE >= ant2.x && ant1.x <= ant2.x + ANT_SIZE;
  const yCollision = ant1.y + ANT_SIZE >= ant2.y && ant1.y <= ant2.y + ANT_SIZE;

  return xCollision && yCollision;
}

function plotAnts(ants) {
  ants.forEach((ant) => {
    // if (ant && ant.element) {
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

    ants.forEach((targetAnt) => {
      const collided = detectAntCollision(ant, targetAnt);
      if (collided) {
        ant.dx = -ant.dx;
        ant.dy = -ant.dy;
        targetAnt.dx = -targetAnt.dx;
        targetAnt.dy = -targetAnt.dy;
      }
    });
  });
}

//  Dark Mode Toggle
document.getElementById("toggle").addEventListener("change", function () {
  ants.forEach((ant) => {
    if (this.checked) {
      document.documentElement.classList.add("dark");
      ant.element.style.backgroundImage = "url('assets/ant2.jpg')";
    } else {
      document.documentElement.classList.remove("dark");
      ant.element.style.backgroundImage = "url('assets/ant.jpg')";
    }
  });
});

//  Reset Game

function resetAntGame(rawAntData) {
  $container.innerHTML = "";
  smashedAnt = "";
  smashedAntsList.innerHTML = "Smashed Ants";
  ants = initAnts(rawAntData);
  // moveAnts(newAnts);
}

// Save Game

function saveGameState() {
  let gameState = {
    ants,
    smashedAntsList,
  };
  localStorage.setItem("savedGameState", JSON.stringify(gameState));
  console.log(gameState, ants, smashedAntsList);
  alert("Game state has been saved", ants.length);
}

// Restore Saved Game

function restoreGameState() {
  const savedState = localStorage.getItem("savedGameState");

  if (!savedState) {
    return;
  }
  const gameState = JSON.parse(savedState);
  const restoredAnts = gameState.ants || [];
  smashedAntsList = gameState.smashedAntsList;
  smashedAntsList.innerHTML = "Smashed Ants";

  const restoredRawAntData = restoredAnts.map((ant) => ({
    x: ant.x,
    y: ant.y,
    dx: ant.dx,
    dy: ant.dy,
  }));

  resetAntGame(restoredRawAntData);
}

function generateRandomAntsRawData() {
  const rawAntData = [];
  let numberOfAnts = getRandomInt(1, 50);
  console.log("No. of ants: ", numberOfAnts);
  for (let i = 0; i < numberOfAnts; i++) {
    const x = getRandomInt(0, BOX_SIZE);
    const y = getRandomInt(0, BOX_SIZE);
    const dx = generateRandomDirection();
    const dy = generateRandomDirection();
    rawAntData.push({
      x,
      y,
      dx,
      dy,
    });
  }
  return rawAntData;
}

function gameLoop() {
  setInterval(() => {
    updateAnts(ants);
    plotAnts(ants);
    gameOver();
    function gameOver() {
      if (ants.length === 0) {
        $container.classList.add(
          "text-4xl",
          "text-center",
          "m-auto",
          "text-red"
        );
        $container.innerHTML = "Game Over!";
        return $container;
      }
    }
  }, 60);
}

const rawAntData = generateRandomAntsRawData();
ants = initAnts(rawAntData);

gameLoop(ants);

document.getElementById("refresh").addEventListener("click", () => {
  const rawAntData = generateRandomAntsRawData();
  resetAntGame(rawAntData);
});

document.getElementById("save").addEventListener("click", saveGameState);
document.getElementById("load").addEventListener("click", restoreGameState);
