let timer=0;
let hitn
let score=0

function updateScore(){
 score=score+10;
 document.querySelector(".scoreVal").innerText=score

}
function runTimer(){
  let timeint=  setInterval(()=>{
  if(timer>0){
    timer--;
    document.querySelector(".timerVal").innerText=timer
  }
else{
    clearInterval(timeint);
    document.querySelector(".pBotam").style.flexDirection='column'
    document.querySelector(".pBotam").innerHTML=`<div><h1>game is over your score =${score}</h1></div>

       <div> <button class="reset">Reset Game</button> </div>`

     

}
    },1000)
}

function makeBubble(){
    let bl="";

for ( let i=1; i<=224; i++){
    let rn=Math.floor(Math.random()*10)
    bl=bl+`<div class="bubble">${rn}</div>`;

}

document.querySelector(".pBotam").innerHTML=bl
}

function updateHit(){
   hitn=Math.floor(Math.random()*10);
   document.querySelector(".hitVal").innerText=hitn;
}


makeBubble();
runTimer()
updateHit();


document.querySelector(".pBotam").addEventListener("click",(e)=>{
    console.log()
     if(Number(e.target.innerText) === hitn){
        updateScore();
        updateHit();
        makeBubble();
     }

     if (e.target.classList.contains("reset")) {
        score = 0;
        timer = 60;
        makeBubble();
        updateHit();
        runTimer();
        document.querySelector(".pBotam").style.flexDirection = 'row';
    }
})

