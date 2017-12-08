var DELTA_Y_FIRE = 20;
console.log("projectile loaded");
class Projectile
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.image = ressourcesGraphiques["projectile"][0];
        this.touchedTarget = false;
    }
    
    avance(){
        this.y -= DELTA_Y_FIRE;
        
    }

    draw(context)
    {
            context.drawImage(this.image,this.x,this.y);
            
    }




}