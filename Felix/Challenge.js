document.getElementById("btn").disabled = false;
let fname = document.getElementById("player1");
let lname = document.getElementById("player2");


let number1 = 0;
let number2 = 0;


function getValues() {
    fname_value = fname.value;
    lname_value = lname.value;
    document.getElementById("name1").innerHTML = fname_value;
    document.getElementById("name2").innerHTML = lname_value;

    document.getElementById("score1").disabled = false;
    document.getElementById("btn").disabled = true;
}


function randomNumber1() {
    number1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice_1").innerHTML = `${fname.value} got the value ${number1}`
    document.getElementById("score1").disabled = true;
    document.getElementById("score2").disabled = false;


}


function randomNumber2() {
    document.getElementById("score2").disabled = true;
    document.getElementById("reset").disabled = false;

    number2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice_2").innerHTML = `${lname.value} got the value ${number2}`
    if (number1 > number2) {
        document.getElementById("winner").innerHTML = `${fname.value} has won the game!`
    } else if (number1 == number2) {
        document.getElementById("winner").innerHTML = "Its a draw!"
    } else {
        document.getElementById("winner").innerHTML = `${lname.value} has won the game!`
    }
}


function playAgain() {
    document.getElementById("dice_1").innerHTML = "";
    document.getElementById("dice_2").innerHTML = "";
    number1 = 0;
    number2 = 0;
    document.getElementById("score1").disabled = false;
    document.getElementById("reset").disabled = true;

}

function reloadsite() {
    location.reload();
}


document.getElementById("score1").addEventListener("click", randomNumber1)
document.getElementById("score2").addEventListener("click", randomNumber2)
document.getElementById("reset").addEventListener("click", playAgain)
document.getElementById("btn").addEventListener("click", getValues);
document.getElementById("sitereload").addEventListener("click", reloadsite)