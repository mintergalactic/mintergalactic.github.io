var isAllLoaded = false;
var ressourcesGraphiques = 
{
    "basicEnnemy": [new Image(), false],
    "boss" : [new Image(), false],
    "MintergalacticSpaceship" : [new Image(), false],
    "projectile" : [new Image(), false],
}

function init(){}
function actualiseLoad(resLoaded)
{
    console.log("loaded "+resLoaded);
    ressourcesGraphiques[resLoaded][1] = true;
    isAllLoaded = true;
    for (let cle in ressourcesGraphiques)
    {
        if(ressourcesGraphiques[cle][1] == false)
            isAllLoaded = false;
    }
    
    init();
}



for (let cle in ressourcesGraphiques)
{
    ressourcesGraphiques[cle][0].src = cle+".png";
    console.log("loading "+ressourcesGraphiques[cle][0].src);
    ressourcesGraphiques[cle][0].onload = function(){actualiseLoad(cle)};


}
