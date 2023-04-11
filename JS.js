const bod = document.querySelector('body');
var useracum=0, compacum=0;

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
   resultdiv.textContent ="COMPUTER CHOSE: "+ compChoice+"you chose " + userinput;
   
   var resultspan = document.querySelector('#result2');

   if (compChoice==userinput) {
      resultspan.textContent= "TIE " ;
      
   }
   else if (compChoice=="PAPER"&& userinput=="SISSORS") {
      useracum++;

      resultspan.textContent= "you WIN SISSORS BEATS PAPER " ;
   }
   else if (compChoice=="PAPER"&& userinput=="ROCK") {
      compacum++;

      resultspan.textContent= "you LOOSE PAPER BEATS ROCK ";
   } 
   else if (compChoice=="SISSORS"&& userinput=="PAPER") {
      compacum++;

      resultspan.textContent= "you LOOSE SISSORS BEATS PAPEr";
   }
   else if (compChoice=="SISSORS"&& userinput=="ROCK") {
      useracum++;

      resultspan.textContent= "you WIN ROCK BEATS SISSORS"; 
   }
   else if (compChoice=="ROCK"&& userinput=="PAPER") {
      useracum++;

      resultspan.textContent= "you WIN PAPER BEATS ROCK"; 
   }
   else if (compChoice=="ROCK"&& userinput=="SISSORS") {
      compacum++;

      resultspan.textContent= "YOU LOOSE SISSORS BEATS ROCK"; 
   }
  var score= document.querySelector('#score');
  score.textContent=compacum+" "+ useracum;

  if(compacum==5&&compacum>useracum){
   const div =document.querySelector('#finalres');
   div.textContent="YOU LOOSE GAME OVER";

   compacum=0, useracum=0;
  }
  if(useracum==5&&useracum>compacum){
   const div =document.querySelector('#finalres');
   div.textContent="YOU WIN GAME OVER";

   compacum=0, useracum=0;

  }


}
function game() {
  let compacum=0, useracum=0;
   for (let index =0 ; index <5 ; index++){
      let statement =play();
   
      console.log(statement);
      if (statement.includes("WIN")) {
         useracum++;
      } else if (statement.includes("LOOSE")){
         compacum++;
      }
      console.log("comp = "+compacum+" user= "+useracum);

   }
   if (compacum>useracum) {
      console.log("you loose");
   }  else if(useracum>compacum) {
      console.log("you win");
   }
   else{
      console.log("Its a tie");
   }
   }


