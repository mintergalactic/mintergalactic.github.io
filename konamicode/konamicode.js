var cd;
// haut 38, bas 40, gauche 37, droite 39, a 65, b 66
class Keyboard
{
    constructor()
    {
        this.chaine = [38,38, 40, 40, 37, 39, 37 ,39 ,66, 65]//inserer les codes ici
        this.validated = [];
        for(let i = 0; i < this.chaine.length; i++)
        {
            this.validated.push(false);
        }
        document.onkeyup = this.keyListenerUp;
    }
    keyListenerUp(event){
        let i = 0;
        while(i < cd.chaine.length & cd.validated[i])
            i++;
        if(cd.validated[i] == true)
        {
            //konami code juste
            konamiCode();
        }
        else
        {
            if (event.keyCode == cd.chaine[i])
            {
                cd.validated[i] = true;
                if (i == cd.chaine.length - 1)
                {
                    konamiCode();
                }
            }
            else
            {
                for(let i = 0; i < cd.chaine.length; i++)
                {
                    cd.validated[i] = false;
                }
            }
        }

    }   
    
        
}



cd = new Keyboard();
console.log("yolo");
function konamiCode(){

location.replace("/Enigmes.html");
}
