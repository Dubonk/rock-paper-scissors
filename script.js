let computerChoice = randomNum(1,3);
let player = prompt('rock, paper, or scissors?');
let playerSelection = player.toLowerCase();
let computerSelection = computerPlay();
let p = playerSelection;
let c = computerSelection;
let playerScore = 0;
let computerScore = 0;
let win = `You win! ${p} beats ${c}!`;
let lose = `You lose... ${c} beats ${p}`;
let draw = 'tie!';
function randomNum(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}
function computerPlay() {
    let i = computerChoice;
    if (i == 1) {
        return 'Rock';
    }
    else if (i == 2) {
        return 'Paper';
    }
    else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if ( p == 'rock' && c == 'Scissors') {
        playerScore++; 
        return win; 
    }
    else if ( p == 'rock' && c == 'Paper') {
        computerScore++;
        return lose;
    }
    else if ( p == 'rock' && c == 'Rock') {
        return draw;
    }
    else if ( p == 'paper' && c == 'Paper') {
        return draw;
    }
    else if ( p == 'paper' && c == 'Rock') {
        playerScore++;
        return win;
    }
    else if (p == 'paper' && c == 'Scissors') {
        computerScore++;
        return lose;
    }
    else if (p == 'scissors' && c == 'Scissors') {
        return draw;
    }
    else if (p == 'scissors' && c == 'Paper') {
        playerScore++;
        return win;
    }
    else if (p == 'scissors' && c == 'Rock') {
        computerScore++;
        return lose;
    }
    else {
        alert(`Oops! ${p} is not an option`)
    }
}
function game() {
    playRound(playerSelection, computerSelection);
    for (let i = 0; i > 5; i++) {
        //code here!
    }
}
console.log(playRound(playerSelection, computerSelection))