// AST2: Convert scatter plot into ant smasher game

// UTILS -------------------

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomPositionKey(positionKeys) {
    return positionKeys[Math.floor(Math.random() * positionKeys.length)];
  }
  
  // MAIN -------------------
  
  let antData = [];
  const numberOfAnts = getRandomInt(1, 30);
  const possiblePositions = ["top", "bottom", "left", "right"];
  const antContainer = document.getElementById("container");
  const smashedAntsList = document.getElementById("smashedAntsList");
  
  function generateRandomAntData() {
    const antData = [];
  
    for (let index = 0; index < numberOfAnts; index++) {
      let positionX, positionY;
  
      do {
        positionX = getRandomPositionKey(possiblePositions);
        positionY = getRandomPositionKey(possiblePositions);
      } while (positionX === positionY);
  
      const xCoordinate = getRandomInt(1, 200);
      const yCoordinate = getRandomInt(1, 200);
  
      antData.push({ [positionX]: xCoordinate, [positionY]: yCoordinate });
    }
  
    return antData;
  }
  
  function createAntElement(antPosition, index) {
    const coordinates = Object.keys(antPosition);
    const antElement = document.createElement("div");
  
    coordinates.forEach((coordinate) => {
      const value = antPosition[coordinate];
      antElement.style[coordinate] = `${value}px`;
    });
  
    antElement.id = `ant${index + 1}`;
    antElement.classList.add("ant");
    antElement.style.position = "absolute";
    antElement.style.height = "20px";
    antElement.style.width = "20px";
    antElement.style.borderRadius = "50%";
    antElement.style.backgroundImage = "url('ant.jpg')";
    antElement.style.backgroundSize = "20px 20px";
  
    antElement.addEventListener("click", handleAntClick);
  
    return antElement;
  }
  
  function handleAntClick(event) {
    const sound = document.querySelector("#audio");
    sound.play();
    setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;
    }, 500);
  
    event.target.remove();
    const smashedAntId = event.target.id;
    smashedAnts.push(smashedAntId);
  
    const listItem = document.createElement("li");
    listItem.innerText = smashedAntId;
    smashedAntsList.appendChild(listItem);
  }
  
  function resetAntGame() {
    antContainer.innerHTML = "";
    smashedAntsList.innerHTML = "";
    antData = [];
    smashedAnts = [];
    antsInBox = [];
    initializeAnts();
  }
  
  function initializeAnts() {
    const antData = generateRandomAntData();
  
    antData.forEach((antPosition, index) => {
      const antElement = createAntElement(antPosition, index);
      antContainer.appendChild(antElement);
      antsInBox.push(antElement);
    });
  }
  
  initializeAnts();
  
  document.getElementById("refresh").addEventListener("click", resetAntGame);