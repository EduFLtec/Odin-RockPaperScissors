//Generates the computer's play hand
function computerPlay () {
    let compRandom = function getRandomInt() {
        let rand = Math.floor((Math.random() * 3) + 1);
        return rand;
     };
     let compInput = compRandom();
    if (compInput == 1){
        compInput = "rock";
    } else if (compInput == 2)  {
        compInput = "paper";
    } else {
        compInput = "scissors";
    }
    return compInput;
}