// Declaring starting Variables

document.getElementById("btn").disabled = false;
let fname = document.getElementById("player1");
let lname = document.getElementById("player2");
let number1 = 0;
let number2 = 0;

// Calling the dealers starting function
deal2cards();

// get the Value out of the input field
function getValues() {
    lname_value = lname.value;
    document.getElementById("name2").innerHTML = lname_value;

    document.getElementById("score2").disabled = false;
    document.getElementById("stop").disabled = false;
    document.getElementById("btn").disabled = true;
}

// Dealing 2 starting Cards to the dealer
function deal2cards() {
    number1 += Math.floor(Math.random() * 19) + 3;
    document.getElementById("dice_1").innerHTML = `Dealer: ${number1}`
        // Checking if the dealer has a blackjack
    if (number1 == 21) {
        document.getElementById("winner").innerHTML = `The dealer has a blackjack!`
        document.getElementById("reset").disabled = false;
        document.getElementById("score2").disabled = true;
        document.getElementById("stop").disabled = true;
    }
}

// Dealing the Cards to the Player
function randomNumber2() {
    number2 += Math.floor(Math.random() * 11) + 2;
    document.getElementById("dice_2").innerHTML = `${lname.value}: ${number2}`
        // Checking if the player has a blackjack
    if (number2 == 21) {
        document.getElementById("winner").innerHTML = `${lname_value} has a blackjack!`
        document.getElementById("reset").disabled = false;
        document.getElementById("score2").disabled = true;
        document.getElementById("stop").disabled = true;
    }
    // Checking if the score is bigger than the 21 max score
    if (number2 > 21) {
        document.getElementById("score2").disabled = true;
        document.getElementById("winner").innerHTML = `${lname_value} busts!`
        document.getElementById("reset").disabled = false;
    }

}

// Dealing the other cards to dealer after player stays
function stop() {
    document.getElementById("reset").disabled = false;
    document.getElementById("score2").disabled = true;
    while (number1 <= 17) {
        number1 += Math.floor(Math.random() * 11) + 1;
        document.getElementById("dice_1").innerHTML = `Dealer: ${number1}`
    }
    // Getting the results and comparing them to declare the winner
    if (number1 > 21) {
        document.getElementById("winner").innerHTML = `The dealer busts`
    } else {
        if (number1 == 21) {
            document.getElementById("winner").innerHTML = "The dealer has a blackjack!"
        } else if (number2 == 21) {
            document.getElementById("winner").innerHTML = `${lname.value} has a blackjack!`
        } else if (number1 > number2) {
            document.getElementById("winner").innerHTML = `The dealer has won the game!`
        } else if (number1 == number2) {
            document.getElementById("winner").innerHTML = "Its a draw!"
        } else {
            document.getElementById("winner").innerHTML = `${lname.value} has won the game!`
        }
    }
}

// Playing again
function playAgain() {
    document.getElementById("dice_1").innerHTML = "";
    document.getElementById("dice_2").innerHTML = "";
    document.getElementById("winner").innerHTML = "No winner has been declared!";
    number1 = 0;
    number2 = 0;
    document.getElementById("reset").disabled = true;
    document.getElementById("score2").disabled = false;
    document.getElementById("stop").disabled = false;
    deal2cards();


}

// Reloading site to clear all the variables
function reloadsite() {
    location.reload();
}


// Buttons which are calling the different functions
document.getElementById("score2").addEventListener("click", randomNumber2)
document.getElementById("reset").addEventListener("click", playAgain)
document.getElementById("btn").addEventListener("click", getValues);
document.getElementById("sitereload").addEventListener("click", reloadsite)
document.getElementById("stop").addEventListener("click", stop)