function game() {
    //Round result varriables
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;
    //Play the game for five rounds
    for (let i = 0; i < 5; i++) {
        janken(i);

        function janken() {
            //Selction result variables 
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
                function playRound() {
                    if (playerSelection == 'rock' && computerSelection == 'rock') {
                        tie++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
                    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                        computerWin++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
                    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                        playerWin++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
                    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                        playerWin++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
                    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
                        tie++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
                    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                        computerWin++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
                    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                        computerWin++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
                    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                        playerWin++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
                    } else {
                        tie++
                        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
                    }
                }
            //Print the results of each round
            return playRound();
        }
    }
    //Compare and tally round results. Declare an overall game winner. 
    function gameResults() {
        if (playerWin > computerWin){
            console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU are the CHAMPION!!!`);
        } else if (computerWin > playerWin) {
            console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU LOSE!!!`);
        } else {
            console.log(`You won ${playerWin}x and the computer won ${computerWin}x. It's a TIE!!!`);
        }
    }
    return gameResults();
}