// *********** Draw the playground box **************
var canvas = $('#myCanvas')[0];
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

// ******** DRAW the BALL ********//
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = '#ff0000';
  ctx.fill();
  ctx.closePath();
}

//******** Redraw the moving ball ************//
function reDraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;  
  }
setInterval(reDraw, 10);


// ******** Function to remove the trail of the ball
// // //   // {
// // //   //
// // //   // }
// // //
// // // ******** Move the Ball
// // //   if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
// // //     dx = -dx;
// // //   }
// // //
// // //   if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
// // //     dy = -dy;
// // //   } else if (y + dy > canvas.height-ballRadius) {
// // //     alert("Game Over! :/(")
// // //     document.location.reload();
// // //   }
// // //     x += dx;
// // //     y += dy;
// // //   }
// // //
// // //   setInterval(draw, 10);
// // //
// // // })


// //create the circles on the canvas
// function grid () {
//   ctx.beginPath();
//   ctx.arc(200, 180, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(300, 180, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(400, 180, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(200, 300, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(300, 300, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(400, 300, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(200, 420, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(300, 420, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
//
//   ctx.beginPath();
//   ctx.arc(400, 420, 25, 0, 2*Math.PI, true);
//   ctx.closePath();
//   ctx.stroke();
// }
// // grid();
//
