// *********** Draw the playground box **************
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); //create canvas


//create the circles on the canvas

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

  // *********** Draw a BALL going across the screen **************

  var x = canvas.width-0;
  var y = canvas.height-300;
  var dx = -6;
  var dy = 0;
  var rightPressed = false;
  var leftPressed = false;

  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = '#0064ee';
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
  }

  setInterval(draw, 10);

  //Draw a person to move around and dodge the ballRadius
  var ballerHeight = 75;
  var ballerWidth = 10;
  var ballerX = (canvas.height-ballerHeight)/2;

  function drawBaller() {
    ctx.beginPath();
    ctx.rect(ballerX, canvas.width-ballerWidth, ballerHeight, ballerWidth);
    ctx.fillStyle = '#ff99dd';
    ctx.fill();
    ctx.closePath()
  }








//   canvas.addEventListener('mouseover', function(e) {
//     raf = window.requestAnimationFrame(draw);
//   });
//
//   canvas.addEventListener('mouseout', function(e) {
//     window.cancelAnimationFrame(raf);
//   });
//
//   ball.draw();
//
//
//
//
//
//
//
//
//
//
//   // ctx.beginPath();
//   // ctx.arc(240,160,10,0, Math.PI*2, false);
//   // ctx.fillStyle = "purple";
//   // ctx.fill();
//   // ctx.closePath();
//
//   // circle.moveTo(200,200);
//   // circle.arc(100, 35, 25, 0, 2*Math.PI);
//   // ctx.stroke(circle);
//
//
//
//   // *********** Function to MOVE the BALL **************
// var x = myCanvas.width-300;
// var y = myCanvas.height-100;
// var dx = 2;
// var dy = -2;
// var ballRadius = 10;
//
// // ******** Function to DRAW the BALL
//   function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "purple";
//     ctx.fill();
//     ctx.closePath();
//   }
//
// // // ******** Function to remove the trail of the ball
// //   // function draw() {
// //   //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   //   drawBall();
// //   // }
// //
// // ******** Move the Ball
// //   if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
// //     dx = -dx;
// //   }
// //
// //   if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
// //     dy = -dy;
// //   } else if (y + dy > canvas.height-ballRadius) {
// //     alert("Game Over! :/(")
// //     document.location.reload();
// //   }
// //     x += dx;
// //     y += dy;
// //   }
// //
// //   setInterval(draw, 10);
// //
// // })
