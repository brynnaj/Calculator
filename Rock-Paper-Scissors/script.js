let userInput =''; 
let compInput = '';
let winner = document.getElementById("result")

  function playerChoice (choice) {
    userInput = choice
    computerChoice ();
    determineWinner();
    
}

 function computerChoice () {
    let randNum = Math.floor(Math.random()*3);
    switch (randNum){
        case 0: 
            compInput = 'rock';
            break;
        case 1:
            compInput = 'paper';
            break;
        case 2:
            compInput = 'scissors'
            break;
        default:
            break;
            
    }
    determineWinner();

}

 function determineWinner () {
    if (userInput === compInput) {
        winner.textContent = "TIE!";
    } else if (
        (userInput === 'rock' && compInput === 'scissors') ||
        (userInput === 'paper' && compInput === 'rock') ||
        (userInput === 'scissors' && compInput === 'paper')
    ){
        winner.textContent = 'YOU WIN!'
    } else {
        winner.textContent = 'YOU LOSE!';
    }
}
