// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var start = $('#start').on('click', startGame);
var x = randomNumber();
var y = randomNumber();
var dx = 2;
var dy = -2;
var img = new Image();

img.src = "./assets/myguy.jpg"

//******** START GAME *********//
function startGame(){
  setInterval(reDraw, 10);
  $('#start').off();
};

//create the circles on the canvas
function drawGrid () {
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
function createBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = '#00ddff';
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
function drawGuy() {
  ctx.drawImage(img, 280, 280, 50, 50)
}

  $(document).ready(function(){
    $("#myGuy").focus();
    $("#myGuy").on('keydown', function(event){
      switch (event.which){
        case 37:
          $('#myGuy').stop().animate({
            left: '-=10'
          }); //left arrow key
          break;
        case 38:
          $('#myGuy').stop().animate({
            top: '-=10'
          }); //up arrow key
          break;
        case 39:
          $('#myGuy').stop().animate({
            left: '+=10'
          })  // right arrow key
          break;
        case 40:
          $('#myGuy').stop().animate({
            top: '+=10'
          }); //bottom arrow key
          break;
    }
  });
});

//******** Redraw the moving ball ************//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    createBall();
    drawGrid();
    drawGuy();


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
  }

  function randomNumber(){
    return Math.floor((Math.random() * 480) + 1);
  }
