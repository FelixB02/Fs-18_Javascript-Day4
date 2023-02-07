document.getElementById("btn").disabled = false;
let fname = document.getElementById("player1");
let lname = document.getElementById("player2");
let number1 = 0;
let number2 = 0;

deal2cards();


function getValues() {
    lname_value = lname.value;
    document.getElementById("name2").innerHTML = lname_value;

    document.getElementById("score2").disabled = false;
    document.getElementById("stop").disabled = false;
    document.getElementById("btn").disabled = true;
}


function deal2cards() {
    number1 += Math.floor(Math.random() * 19) + 3;
    document.getElementById("dice_1").innerHTML = `Dealer: ${number1}`
    if (number1 == 21) {
        document.getElementById("winner").innerHTML = `The dealer has a blackjack!`
        document.getElementById("reset").disabled = false;
        document.getElementById("score2").disabled = true;
        document.getElementById("stop").disabled = true;
    }
}


function randomNumber2() {
    number2 += Math.floor(Math.random() * 11) + 2;
    document.getElementById("dice_2").innerHTML = `${lname.value}: ${number2}`
    if (number2 == 21) {
        document.getElementById("winner").innerHTML = `${lname_value} has a blackjack!`
        document.getElementById("reset").disabled = false;
        document.getElementById("score2").disabled = true;
        document.getElementById("stop").disabled = true;
    }
    if (number2 > 21) {
        document.getElementById("score2").disabled = true;
        document.getElementById("winner").innerHTML = `${lname_value} busts!`
        document.getElementById("reset").disabled = false;
    }

}


function stop() {
    document.getElementById("reset").disabled = false;
    document.getElementById("score2").disabled = true;
    while (number1 <= 17) {
        number1 += Math.floor(Math.random() * 11) + 1;
        document.getElementById("dice_1").innerHTML = `Dealer: ${number1}`
    }
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


function reloadsite() {
    location.reload();
}



document.getElementById("score2").addEventListener("click", randomNumber2)
document.getElementById("reset").addEventListener("click", playAgain)
document.getElementById("btn").addEventListener("click", getValues);
document.getElementById("sitereload").addEventListener("click", reloadsite)
document.getElementById("stop").addEventListener("click", stop)