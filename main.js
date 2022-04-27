function computerPlay(){
    var myArray = [
        "rock",
        "paper",
        "scissors"
      ];
      
      var toss = myArray[Math.floor(Math.random()*myArray.length)];
      return toss;
}

function checkRound(){
        
        alert('Game Over'+""+"'\n"+"playerScore :"+playerVictory+"\n"+"computerScore"+computerVictory)
    
        playerVictory = 0;
        computerVictory = 0;
        roundNumber = 0;

        headerOfText.textContent = 'results'    
        text.textContent = "player victory:"+ playerVictory+"\n"+"computer victory:"+ computerVictory;
    
        return;
        
    
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock") {
        if (computerSelection=="rock") {
            playerVictory += 1 
            computerVictory += 1
        return "Tie"           
        }  
        else if(computerSelection=="scissors"){

            playerVictory += 1 
        return "You Lose! Rock beats Scissors"
        }
        else{
            computerVictory += 1  
            return "Computer's victory"
        }   
    }
    else if (playerSelection=="paper") {

        if (computerSelection=="rock") {
            playerVictory += 1 
        return "You Lose! Paper beats Rock"           
        }  
        else if(computerSelection=="scissors"){
            computerVictory += 1  
        return  "Computer's victory"
        }
        else{
            computerVictory += 1
            playerVictory += 1
            return "Tie"
        }   
    }
    if (playerSelection=="scissors") {

        if (computerSelection=="rock") {
            computerVictory += 1  
        return "Computer's victory"           
    }  
    else if(computerSelection=="scissors"){
        computerVictory += 1  
        playerVictory += 1 
        return  "Tie"
    }
        else{
            playerVictory += 1 
            return "You Lose! Scissors beats Paper"
        }   
    }
}
  


let playerSelection;
let computerSelection;
let playerVictory = 0;
let computerVictory = 0;
let roundNumber = 0;


let btn1 = document.getElementById('rock');
let btn2 = document.getElementById('scissors');
let btn3 = document.getElementById('paper');
let results = document.getElementById('results');
let text = document.createElement('p');
let headerOfText = document.createElement('h2');

results.appendChild(headerOfText);
results.appendChild(text);
headerOfText.textContent = 'result section'
text.textContent = "player victory:"+ playerVictory+"\n"+"computer victory:"+ computerVictory;
 

 btn1.addEventListener('click',()=>{
     roundNumber +=1;
     computerSelection = computerPlay();
     
     playerSelection = 'rock';
     
     headerOfText.textContent = playRound(playerSelection, computerSelection)
     
     text.textContent = "player victory:"+ playerVictory+"\n"+"computer victory:"+ computerVictory;
     if (roundNumber == 5){
         checkRound(roundNumber)
     }
    })
 btn2.addEventListener('click',()=>{
    roundNumber +=1;
    

    computerSelection = computerPlay();

    playerSelection = 'scissors';
    headerOfText.textContent = playRound(playerSelection, computerSelection)

    text.textContent = "player victory:"+ playerVictory+"\n"+"computer victory:"+ computerVictory;
    if (roundNumber == 5){
        checkRound(roundNumber)
    } 
})
 btn3.addEventListener('click',()=>{
    roundNumber +=1;
   

    computerSelection = computerPlay();

    playerSelection = 'paper';
    headerOfText.textContent = playRound(playerSelection, computerSelection)

    text.textContent = "player victory:"+ playerVictory+"\n"+"computer victory:"+ computerVictory;
    if (roundNumber == 5){
        checkRound(roundNumber)
    }
 })

 

 /*
 if (playRound(playerSelection, computerSelection)=="Computer's victory") {
      computerVictory += 1               
  }
  else if (playRound(playerSelection, computerSelection)=="Tie"){
      
      playerVictory += 1
      computerVictory += 1
  }
  else {
      playerVictory +=1
  };
  console.log('computer victories:'+computerVictory,'player victories:'+playerVictory)
  */