function computerPlay(){
    var myArray = [
        "rock",
        "paper",
        "scissors"
      ];
      
      var toss = myArray[Math.floor(Math.random()*myArray.length)];
      return toss;
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
        return "Tie"           
        }  
        else if(computerSelection=="scissors"){

        return  "You Lose! Rock beats Scissors"
        }
        else{
            return "Computer's victory"
        }   
    }
    else if (playerSelection=="paper") {

        if (computerSelection=="rock") {
        return "You Lose! Paper beats Rock"           
        }  
        else if(computerSelection=="scissors"){
        return  "Computer's victory"
        }
        else{
            return "Tie"
        }   
    }
    if (playerSelection=="scissors") {

        if (computerSelection=="rock") {
        return "Computer's victory"           
        }  
        else if(computerSelection=="scissors"){
        return  "Tie"
        }
        else{
            return "You Lose! Scissors beats Paper"
        }   
    }
  }
  
  
  
  function game(){
      let playerVictory = 0;
      let computerVictory = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("choose your play:").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection)=="Computer's victory") {
            computerVictory += 1                   
        }
        else if(playRound(playerSelection, computerSelection)=="Tie"){
            
            playerVictory += 1
            computerVictory += 1
        }
        else{
            playerVictory +=1
        }
        
        console.log("player Victory:"+" "+playerVictory+"\n","computer victory:"+""+computerVictory);
     }
  }
  game()