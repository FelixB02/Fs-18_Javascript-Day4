function print1() {
    document.getElementById("text1").innerHTML = "You are in the circle"
    document.getElementById("text2").innerHTML = "";
}

function print2() {
    document.getElementById("text2").innerHTML = "You are outside of the circle"
    document.getElementById("text1").innerHTML = "";
}

function changeColor() {
    document.getElementById("dot").style.background = "darkgrey"
}

function changeColor2() {
    document.getElementById("dot").style.background = "darkblue"
}

document.getElementById("dot").addEventListener("mouseover", print1)
document.getElementById("dot").addEventListener("mouseout", print2)
document.getElementById("dot").addEventListener("click", changeColor)
document.getElementById("dot").addEventListener("dblclick", changeColor2)