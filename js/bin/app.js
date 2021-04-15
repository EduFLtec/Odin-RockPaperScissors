//UI variables
const startCard = document.querySelector('#start-rules'),
    tieCard = document.querySelector('#round-tie'),
    winCard = document.querySelector('#round-won'),
    lossCard = document.querySelector('#round-lost'),
    choiceCard = document.querySelector('#choice'),
    cancelBtn = document.querySelector('#cancelBtn'),
    playerBtnChoice = document.querySelectorAll('.playerBtn'),
    playerScore = document.querySelector('#player-score'),
    computerScore = document.querySelector('#cpu-score'),
    tieScore = document.querySelector('#tie-score'),
    playBtnLabel = document.querySelector('#play-btn-label'),
    tieRoundResult = document.querySelector('#tie-result'),
    winRoundResult = document.querySelector('#win-result'),
    lossRoundResult = document.querySelector('#loss-result'),
    playBtn = document.querySelector('#start-play'),
    gameOverWin = document.querySelector('#game-won'),
    gameOverLoss = document.querySelector('#game-lost'),
    gameOverTie = document.querySelector('#game-tied');
    

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
        round++
        playerSelection = button.getAttribute('id');
        //Player's choice iniates the round
        playRound();
        //Re-hide Choice Card
        choiceCard.removeAttribute('style');
    });
});

//Hide choice card
cancelBtn.addEventListener('click',() =>{
    choiceCard.removeAttribute('style');
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
            compInput = 'rock';
        } else if (compInput == 2) {
            compInput = 'paper';
        } else {
            compInput = 'scissors';
        }
        return compInput;
    }
    showRoundResults(playerSelection, computerSelection);
    isGameOver();
}


//Determine round winner and display round results
function showRoundResults(playerSelection, computerSelection) {
    startCard.style.display = 'none';
    winCard.style.display = 'none';
    lossCard.style.display = 'none';
    tieCard.style.display = 'none';
    if ((playerSelection == 'rock' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'scissors')) {
        tie++
        tieScore.textContent = `Ties: ${tie}`;
        tieCard.style.display = 'block';
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`);
        tieRoundResult.textContent = `You threw ${playerSelection} and the computer threw ${computerSelection}. It's a tie round!`;
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||(playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerWin++
        playerScore.textContent = `Player: ${playerWin}`;
        winCard.style.display = 'block';
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`);
        winRoundResult.textContent = `You threw ${playerSelection} and the computer threw ${computerSelection}. You win this round!`;
    } else {
        computerWin++
        computerScore.textContent = `Computer: ${computerWin}`;
        lossCard.style.display = 'block';
        console.log(`You threw ${playerSelection} and the computer threw ${computerSelection}. Computer wins this round!`);
        lossRoundResult.textContent = `You threw ${playerSelection} and the computer threw ${computerSelection}. You lose this round!`;
    }
//Change the instructions after the first round
    if (playerWin + computerWin + tie === 1){
        playBtn.style.display = 'none';
        //add a class list to shrink text
        playBtnLabel.classList.add('next-round');
        playBtnLabel.textContent = "Tap above for next round";
    }

//Disable round play after five round game
    if (playerWin + computerWin + tie === 5){
        winCard.classList.remove('activator');
        lossCard.classList.remove('activator');
        tieCard.classList.remove('activator');
        // remove text list shrink playBtn label game over
        playBtnLabel.classList.remove('next-round');
        isGameOver();
     };
}

//End game. Clear round result screen after 10 seconds. Display game results. Make page refresh available.
function isGameOver() {
    setTimeout(() => {
        if (playerWin + computerWin + tie === 5) {
            gameOver = true;
        };
        if (gameOver === true) {
            winCard.style.display = 'none';
            lossCard.style.display = 'none';
            tieCard.style.display = 'none';
            function getGameResults() {
                if (playerWin > computerWin) {
                    gameOverWin.style.display = 'block';
                    console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU are the CHAMPION!!!`);
                } else if (computerWin > playerWin) {
                    gameOverLoss.style.display = 'block';
                    console.log(`You won ${playerWin}x and the computer won ${computerWin}x. YOU LOSE!!!`);
                } else {
                    gameOverTie.style.display = 'block';
                    console.log(`You won ${playerWin}x and the computer won ${computerWin}x. It's a TIE!!!`);
                }
            }
            getGameResults();
            //Change play menu to replay option
            playBtnLabel.textContent = "Replay?";
            playBtn.style.display = 'inline-block';
            playBtn.textContent = 'replay';
        };
        //Event listener to replay and reload page
        playBtn.addEventListener('click', function(e){
              window.location.reload();
          });

    }, 6000);
}

