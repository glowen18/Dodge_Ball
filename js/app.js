// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var start = $('#start').on('click', startGame);
var width = $('#myCanvas').width();
var height = $('#myCanvas').height();

var score = 0;
var reset;
var startTime = new Date().getTime();
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

//******** START GAME ***********//
function startGame(){
  setInterval(reDraw, 25);
  // $('#start').off();
};

//********* DRAW the CIRCLES on the CANVAS ********//
function drawGrid() {
  ctx.beginPath();
  ctx.arc(200, 180, 25, 0, 2*Math.PI, true);
  ctx.lineWidth = 5;
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 180, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 180, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 300, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 300, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 300, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 420, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 420, 25, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 420, 25, 0, 2*Math.PI, true);
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

// ******** DRAW the SCORE ********//
function drawScore(){
  ctx.font = "36px Arial";
  ctx.fillStyle = '#000000';
  ctx.fillText("Score: " +score, 42, 54);
}


// ******** ReDraw the CANVAS ********//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawGrid();
  drawBlock();
  drawScore();

// ******** Move the Ball *************//
  if(x + dx > canvas.width || x + dx < 0) {
    console.log('hit the side');
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
      console.log('hit the top or bottom');
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

    if (rightKey && block_x + block_w <= 410) block_x += 10;
      else if (leftKey && block_x > 186) block_x -= 10;

    if (upKey && block_y > 170) block_y -= 10;
      else if (downKey && block_y < 405) block_y += 10;

    //*********** COLLISION DETECTION ************//
    if(x < block_x + block_w &&
       x + 10 > block_x &&
       y < block_y + block_h &&
       y + 10 > block_y) {
         alert("Game Over!!!");
    }

//   setTimeout(function(){
//     alert(message);
//   }, 1000);
// }
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
