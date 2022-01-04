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

    if (playerSelection.toUpperCase("rock") & computerSelection("scissors")) {
        return("Congrats! You win!");
    } else if (playerSelection.toUpperCase("paper") & computerSelection("rock")) {
        return("Congrats! You win!")
    } else if (playerSelection.toUpperCase("scissors") & computerSelection("paper")) {
        return("Congrats! You win!")
    } else {
        return("Shit, you lose!")
    }
}
const computerSelection = computerPlay();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));