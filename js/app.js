// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var width = $('#myCanvas').width();
var height = $('#myCanvas').height();

var start = $('#start').on('click', startGame);
// var reset = $('#reset').on('click', resetGame);
var startTime = new Date().getTime();
var lives;

var score = 0;

var x = randomNumber();
var y = randomNumber();
var dx = 2;
var dy = -2;

//********* Create BLOCK & BLOCK Movement ********//
var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;

var block_x = 285; //x position of block
var block_y = 285; //y position of block
var block_h = 30;  // block height
var block_w = 30;  // block width

//******** DRAW the SCORE ********//
// function drawScore(){
//   ctx.font = "36px Arial";
//   ctx.fillStyle = '#000000';
//   ctx.fillText("Score: " +score, 42, 54);
// }

// ******** WIN LOGIC ************
var secs = 10;
var id = setInterval(function(){
    secs--; console.log(secs);
  if(!secs){
    clearInterval(id);
    alert('You Win!');
    }
  }, 1000);

//******** START GAME ***********//
function startGame(){
  lives = 1
  window.play = setInterval(reDraw, 25);
  // $('#start').off();
};

// ******** RESET GAME ***********//
// function resetGame(){
//   $('#reset').click(function(){
//     $('#gameOver').fadeOut();
//   })
// };

//********* DRAW the CIRCLES on the CANVAS ********//
function drawGrid() {
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

// ******** DRAW the BALL ********//
var drawBall = function(){
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = '#ff0000';
  ctx.fill();
  ctx.closePath();
}

// ******** DRAW the SQUARE ********//
function drawBlock(){
  ctx.fillRect(block_x,block_y,block_w,block_h);
}

// ******** ReDraw the CANVAS ********//
function reDraw() {
  if(!secs){
    clearInterval(window.play)
}

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(lives){
  drawBall();
  drawGrid();
  drawBlock();
  // drawScore();
}
// ******** Move the Ball *************//
  if(x + dx > canvas.width || x + dx < 0) {
      x = randomNumber();
      var random = randomNumber()
      if(random % 2) {
        y = 0
      } else {
        y = canvas.height
      }
      dx = -dx;
    }

    if(y + dy > canvas.height || y + dy < 0) {
      y = randomNumber();
      var random = randomNumber()
      if(random % 2) {
        x = 0
      } else {
        x = canvas.width
    }
      dy = -dy;
    }
    x += dx;
    y += dy;

// ******** Move BLOCK ********//

    if (rightKey && block_x + block_w <= 550) block_x += 10;
      else if (leftKey && block_x > 50) block_x -= 10;

    if (upKey && block_y > 50) block_y -= 10;
      else if (downKey && block_y < 550) block_y += 10;

    //*********** COLLISION DETECTION ************//
    if(x < block_x + block_w &&
       x + 10 > block_x &&
       y < block_y + block_h &&
       y + 10 > block_y) {
      // lives--
         alert('Game Over!');
        //  reDraw();
    }

//   setTimeout(function(){
//     alert(message);
//   }, 1000);
}

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
