console.log("hello");
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

function validateuserinput (userinput){
   if (userinput=="1") {
      return "ROCK";
   } 
   else if (userinput=="2") {
      return "SISSORS";
   }
   else if (userinput=="3"){
      return "PAPER" ;

   }
   else{
      return "invalid";
   }
}
while (userinput =="invalid") {

   var userinput= prompt("enter 1 for ROCK, 2 FOR SISSORS, 3 FOR PAPER");
   userinput=validateuserinput(userinput);
   console.log("wrong try again");

   
}

function play (){
   var compChoice = GetcomputerChoice() ;
   var userinput= prompt("enter 1 for ROCK, 2 FOR SISSORS, 3 FOR PAPER");
   userinput=validateuserinput(userinput);
   var compacum =0, useracum=0;
   console.log("COMPUTER CHOSE: "+ compChoice+"you chose " + userinput); 
   if (compChoice==userinput) {
      return "TIE";

   }
   else if (compChoice=="PAPER"&& userinput=="SISSORS") {
      return "you WIN SISSORS BEATS PAPER";
   }
   else if (compChoice=="PAPER"&& userinput=="ROCK") {
      return "you LOOSE PAPER BEATS ROCK";
   } 
   else if (compChoice=="SISSORS"&& userinput=="PAPER") {
      return "you LOOSE SISSORS BEATS PAPER";

   }
   else if (compChoice=="SISSORS"&& userinput=="ROCK") {
      return "you WIN ROCK BEATS SISSORS";

   }
   else if (compChoice=="ROCK"&& userinput=="PAPER") {
      return "you WIN PAPER BEATS ROCK";

   }
   else if (compChoice=="ROCK"&& userinput=="SISSORS") {
      return "YOU LOOSE SISSORS BEATS ROCK";
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

game() ;