// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var start = $('#start').on('click', startGame);
var width = $('#myCanvas').width();
var height = $('#myCanvas').height();

// var img = new Image();
var x = randomNumber();
var y = randomNumber();
var dx = 2;
var dy = -2;

var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;
var block_x = canvas.width / 2 - 15;
var block_y = canvas.height / 2 - 15;
var block_h = 30;
var block_w = 30;

// img.src = "./assets/myguy.jpg"

//******** START GAME ***********//
function startGame(){
  setInterval(reDraw, 25);
  $('#start').off();
};

//create the circles on the canvas
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
function createBall(){
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = '#00ddff';
  ctx.fill();
  ctx.closePath();
}

// function drawGuy(){
//   ctx.drawImage(img, 280, 280, 50, 50)
// }


// ******** ReDraw MOVING the BALL ********//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createBall();
  drawGrid();
  drawBlock();
  // drawGuy();
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
    if (rightKey && block_x + block_w <= 410) block_x += 10;
  else if (leftKey && block_x > 186) block_x -= 10;
    if (upKey && block_y > 170) block_y -= 10;
    else if (downKey && block_y < 405) block_y += 10;

  }
function randomNumber(){
  return Math.floor((Math.random() * 480) + 1);
}

function drawBlock(){
  ctx.fillRect(block_x,block_y,block_w,block_h);
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


//*********** COLLISION DETECTION ************//
