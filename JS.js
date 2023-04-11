const bod = document.querySelector('body');
var useracum=0, compacum=0;
const div =document.querySelector('#finalres');

   document.querySelector('#rock').addEventListener('click', () => {
      play("ROCK");
    });
   
    document.querySelector('#paper').addEventListener('click', () => {
      play("PAPER");
    });
   
    document.querySelector('#sissors').addEventListener('click', () => {
      play("SISSORS");
    });


 


function GetcomputerChoice() {
   /* this function will return either a ROCK, PAPER OR SISSORS */
   var compChoice ;
   var randomnum= Math.floor(Math.random()*3 ) ;
    if (randomnum==0) { 
       compChoice= "PAPER" ;
    }
    else if (randomnum==1) {
       compChoice= "ROCK" ;
    }
    else if (randomnum==2) {
       compChoice= "SISSORS" ;
    }
    return compChoice ;
}



function play (userinput){
   var compChoice = GetcomputerChoice() ;
   var resultdiv = document.querySelector('#result');
   resultdiv.textContent ="COMPUTER CHOSE: "+ compChoice+" YOU CHOSE " + userinput;
   
   var resultspan = document.querySelector('#result2');

   if (compChoice==userinput) {
      resultspan.textContent= "TIE " ;
      
   }
   else if (compChoice=="PAPER"&& userinput=="SISSORS") {
      useracum++;

      resultspan.textContent= "YOU WIN SISSORS BEATS PAPER " ;
   }
   else if (compChoice=="PAPER"&& userinput=="ROCK") {
      compacum++;

      resultspan.textContent= "YOU LOOSE PAPER BEATS ROCK ";
   } 
   else if (compChoice=="SISSORS"&& userinput=="PAPER") {
      compacum++;

      resultspan.textContent= "YOU LOOSE SISSORS BEATS PAPER";
   }
   else if (compChoice=="SISSORS"&& userinput=="ROCK") {
      useracum++;

      resultspan.textContent= "YOU WIN ROCK BEATS SISSORS"; 
   }
   else if (compChoice=="ROCK"&& userinput=="PAPER") {
      useracum++;

      resultspan.textContent= "YOU WIN PAPER BEATS ROCK"; 
   }
   else if (compChoice=="ROCK"&& userinput=="SISSORS") {
      compacum++;

      resultspan.textContent= "YOU LOOSE SISSORS BEATS ROCK"; 
   }
  var score= document.querySelector('#score');
  score.textContent="COMPUTER "+compacum+" USER "+ useracum;
   game();
 

}
function game() {
   if(compacum==5&&compacum>useracum){
      div.textContent="YOU LOOSE GAME OVER";
      
      compacum=0, useracum=0;
      
     }
     if(useracum==5&&useracum>compacum){
      div.textContent="YOU WIN GAME OVER";
   
      compacum=0, useracum=0;
      

     }
     if(useracum==5&&compacum==5){
      div.textContent="TIE GAME OVER";
      
      compacum=0, useracum=0;
      

     }
     if (useracum!=0||compacum!=0){

      div.textContent = "";
    }
      

   }


