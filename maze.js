// Define variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
];

var player = {
  x: 1,
  y: 1,
  size: 20,
  color: "green",
};

var items = [
  { x: 8, y: 4, collected: false },
  { x: 5, y: 5, collected: false },
  { x: 8, y: 8, collected: false },
];

var tileSize = canvas.width / maze.length;

// Draw maze
function drawMaze() {
  for (var i = 0; i < maze.length; i++) {
    for (var j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
  }
}

// Draw player
function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(
    player.x * tileSize,
    player.y * tileSize,
    player.size,
    player.size
  );
}

// Draw items
function drawItems() {
  for (var i = 0; i < items.length; i++) {
    if (!items[i].collected) {
      ctx.fillStyle = "yellow";
      ctx.fillRect(
        items[i].x * tileSize,
        items[i].y * tileSize,
        player.size,
        player.size
      );
    }
  }
}

// Check for collision with items
function checkCollision
