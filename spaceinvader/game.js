



var v
var cd
function init(){
    
    if(isAllLoaded)
    {
        cd = new Keyboard();
        console.log("ennemy are comming");
        bars = new allEnnemyBars();
        v = new Vaisseau(400,800,80,60,3,ressourcesGraphiques["MintergalacticSpaceship"][0]);
        v.draw(context);
        bars.draw(context);
        setTimeout(play2,10);
    }
}

if(isAllLoaded)
    init();
function play2(){
    play();
    setTimeout(play2,40);
}
function drawAll(context){
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < projectiles.length; i++)
    {
        projectiles[i].draw(context);
    }
    bars.draw(context);
    v.draw(context);
}
function moveAll()
{
    bars.move();
    if(cd.keyD == true)
    {
        
        v.moveRight();
    }
    if(cd.keyG == true)
    {
        v.moveLeft();
    }
    if(cd.keyS == true)
    {
        v.fire();
    }
    bars.testDeath(projectiles);
    for(let i = 0; i < projectiles.length; i++)
    {
        if(projectiles[i].touchedTarget)
            projectiles.splice(i,1);
        else
        projectiles[i].avance();
    }
}


function play(){
    moveAll();
    drawAll(context);
    if(bars.win == 1)
        bars = new allEnnemyBars();
    
}