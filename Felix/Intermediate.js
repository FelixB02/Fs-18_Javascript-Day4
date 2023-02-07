let collection = document.getElementsByClassName("img");
let visi = "visible"

for (let col of collection) {
    console.log(col)
    col.addEventListener("click", dissapear)
}

function dissapear() {

    console.log(this)
    if (visi == "hidden") {
        this.style.opacity = 1
        visi = "visible"
    } else {
        this.style.opacity = 0
        visi = "hidden"
    }
}


function changecolor() {
    let color = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.background = "#" + color
}
let color = Math.floor(Math.random() * 16777215).toString(16)
console.log(color)

document.getElementById("btn").addEventListener("click", changecolor);