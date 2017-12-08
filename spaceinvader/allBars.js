class allEnnemyBars{
    constructor()
    {
        this.win = 0;
        this.sens = 1;
        let lesX = [100,200,300,350,400, 500,600];
        this.bars = [];
        let y = 0;
        this.bars.push(new EnnemiBar(y,lesX));
        lesX = [100,200,300,400, 500,600];
        y = 50;
        this.bars.push(new EnnemiBar(y,lesX));
        lesX = [100,150,200,300,400, 500,550,600];
        y = 100;
        this.bars.push(new EnnemiBar(y,lesX));
        lesX = [200,300,400, 600];
        y = 150;
        this.bars.push(new EnnemiBar(y,lesX));
        lesX = [200,300,350,400, 600];
        y = 200;
        this.bars.push(new EnnemiBar(y,lesX));

    } 

    move()
    {
        let min = BORD_DROIT;
        let max = 0;
        for(let i = 0; i < this.bars.length; i++)
        {
            let scorx = this.bars[i].x;
            if(scorx < min & this.bars[i].ennemis.length != 0)
                min = scorx;
            scorx += this.bars[i].width;
            if(scorx > max & this.bars[i].ennemis.length != 0)
            {
                max = scorx;
            }
        }
        
        if(this.sens == 1)
            {
                if(max + DELTA_X_ENNEMI < BORD_DROIT)
                {
                    this.moveRight();
                }
                else{
                    this.sens = -1;
                    this.moveDown();
                    
                }
            }
        else
        {
            if(min - DELTA_X_ENNEMI > BORD_GAUCHE)
            {
                this.moveLeft();
            }
            else{
                this.sens = 1;
                this.moveDown();
            }
        }
    }
    moveRight(){
        for(let i = 0; i < this.bars.length; i++)
        {
            this.bars[i].moveRight();
        }
    }
    moveLeft(){
        for(let i = 0; i < this.bars.length; i++)
        {
            this.bars[i].moveLeft();
        }
    }
    moveDown(){
        for(let i = 0; i < this.bars.length; i++)
        {
            this.bars[i].moveDown();
        }
    }
    testDeath(tirs)
    {
        let totalennemis = 0;
        for(let i = 0; i < this.bars.length; i++)
        {
            totalennemis += this.bars[i].testDeath(tirs);
        }
        if(totalennemis == 0)
            this.win = 1;
    }

    
    draw(context){
        for(let i = 0; i < this.bars.length; i++)
        {
            this.bars[i].draw(context);
        }
    }
}