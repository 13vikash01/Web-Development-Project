let val1=document.getElementById('value1');
let val2=document.getElementById('value2');
let val3=document.getElementById('value3');
let inpspeed=document.getElementById('inpspeed');
let values=['😁','😠','😙','😆','😏','😈','😸']
function getRandom()
{
    return values[Math.floor(Math.random()*7)];
   
}
let Intervalid;
let gameover=false;
function updateAnimation(newspeed)
{
        if(Intervalid)
        clearInterval(Intervalid);
        

        Intervalid=setInterval(()=>
        {
               val1.innerHTML=getRandom();
               val2.innerHTML=getRandom();
               val3.innerHTML=getRandom();
               if((val1.innerHTML==val2.innerHTML)&&(val2.innerHTML==val3.innerHTML))
               {
                   gameover=true;
                   alert("You Win");
                   clearInterval(Intervalid);
                   
                   var inp=prompt('Want to play again');
                   if(inp==="yes")
                   location.reload();
                   else
                   window.close();
               }

        },1000/newspeed)
}


inpspeed.onchange=function(event)
{
     //document.documentElement is root of css
     document.documentElement.style.setProperty('--speed',event.target.value)
     updateAnimation(event.target.value);
}