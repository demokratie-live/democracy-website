

/* global variables */

var fill = "#c7cee0";
var stroke = "#112761";
var strokeWidth = 0.7;
var shape = "circle"; // shield,circle
var icon = "dasense/page/default_developer/icons/red_dark/xhdpi/ic_action_achievement.png";

var iconX = 19;
var iconY = 20;


/* jQuery on document ready */

$(document).ready(function() {

  $("input[name=background-color]").val(fill);
  $("input[name=stroke-color]").val(stroke);
  $("input[name=stroke-width]").val(strokeWidth);
  $("input[name=file-url]").val(icon);
  $("input[name=iconx]").val(iconX);
  $("input[name=icony]").val(iconY);
  $("input[name=shape]").filter("[value="+shape+"]").attr('checked', true);

  drawBadge();

  $("form input").change(function() {
    updateValues();
    drawBadge();
  });

  $("form .btn-submit").click(function() {
    updateValues();
    drawBadge();
  });
  
});

function updateValues() {
  fill = $("input[name=background-color]").val();
  stroke = $("input[name=stroke-color]").val();
  strokeWidth = $("input[name=stroke-width]").val();
  shape = $("input[name=shape]:checked").val();
  icon = $("input[name=file-url]").val();
  iconX = $("input[name=iconx]").val();
  iconY = $("input[name=icony]").val();
}

function drawBadge() {
  var c = $("#badge")[0];
  var ctx = c.getContext("2d");

  if(shape == 'shield') {
    //iconY = 30;
    //iconY = parseInt(iconY) + 10;
    drawShield(ctx);
  }
  else if (shape == 'circle') {
    //iconY = 20;
    //iconY = parseInt(iconY) - 10;
    strokeWidth *= 12;
    drawCircle(ctx);
    strokeWidth /= 12;
  }

  $("input[name=iconx]").val(iconX);
  $("input[name=icony]").val(iconY);

  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, iconX, iconY);
    onFinish();
  }
  img.src = icon;
}

function onFinish() {
  var c = $("#badge")[0];
  var ctx = c.getContext("2d");
  ctx.restore();
  ctx.restore();
  ctx.save();
  $("a.btn-submit").attr('href', c.toDataURL()); 
}

function drawShield(ctx) {
    ctx.canvas.height = 120;
    ctx.canvas.width = 105;
    clearCanvas(ctx);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(543,0);
    ctx.lineTo(543,623);
    ctx.lineTo(0,623);
    ctx.closePath();
    ctx.clip();
    ctx.translate(0,-5);
    ctx.scale(12,12);
    ctx.save();
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(4.25,1.34);
    //ctx.bezierCurveTo(2.9985,1.7142367,1.747,2.0902233,0.4955,2.46621);
    //ctx.bezierCurveTo(0.58758835,5.2587502,1.2884488,8.6654921,4.25,9.66175);
    //ctx.bezierCurveTo(7.2442172,8.6940151,7.8773651,5.2291438,8.0045,2.46621);
    //ctx.bezierCurveTo(6.753,2.0902233,5.5015,1.7142367,4.25,1.33825);
    ctx.bezierCurveTo(3,1.7,1.75,2,0.5,2.5);
    ctx.bezierCurveTo(0.6,5.26,1.29,8.67,4.25,9.66);
    ctx.bezierCurveTo(7.24,8.69,7.88,5.23,8,2.47);
    ctx.bezierCurveTo(6.75,2,5.5,1.71,4.25,1.34);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }

  function drawCircle(ctx) {
    ctx.canvas.height = 100;
    clearCanvas(ctx);
    ctx.save();
    //ctx.translate(20,0);
    ctx.beginPath();
    ctx.arc(50,50,40,0,2*Math.PI);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }

  function clearCanvas(ctx) {
    var c = $("#badge")[0];
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);

    // Restore the transform
    ctx.restore();
  }

