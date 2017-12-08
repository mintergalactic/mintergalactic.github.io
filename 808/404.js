
document.body.innerHTML = "";
var canvas = document.createElement("canvas");
//document.write(larg);
canvas.id = "404";
document.body.appendChild(canvas);
var larg = (window.innerWidth);
var haut = (window.innerHeight);
canvas.width = larg-1;
canvas.height = haut-1;
console.log(larg);
console.log(haut);
var context = canvas.getContext("2d");

context.fillStyle = "#000000";
var reBounding = new Image();
reBounding.src = "rebond.png";
class vector{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    rebondX(){
        this.x = - this.x;
    }
    
    rebondY(){
        this.y = - this.y;
    }
}
var position = new vector(0,0);
var direction = new vector(5,2);
reBounding.onload = new function()
{
    main();
}
function main(){
    
    context.fillRect(0, 0, canvas.width, canvas.height);
    position.x += direction.x;
    position.y += direction.y;
    if(position.x + reBounding.width > larg || position.x < 0)
    {
        direction.rebondX()
        position.x += 2* direction.x;
    }
    if(position.y + reBounding.height> haut|| position.y < 0)
    {
        direction.rebondY()
        position.y += 2* direction.y;
    }
    context.drawImage(reBounding,position.x,position.y);
    setTimeout(main,40);
}