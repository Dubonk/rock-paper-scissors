let computerChoice = randomNum(1,3);
let computerSelection = computerPlay();
let c = computerSelection;
let playerScore = 0;
let computerScore = 0;
let draw = 'tie!';
function randomNum(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}
function computerPlay() {
    let i = computerChoice;
    if (i == 1) {
        return 'rock';
    }
    else if (i == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound() {
    let p = prompt('rock, paper, or scissors?').toLowerCase();
    let win = `You win! ${p} beats ${c}!`;
    let lose = `You lose... ${c} beats ${p}`;

    if ( p == 'rock' && c == 'scissors') {
        playerScore++; 
        return win; 
    }
    else if ( p == 'rock' && c == 'paper') {
        computerScore++;
        return lose;
    }
    else if ( p == 'paper' && c == 'rock') {
        playerScore++;
        return win;
    }
    else if (p == 'paper' && c == 'scissors') {
        computerScore++;
        return lose;
    }
    else if (p == 'scissors' && c == 'paper') {
        playerScore++;
        return win;
    }
    else if (p == 'scissors' && c == 'rock') {
        computerScore++;
        return lose;
    }
    else if (p === c) {
        return draw;
    }
    else {
        alert(`Oops! ${p} is not an option`);
    }
    
}
function endGame() {
    if (playerScore > 4) {
        console.log(`Game Over! You Win! Your score was ${playerScore}`);
    } else if (computerScore > 4) {
        console.log(`Game Over! You Lost... Your score was ${playerScore}`);
    }
}
function game() {
    playRound();
    for (let i = 0; playerScore > 4 || computerScore > 4; i++) {
    if (playerScore < 5 || computerScore < 5) {
    	game();
    }
    else if (playerScore > 4 || computerScore > 4) {
    	endGame();
    }}
}
game();
console.log(playRound())