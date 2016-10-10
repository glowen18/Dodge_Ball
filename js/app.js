$(document).ready(function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.rect(100, 100, 400, 400);
  ctx.strokeStyle = "rgb(0, 0, 255)";
  ctx.stroke();
  ctx.closePath();


})
