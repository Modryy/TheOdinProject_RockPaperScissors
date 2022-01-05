function computerPlay(){
    let computerChoice = [
        "Rock",
        "Paper",
        "Scissors",
    ];

    let randomPick = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return(randomPick);
}


function playRound(playerSelection, computerSelection) {

    /* Rock part */
    if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!";
    }else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!"
    }else if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a draw! Fight again!"
    }

    /* Paper part */
    if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!"
    }else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!"
    }else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a draw! Fight again!"
    }

    /* Scissors part */
    if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a draw! Fight again!"
    }else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!"
    }else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beat Paper!"
    }
}

function game () {
    const computerSelection = computerPlay();
    const playerSelection = window.prompt("Rock, paper or Scissors?");
    console.log(playRound(playerSelection, computerSelection));
}

game();
