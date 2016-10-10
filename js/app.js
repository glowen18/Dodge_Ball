// *********** Draw the playground box **************
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');


  ctx.beginPath();
  ctx.arc(200, 200, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 200, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 200, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 300, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 300, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 300, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 400, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 400, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(400, 400, 20, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.stroke();



  // circle.moveTo(200,200);
  // circle.arc(100, 35, 25, 0, 2*Math.PI);
  // ctx.stroke(circle);






  // *********** Draw a BALL **************
  // ctx.beginPath();
  // ctx.arc(240,160,10,0, Math.PI*2, false);
  // ctx.fillStyle = "purple";
  // ctx.fill();
  // ctx.closePath();

  // *********** Function to MOVE the BALL **************
var x = myCanvas.width-300;
var y = myCanvas.height-100;
var dx = 2;
var dy = -2;
var ballRadius = 10;

// ******** Function to DRAW the BALL
  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
  }

// ******** Function to remove the trail of the ball
  // function draw() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   drawBall();
  // }

// ******** Move the Ball
  // if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
  //   dx = -dx;
  // }
  //
  // if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
  //   dy = -dy;
  // } else if (y + dy > canvas.height-ballRadius) {
  //   alert("Game Over! :/(")
  //   document.location.reload();
  // }
  //   x += dx;
  //   y += dy;
  // }
  //
  // setInterval(draw, 10);

// })
