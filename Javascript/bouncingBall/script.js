//  Dark Mode Toggle
document.getElementById("toggle").addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  //    AST5: Bouncing Ball

const container = document.createElement('div');
container.classList.add('relative', 'h-[500px]', 'w-[500px]', 'bg-blue-800','dark:bg-black', 'my-3');
document.body.appendChild(container);

const ball = document.createElement('div');
ball.classList.add('absolute', 'h-12', 'w-12', 'bg-red-700', 'rounded-full','dark:bg-white');

container.appendChild(ball);
console.log(ball)

console.log(ball.offsetLeft);
console.log(ball.offsetTop);

let Left = ball.offsetLeft;
let Top = ball.offsetTop;

console.log(Left);
console.log(Top);
let counter = 0;
let ballBounce = setInterval(function(){
    
  ball.style.left = `${Left + 10}px`;
  ball.style.top = `${Top + 10}px`;
  if(counter>=5) {
    clearInterval(ballBounce)
    
  }
  console.log(counter)
  counter++;

  
  console.log("1",ball.style.left)

  console.log("1",ball.style.left)
},500);


console.log(ball.offsetLeft);
console.log(ball.offsetTop);