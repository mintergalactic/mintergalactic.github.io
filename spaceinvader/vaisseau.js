var DELTA_SHIP = 10;
var projectiles = [];
var DELTA_FIRE = 50;
console.log("vaisseau loaded");

class Vaisseau{
    constructor(x,y,width,height,life,image)
    {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.life = life;
        this.image = image;
        this.reloading = 0;
    }
    
    moveRight()
    {
        this.x += DELTA_SHIP;
    }

    moveLeft()
    {
        this.x -= DELTA_SHIP;
    }

    annimationDie(){
        //TODO

    }
    die()
    {
        this.annimationDie();
        this.life = this.life - 1;
    }

    annimationFire()
    {
        //TODO
    }

    fire()
    {
        if(this.reloading <= 0){
        projectiles.push(new Projectile(this.x + this.width/ 2, this. y - this.height - DELTA_FIRE));
        this.reloading = 5
        }

    }

    draw(context)
    {
        this.reloading --;
            context.drawImage(this.image,this.x,this.y);
    }

}