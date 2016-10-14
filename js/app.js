// *********** Draw the CANVAS************* //
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var width = $('#myCanvas').width();
var height = $('#myCanvas').height();

var start = $('#start').on('click', startGame);
var reset = $('#reset').on('click', resetGame);
var startTime = new Date().getTime();

var game;
var timer;
var secs = 10;
var reset;

var x = randomNumber();
var y = randomNumber();
var dx = 8;
var dy = -8;
var radius = 18;

//********* Create BLOCK Movement ********//
var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;

var block_x = 285; //x position of block
var block_y = 285; //y position of block
var block_h = 40;  // block height
var block_w = 40;  // block width

//******** START GAME & WIN LOGIC***********//
function startGame(){
  game = setInterval(reDraw, 25);
  timer = setInterval(function(){
    secs--; console.log(secs);
    if(!secs){
        alert('You Win the Game!');
        clearInterval(timer);
        clearInterval(game);
    }
  }, 1000);
};

// ******** RESET GAME ************//
function resetGame(){
  block_x = 285; //x position of block
  block_y = 285; //y position of block
    x = randomNumber();
    y = randomNumber();
      clearInterval(timer);
      clearInterval(game);
        game = setInterval(reDraw, 25);
}

// ******** REDRAW the GAME ********//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawGrid();
    drawBlock();

  // ******** DRAW the BALL ********//
  function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
  }

  // ******** DRAW the BLOCK********//
  function drawBlock(){
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(block_x,block_y,block_w,block_h);
  }

  // ******** MOVE the Ball *************//
    if(x + dx > canvas.width-radius ||
       x + dx < 0) {
        dx = -dx;
    }

    if(y + dy > canvas.height-radius ||
      y + dy < 0) {
        dy = -dy;
    }

  // ******** Move BLOCK ********//
    if (rightKey && block_x + block_w <= 550) {
      block_x += 10;
    } else if (leftKey && block_x > 50) {
      block_x -= 10;
    }

    if (upKey && block_y > 50) {
      block_y -= 10;
    } else if (downKey && block_y < 550) {
        block_y += 10;
    }

    //********* COLLISION DETECTION & WIN LOGIC ********//
    if(x < block_x + block_w &&
       x + 10 > block_x &&
       y < block_y + block_h &&
       y + 10 > block_y) {
        alert('Game Over!');
        clearInterval(timer);
        clearInterval(game);
    }
}

//********* DRAW CIRCLES on CANVAS ********//
function drawGrid(){
  ctx.beginPath();
  ctx.arc(100, 80, 25, 0, 2*Math.PI, true);
  ctx.lineWidth = 5;
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 80, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(500, 80, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 280, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 280, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(500, 280, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 480, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 480, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(500, 480, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();
}
drawGrid();

function randomNumber(){
  return Math.floor((Math.random() * 480) + 1);
}

function onKeyDown(evt) {
  if (evt.keyCode == 39) rightKey = true;
  else if (evt.keyCode == 37) leftKey = true;
  if (evt.keyCode == 38) upKey = true;
  else if (evt.keyCode == 40) downKey = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39) rightKey = false;
  else if (evt.keyCode == 37) leftKey = false;
  if (evt.keyCode == 38) upKey = false;
  else if (evt.keyCode == 40) downKey = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
