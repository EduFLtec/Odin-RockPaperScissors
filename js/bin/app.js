//UI variables
const playerBtnChoice = document.querySelectorAll(".playerBtn"),
    playerScore = document.querySelector("#player-score"),
    computerScore = document.querySelector("#cpu-score"),
    tieScore = document.querySelector("#tie-score"),
    playBtnLabel = document.querySelector("#play-btn-label"),
    playBtn = document.querySelector("#start-play");


//Game variables
let computerSelection = '';
let playerSelection = '';
let playerWin = 0,
    computerWin = 0,
    tie = 0,
    round = 0,
    gameOver = false;


//Player makes a choice
playerBtnChoice.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id');
        // Player's choice iniates the round
        playRound();
    });
});

function playRound () {
    computerSelection = playComputer();
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
    showRoundResults(playerSelection, computerSelection);
    isGameOver();
}


//Determine round winner
function showRoundResults(playerSelection, computerSelection) {
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
   
}

//Check call game after five rounds
function isGameOver() {
if (playerWin + computerWin + tie === 5){
        gameOver = true;
     };
    if (gameOver === true) {
        //Compare and tally round results. Declare an overall game winner. 
        //End game and make page refresh available
        function getGameResults() {
            if (playerWin > computerWin) {
                console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU are the CHAMPION!!!`);
            } else if (computerWin > playerWin) {
                console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU LOSE!!!`);
            } else {
                console.log(`You won ${playerWin}x and the computer won ${computerWin}x. It's a TIE!!!`);
            }
        }
        getGameResults();
        playBtnLabel.textContent = "Replay?";
        playBtn.textContent = "replay";
        playBtn.id = "replay";
    };
}



