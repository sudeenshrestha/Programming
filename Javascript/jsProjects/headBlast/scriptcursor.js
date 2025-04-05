//Ball Blast Game
let container = document.getElementById('container');
let BOX_SIZE = 500;
let BALL_SPEED = 2;
let BALL_SIZE = 20;
let SHOOTER_SIZE = 50;
let score = 0;
let gameActive = false;

// Game elements
let shooter = document.getElementById('shooter');
let scoreDisplay = document.createElement('div');
scoreDisplay.id = 'score';
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.top = '10px';
scoreDisplay.style.left = '10px';
scoreDisplay.style.color = 'white';
scoreDisplay.style.fontSize = '20px';
container.appendChild(scoreDisplay);

// Update score display
function updateScore(points) {
    score += points;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Random Value Generator
function getRandomInt(lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

// Ball class
class Ball {
    constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.element = document.createElement('div');
        this.element.className = 'ball';
        this.element.style.position = 'absolute';
        this.element.style.width = `${BALL_SIZE}px`;
        this.element.style.height = `${BALL_SIZE}px`;
        this.element.style.borderRadius = '50%';
        this.element.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        this.element.style.border = '2px solid black';
        container.appendChild(this.element);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        if (this.x <= 0 || this.x >= BOX_SIZE - BALL_SIZE) {
            this.speedX *= -1;
        }
        if (this.y <= 0 || this.y >= BOX_SIZE - BALL_SIZE) {
            this.speedY *= -1;
        }

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

// Projectile class
class Projectile {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.angle = angle;
        this.element = document.createElement('div');
        this.element.className = 'projectile';
        this.element.style.position = 'absolute';
        this.element.style.width = '10px';
        this.element.style.height = '10px';
        this.element.style.borderRadius = '50%';
        this.element.style.backgroundColor = 'white';
        container.appendChild(this.element);
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

let balls = [];
let projectiles = [];

// Initialize game
function initGame() {
    score = 0;
    updateScore(0);
    balls = [];
    projectiles = [];
    container.innerHTML = '';
    container.appendChild(shooter);
    container.appendChild(scoreDisplay);

    // Create initial balls
    for (let i = 0; i < 5; i++) {
        const x = getRandomInt(BALL_SIZE, BOX_SIZE - BALL_SIZE);
        const y = getRandomInt(BALL_SIZE, BOX_SIZE - BALL_SIZE);
        const speedX = (Math.random() - 0.5) * BALL_SPEED;
        const speedY = (Math.random() - 0.5) * BALL_SPEED;
        balls.push(new Ball(x, y, speedX, speedY));
    }
}

// Handle shooting
container.addEventListener('click', (e) => {
    if (!gameActive) return;
    
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const angle = Math.atan2(mouseY - BOX_SIZE/2, mouseX - BOX_SIZE/2);
    projectiles.push(new Projectile(BOX_SIZE/2, BOX_SIZE/2, angle));
});

// Game loop
function gameLoop() {
    if (!gameActive) return;

    // Update balls
    balls.forEach(ball => ball.update());

    // Update projectiles
    projectiles = projectiles.filter(projectile => {
        projectile.update();
        
        // Check collision with balls
        for (let i = balls.length - 1; i >= 0; i--) {
            const ball = balls[i];
            const dx = projectile.x - ball.x;
            const dy = projectile.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < BALL_SIZE) {
                // Remove ball and projectile
                ball.element.remove();
                balls.splice(i, 1);
                projectile.element.remove();
                updateScore(10);
                return false;
            }
        }
        
        // Remove if out of bounds
        return projectile.x > 0 && projectile.x < BOX_SIZE && 
               projectile.y > 0 && projectile.y < BOX_SIZE;
    });

    // Add new ball if needed
    if (balls.length < 3) {
        const x = getRandomInt(BALL_SIZE, BOX_SIZE - BALL_SIZE);
        const y = getRandomInt(BALL_SIZE, BOX_SIZE - BALL_SIZE);
        const speedX = (Math.random() - 0.5) * BALL_SPEED;
        const speedY = (Math.random() - 0.5) * BALL_SPEED;
        balls.push(new Ball(x, y, speedX, speedY));
    }

    requestAnimationFrame(gameLoop);
}

// Start/Reset game
document.getElementById('refresh').addEventListener('click', () => {
    gameActive = true;
    initGame();
    gameLoop();
});