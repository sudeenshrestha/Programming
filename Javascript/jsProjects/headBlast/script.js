//Ball Blast Game
let container = document.getElementById('container');
let BOX_SIZE = 500;
let BALL_SPEED = 2;
let BALL_SIZE = 80;
let SHOOTER_SIZE = 60;
let SHOOTER_SPEED = 4;
let SHOOTER_SAFE_ZONE = 100; // Safe zone around shooter
let SHOOT_INTERVAL = 200; // Time between shots in milliseconds
let lastShotTime = 0;
let score = 0;
let gameActive = false;

// Sound effects
const laserSound = new Audio(
  './assets/laser.wav'
); // Short laser sound
const hitSound = new Audio(
  'https://freesound.org/data/previews/270/270332_5123851-lq.mp3'
); // Previous hit sound

// Sound loading error handling
laserSound.addEventListener('error', (e) => {
  console.error('Error loading laser sound:', e);
});
hitSound.addEventListener('error', (e) => {
  console.error('Error loading hit sound:', e);
});

// Preload sounds
laserSound.load();
hitSound.load();

// Increase volume and add play promise handling
laserSound.volume = 0.05; // Reduced volume for laser
hitSound.volume = 0.1; // Increased volume for hit sound back to original

// Initialize sounds
function initSounds() {
  // Try to play and immediately pause to initialize audio context
  try {
    // Create a user interaction promise
    const userInteractionPromise = new Promise((resolve) => {
      document.addEventListener('click', resolve, { once: true });
    });

    // Initialize sounds after user interaction
    userInteractionPromise.then(() => {
      laserSound
        .play()
        .then(() => {
          laserSound.pause();
          laserSound.currentTime = 0;
        })
        .catch(console.error);

      hitSound
        .play()
        .then(() => {
          hitSound.pause();
          hitSound.currentTime = 0;
        })
        .catch(console.error);
    });
  } catch (error) {
    console.error('Sound initialization error:', error);
  }
}

// Helper function to play sound with error handling
async function playSound(sound) {
  if (sound.readyState >= 2) {
    // Check if sound is loaded
    try {
      sound.currentTime = 0;
      await sound.play();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }
}

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

// Shooter position and movement
let shooterX = BOX_SIZE / 2;
let shooterY = BOX_SIZE - SHOOTER_SIZE - 20;
let keys = {
  left: false,
  right: false,
};

// Update shooter position
function updateShooter() {
  if (keys.left) {
    shooterX = Math.max(SHOOTER_SIZE / 2, shooterX - SHOOTER_SPEED);
  }
  if (keys.right) {
    shooterX = Math.min(BOX_SIZE - SHOOTER_SIZE / 2, shooterX + SHOOTER_SPEED);
  }
  shooter.style.left = `${shooterX - SHOOTER_SIZE / 2}px`;
}

// Keyboard event listeners
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') keys.left = true;
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') keys.right = true;
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') keys.left = false;
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') keys.right = false;
});

// Update score display
function updateScore(points) {
  score += points;
  scoreDisplay.textContent = `Score: ${score}`;
}

// Random Value Generator
function getRandomInt(lowerBound, upperBound) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

// Check if position is in shooter's safe zone
function isInShooterSafeZone(x, y) {
  const safeZoneBottom = BOX_SIZE - SHOOTER_SAFE_ZONE;
  return y > safeZoneBottom;
}

// Get random position outside shooter's safe zone
function getRandomPosition() {
  let x, y;
  do {
    x = getRandomInt(BALL_SIZE, BOX_SIZE - BALL_SIZE);
    y = getRandomInt(BALL_SIZE, BOX_SIZE - SHOOTER_SAFE_ZONE - BALL_SIZE);
  } while (isInShooterSafeZone(x, y));
  return { x, y };
}

// Ball class
class Ball {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.rotationSpeed = (Math.random() - 0.5) * 4; // Random rotation speed between -2 and 2 degrees per frame
    this.rotation = Math.random() * 360; // Random initial rotation
    this.element = document.createElement('div');
    this.element.className = 'ball';
    this.element.style.position = 'absolute';
    this.element.style.width = `${BALL_SIZE}px`;
    this.element.style.height = `${BALL_SIZE}px`;
    this.element.style.backgroundImage = 'url("assets/head.png")';
    this.element.style.backgroundSize = 'contain';
    this.element.style.backgroundPosition = 'center';
    this.element.style.backgroundRepeat = 'no-repeat';
    this.element.style.transform = `rotate(${this.rotation}deg)`;
    container.appendChild(this.element);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    // Bounce off walls
    if (this.x <= 0 || this.x >= BOX_SIZE - BALL_SIZE) {
      this.speedX *= -1;
    }
    if (this.y <= 0 || this.y >= BOX_SIZE - SHOOTER_SAFE_ZONE) {
      this.speedY *= -1;
    }

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.transform = `rotate(${this.rotation}deg)`;
  }
}

// Projectile class
class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.angle = -Math.PI / 2; // Always shoot upward (-90 degrees)
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

  // Reset shooter position
  shooterX = BOX_SIZE / 2;
  shooterY = BOX_SIZE - SHOOTER_SIZE - 20;
  shooter.style.left = `${shooterX - SHOOTER_SIZE / 2}px`;
  shooter.style.bottom = '20px';

  // Create initial balls
  for (let i = 0; i < 5; i++) {
    const { x, y } = getRandomPosition();
    const speedX = (Math.random() - 0.5) * BALL_SPEED;
    const speedY = (Math.random() - 0.5) * BALL_SPEED;
    balls.push(new Ball(x, y, speedX, speedY));
  }
}

// Game loop
function gameLoop() {
  if (!gameActive) return;

  // Update shooter position
  updateShooter();

  // Create new projectile at fixed intervals
  const currentTime = Date.now();
  if (currentTime - lastShotTime >= SHOOT_INTERVAL) {
    projectiles.push(new Projectile(shooterX, shooterY));
    playSound(laserSound);
    lastShotTime = currentTime;
  }

  // Update balls
  balls.forEach((ball) => ball.update());

  // Update projectiles
  projectiles = projectiles.filter((projectile) => {
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
        playSound(hitSound);
        return false;
      }
    }

    // Remove if out of bounds on sides or reaches top boundary
    if (projectile.y <= 0) {
      projectile.element.remove();
      return false;
    }
    return projectile.x > 0 && projectile.x < BOX_SIZE;
  });

  // Add new ball if needed
  if (balls.length < 3) {
    const { x, y } = getRandomPosition();
    const speedX = (Math.random() - 0.5) * BALL_SPEED;
    const speedY = (Math.random() - 0.5) * BALL_SPEED;
    balls.push(new Ball(x, y, speedX, speedY));
  }

  requestAnimationFrame(gameLoop);
}

// Start/Reset game
document.getElementById('refresh').addEventListener('click', () => {
  gameActive = true;
  initSounds(); // Initialize sounds when user clicks start
  initGame();
  gameLoop();
});
