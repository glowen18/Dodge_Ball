// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var start = $('#start').on('click', startGame);
var width = $('#myCanvas').width();
var height = $('#myCanvas').height();

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
  $('#start').off();
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
function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = '#00ddff';
  ctx.fill();
  ctx.closePath();
}

function drawBlock(){
  ctx.fillRect(block_x,block_y,block_w,block_h);
}

// ******** ReDraw the CANVAS ********//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
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

// ******** Move BLOCK ********//
    if (rightKey && block_x + block_w <= 410) block_x += 10;
      else if (leftKey && block_x > 186) block_x -= 10;

    if (upKey && block_y > 170) block_y -= 10;
      else if (downKey && block_y < 405) block_y += 10;

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


  //*********** COLLISION DETECTION ************//





// setInterval(function(){
//   var block;
//   var circle;

//   block.top = $('#block').offset().top;
//   block.left = $('#block')offset().left;
//   block.right = Number($('#block').offset().left);
//   Number($('#block').width());
//   block.bottom = Number($('#block').offset().top);
//
//   circle.top = $('#circle').offset().top;
//   circle.left = $('#circle')offset().left;
//   circle.right = Number($('#circle').offset().left);
//   Number($('#circle').width());
//   circle.bottom = Number($('#circle').offset().top);
// }, 1000);



  // function collisionDetection(){
  //   for (i=0; i<block_w; i++){
  //     for (j=0; j<block_h; j++){
  //       var b = blocks[i][j];
  //
  //     if(x > b.x && x < b.x+block_w) && y > b.y && y < b.y+block_h) {
  //       dy = -dy;
  //
  //     }
  //    }
  //   }
  // }
  // collisionDetection();
