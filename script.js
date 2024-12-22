const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let score = 0;

const player = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  color: 'blue',
};

const ball = {
  x: Math.random() * canvas.width,
  y: 0,
  radius: 15,
  color: 'red',
  speed: 3,
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

function updateBall() {
  ball.y += ball.speed;
  if (ball.y > canvas.height) {
    ball.y = 0;
    ball.x = Math.random() * canvas.width;
  }

  // Check collision
  if (
    ball.x > player.x &&
    ball.x < player.x + player.width &&
    ball.y + ball.radius > player.y
  ) {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    ball.y = 0;
    ball.x = Math.random() * canvas.width;
    ball.speed += 0.5;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clearCanvas();
  drawPlayer();
  drawBall();
  updateBall();
  requestAnimationFrame(gameLoop);
}

window.addEventListener('mousemove', (e) => {
  player.x = e.clientX - player.width / 2;
});

gameLoop();