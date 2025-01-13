function makebubble(){
var clutter= " ";
for(var i=1; i<=360; i++){
       var ab= Math.floor(Math.random()*10);
       clutter+= `<div class="bubble">${ab}</div>`;   
}
document.querySelector("#pbtm").innerHTML= clutter;
}
var timer=60;
function gethit(){
    var ab = Math.floor(Math.random()*10);
    document.querySelector("#hittime").textContent=ab;
}
function runtimer(){
        var timeint= setInterval(function(){
              if(timer>0){
                timer--;
                document.querySelector("#timerval").textContent=timer;
              }
              else{
                clearInterval(timeint);
              }
         },1000);
}
gethit()
runtimer()
makebubble()