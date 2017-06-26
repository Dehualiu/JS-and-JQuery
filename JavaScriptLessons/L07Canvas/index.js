/**
 * Created by Administrator on 2017/5/25.
 */
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


context.fillStyle="#FF0000";
context.beginPath();
context.arc(70,18,15,0,Math.PI*2,true);
context.closePath();
context.fill();


