function game() {
    //Selction variables 
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();

    //Prompt, validate, and store user's play hand
    function playerPlay() {
        let playerInput = prompt("Please chose between 'rock', 'paper' or 'scissors'");
        if (playerInput.toLowerCase() !== 'rock' && playerInput.toLowerCase() !== 'scissors' && playerInput.toLowerCase() !== 'paper') {
            return playerPlay();
        } else {
            return playerInput.toLowerCase();
        }
    };

    //Generates the computer's selection
    function computerPlay() {
        let compRandom = function getRandomInt() {
            let rand = Math.floor((Math.random() * 3) + 1);
            return rand;
        };
        let compInput = compRandom();
        if (compInput == 1) {
            compInput = "rock";
        } else if (compInput == 2) {
            compInput = "paper";
        } else {
            compInput = "scissors";
        }
        return compInput;
    }

    //Determine the winner
    console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}`);
}