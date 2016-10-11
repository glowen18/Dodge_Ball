// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var x = randomNumber();
var y = randomNumber();
var dx = 2;
var dy = -2;


// ********** Draw Multiple Balls *********//




// ******** DRAW the BALL ********//
function createBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = '#ff0000';
  ctx.fill();
  ctx.closePath();
}

//*********** COLLISION DETECTION ************//
function collisionDetection() {
  for(i = 0; i < canvas.width; i++) {
    for(j = 0; j < canvas.height; j++) {
      var ij = collide[i][j];
    }
  }
}

//******** Redraw the moving ball ************//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    createBall();

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
    // } else if (y + dy > canvas.height) {
    //     alert("Game Over! :/(")
    //       document.location.reload();
    }
    x += dx;
    y += dy;
  }
  setInterval(reDraw, 10);

  function randomNumber(){
    return Math.floor((Math.random() * 480) + 1);
  }

// //create the circles on the canvas
function grid () {
  ctx.beginPath();
  ctx.arc(200, 180, 25, 0, 2*Math.PI, true);
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
grid();
