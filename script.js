let computerChoice = randomNum(1,3);
let computerSelection; // = computerPlay();
let c; //  = computerSelection;
let p;
let result;
let win; 
let lose; 
let playerScore = 0;
let computerScore = 0;
let draw;
function randomNum(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}
function computerPlay() {
    let n = randomNum(1, 3);

    if (n == 1) {
        return 'rock';
    }
    else if (n == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
function playerPlay() {
    p = prompt("Rock, Paper, or Scissors?").toLowerCase();
}
function playRound() {
    let c = computerPlay();
    playerPlay();
    win = `You win! ${p} beats ${c}!`;
    lose = `You lose... ${c} beats ${p}`;
    draw  = 'tie!';
    if ( p == 'rock' && c == 'scissors') { 
        result = win; 
        playerScore++;
        //console.log(win);
    }
    else if ( p == 'rock' && c == 'paper') {
        result = lose;
        computerScore++;
        //console.log(lose);
    }
    else if ( p == 'paper' && c == 'rock') {
        result = win;
        playerScore++;
       // console.log(win);
    }
    else if (p == 'paper' && c == 'scissors') {
        result = lose;
        computerScore++;
        //console.log(lose);
    }
    else if (p == 'scissors' && c == 'paper') {
        result = win;
        playerScore++;
        //console.log(win);

    }
    else if (p == 'scissors' && c == 'rock') {
        result = lose;
        computerScore++;
        //console.log(lose);
    }
    else if (p == c) {
        result = draw;
        //console.log(draw);
    }
    else {
        alert(`Oops! ${p} is not an option`);
    }
}
function game() {

    for (i = 1; i <= 5; i++) {
        computerPlay();
        playRound();
        console.log(`Round # ${i}`);
        console.log(result);
        if (i == 5) {
    if (playerScore > computerScore) {
        console.log(`You beat the computer ${playerScore} to ${computerScore}!`);
    }
    else if (playerScore < computerScore) {
        console.log(`The computer beat you ${computerScore} to ${playerScore}`);
    }  
    else if (playerScore == computerScore) {
        console.log(`It's a tie! ${playerScore} to ${computerScore}`)
    } 
    }} }
game()