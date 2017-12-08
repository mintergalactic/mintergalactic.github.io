var BORD_GAUCHE = 0;
var BORD_DROIT = 800;
var BORD_HAUT = 0;
var BORD_BAS = 900;
console.log("fenetre loaded");
var canvas = document.createElement("canvas");
canvas.id = "jsTetrisCanvas";
document.body.appendChild(canvas);
canvas.width = BORD_DROIT;
canvas.height = BORD_BAS;
var context = canvas.getContext("2d");
context.fillStyle = "#000000";
context.fillRect(0, 0, canvas.width, canvas.height);

console.log("image?")