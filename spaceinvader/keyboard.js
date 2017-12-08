
class Keyboard
{
    constructor()
    {
        this.keyD = false;
        this.keyG = false;
        this.keyS = false;
        document.body.onkeyup = this.keyListenerUp;
        document.body.onkeydown = this.keyListenerDown;
    }
        keyListenerDown(event){
            
        if(event.keyCode == 39)
        {
             
            cd.keyD = true;
             
        }
        if(event.keyCode == 37)
        {
            cd.keyG = true;
        }
        if(event.keyCode == 32)
        {
            cd.keyS = true;
        }

    }
        
    keyListenerUp(event){
        if(event.keyCode == 39)
        {
            cd.keyD = false;
        }
        if(event.keyCode == 37)
        {
            cd.keyG = false;
        }
        if(event.keyCode == 32)
        {
            cd.keyS = false;
        }

    }
        
}

