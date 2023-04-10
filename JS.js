console.log("hello");

let rock =document.querySelector('#rock');

rock.addEventListener('click', () => {
   play("ROCK");
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

  // var compacum =0, useracum=0;
   console.log("COMPUTER CHOSE: "+ compChoice+"you chose " + userinput); 
   if (compChoice==userinput) {
      console.log( "TIE");
      
   }
   else if (compChoice=="PAPER"&& userinput=="SISSORS") {
      console.log( "you WIN SISSORS BEATS PAPER");
   }
   else if (compChoice=="PAPER"&& userinput=="ROCK") {
      console.log( "you )LOOSE PAPER BEATS ROCK");
   } 
   else if (compChoice=="SISSORS"&& userinput=="PAPER") {
      console.log( "you LOOSE SISSORS BEATS PAPER");

   }
   else if (compChoice=="SISSORS"&& userinput=="ROCK") {
      console.log( "you WIN ROCK BEATS SISSORS");
   }
   else if (compChoice=="ROCK"&& userinput=="PAPER") {
      console.log( "you )WIN PAPER BEATS ROCK");

   }
   else if (compChoice=="ROCK"&& userinput=="SISSORS") {
      console.log("YOU L)OOSE SISSORS BEATS ROCK");
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


