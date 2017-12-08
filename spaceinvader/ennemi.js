var DELTA_X_ENNEMI = 10;
var DELTA_Y_ENNEMI = 16;
console.log("ennemi loaded");
class Ennemi{
    constructor(x,y,width,height,image)
    {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = image;
        this.alive = true;
    }
    
    moveRight()
    {

        this.x += DELTA_X_ENNEMI;
    }

    moveLeft()
    {
        this.x -= DELTA_X_ENNEMI;
    }

    moveDown()
    {
        this.y += DELTA_Y_ENNEMI;
    }

    testDeath(tirs)
    {//Esdeath :D
        for (let i = 0; i < tirs.length; i ++)
        {
            if(tirs[i].x > this.x & tirs[i].x < this.x + this.width)
            {
                if(tirs[i].y > this.y & tirs[i].y < this.y + this.height)
                {
                    if(this.alive & !tirs[i].touchedTarget)
                    {    
                    this.die();
                    this.alive = false;
                    console.log("an ennemy just died");
                    tirs[i].touchedTarget = true;
                    }
                }
            }
        }

    }

    draw(context)
    {
            if(this.alive)
            context.drawImage(this.image,this.x,this.y);
    }

    annimationDie(){
        //TODO

    }
    die()
    {
        this.annimationDie();
    }



}