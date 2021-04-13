//UI variables
const playBtn = document.querySelector("#start-play"),
    playerBtnChoice = document.querySelectorAll(".playerBtn")
    playerScore = document.querySelector("#player-score"),
    computerScore = document.querySelector("#cpu-score"),
    tieScore = document.querySelector("#tie-score");


//Game variables
let playerWin = 0,
    computerWin = 0,
    tie = 0,
    gameOver = false;



playBtn.addEventListener('click', function () {
    //Selction result variables 
    const computerSelection = playComputer();
    const playerSelection = playPlayer();

    //Get player input
    //Prompt, validate, and store user's play hand
    function playPlayer() {
        array.forEach(element => {
            
        });
        
        playerInput = prompt("Please chose between 'rock', 'paper' or 'scissors'");
        if (playerInput.toLowerCase() !== 'rock' && playerInput.toLowerCase() !== 'scissors' && playerInput.toLowerCase() !== 'paper') {
            return playPlayer();
        } else {
            return playerInput.toLowerCase();
        }
    };

    //Generates the computer's selection
    function playComputer() {
        let getCompRandom = function getRandomInt() {
            let rand = Math.floor((Math.random() * 3) + 1);
            return rand;
        };
        let compInput = getCompRandom();
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
    function showRoundResults() {
        if (playerSelection == 'rock' && computerSelection == 'rock') {
            tie++
            tieScore.textContent = `Ties: ${tie}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerWin++
            computerScore.textContent = `Computer: ${computerWin}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerWin++
            playerScore.textContent = `Player: ${playerWin}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerWin++
            playerScore.textContent = `Player: ${playerWin}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            tie++
            tieScore.textContent = `Ties: ${tie}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerWin++
            computerScore.textContent = `Computer: ${computerWin}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerWin++
            computerScore.textContent = `Computer: ${computerWin}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerWin++
            playerScore.textContent = `Player: ${playerWin}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
        } else {
            tie++
            tieScore.textContent = `Ties: ${tie}`;
            console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
        }
        if (playerWin + computerWin + tie === 5)
            gameOver = true;
        if (gameOver === true) {
            //Compare and tally round results. Declare an overall game winner. 
            function getGameResults() {
                if (playerWin > computerWin) {
                    console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU are the CHAMPION!!!`);
                } else if (computerWin > playerWin) {
                    console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU LOSE!!!`);
                } else {
                    console.log(`You won ${playerWin}x and the computer won ${computerWin}x. It's a TIE!!!`);
                }
            }
            return getGameResults();
        };
    }
    //Print the results of each round
    return showRoundResults();

});

