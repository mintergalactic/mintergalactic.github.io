var ENNEMI_WIDTH = 80;//random values just to test
var ENNEMI_HEIGHT = 60;
console.log("ennemiBar loaded");
class EnnemiBar
{
    constructor (y,ennemisX)
    {
        this.x = BORD_DROIT;
        this.width = 0;
        this.ennemis = [];
        this.y = y;
        for(let i = 0; i < ennemisX.length; i++)
        {
            this.ennemis.push(new Ennemi(ennemisX[i],y,ENNEMI_WIDTH,ENNEMI_HEIGHT,ressourcesGraphiques["basicEnnemy"][0]));
            if(this.ennemis[i].x + this.ennemis[i].width - this.x > this.width)
            {
                this.width = this.ennemis[i].x + this.ennemis[i].width - this.x;
            }
            if(this.ennemis[i].x < this.x)
                this.x = this.ennemis[i].x;
        }

    }

    testDeath(tirs){
        for(let i = 0; i < this.ennemis.length; i++)
        {
            this.ennemis[i].testDeath(tirs);
        }
        var newEnnemis = [];
        for(let i = 0; i < this.ennemis.length; i++)
        {
            if(this.ennemis[i].alive)
                newEnnemis.push(this.ennemis[i]);
        }
        this.ennemis = newEnnemis;
        if(this.ennemis.length !=0)
        {this.x = this.ennemis[0].x;
        
        this.width = this.ennemis[this.ennemis.length - 1].x;
        this.width = ENNEMI_WIDTH + this.width - this.x;
        return 1;
        }
        return 0;
    }

    moveRight(){
        this.x += DELTA_X_ENNEMI;
        for(let i = 0; i < this.ennemis.length; i++)
        {
            this.ennemis[i].moveRight();
        }
    }
    moveLeft(){
        this.x -= DELTA_X_ENNEMI;
        for(let i = 0; i < this.ennemis.length; i++)
        {
            this.ennemis[i].moveLeft();
        }
    }
    moveDown(){
        this.y += DELTA_Y_ENNEMI;
        for(let i = 0; i < this.ennemis.length; i++)
        {
            this.ennemis[i].moveDown();
        }
    }
    draw(context){
    for(let i = 0; i < this.ennemis.length; i++)
        {
            this.ennemis[i].draw(context);
        }
    }

}