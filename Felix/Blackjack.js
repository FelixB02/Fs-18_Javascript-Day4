document.getElementById("btn").disabled = false;
let fname = document.getElementById("player1");
let lname = document.getElementById("player2");
let number1 = 0;
let number2 = 0;



function getValues() {
    lname_value = lname.value;
    document.getElementById("name2").innerHTML = lname_value;

    document.getElementById("score2").disabled = false;
    document.getElementById("stop").disabled = false;
    document.getElementById("btn").disabled = true;
}

deal2cards();


function deal2cards() {
    number1 += Math.floor(Math.random() * 19) + 3;
    document.getElementById("dice_1").innerHTML = `Dealer: ${number1}`
    if (number1 == 21) {
        document.getElementById("winner").innerHTML = `The dealer has won the game!`
    }
}


function randomNumber2() {
    number2 += Math.floor(Math.random() * 11) + 2;
    document.getElementById("dice_2").innerHTML = `${lname.value}: ${number2}`


    if (number2 > 21) {
        document.getElementById("score2").disabled = true;
        document.getElementById("winner").innerHTML = `${lname_value} has a Bust!`
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
        if (number1 > number2) {
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
    number1 = 0;
    number2 = 0;
    document.getElementById("reset").disabled = true;
    document.getElementById("score2").disabled = false;
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