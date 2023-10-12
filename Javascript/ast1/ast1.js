var star = "*";
let incrementCount = 1;
let decrementCount = 6;

let stepCount = 0;

function animate() {
  if (incrementCount < 6) {
    var incrementStars = star.repeat(incrementCount);
    console.log(incrementStars);
    incrementCount++;
    return;
  }

  var decrementStars = star.repeat(decrementCount);
  console.log(decrementStars);
  decrementCount--;
}

let interval = setInterval(() => {
  animate();
  stepCount++;

  if (stepCount == 20) {
    clearInterval(interval);
  }
}, 1000);