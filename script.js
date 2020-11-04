//var botones
var reset = document.querySelector("#reset")
var hard = document.querySelector(".selected");
var easy = document.querySelector(".noSelected")

var n = 6;


//-------------Botones reseteo,selector

function reseteo() {
    colores = generateRandomColors(n);
    pickedColor = colores[pickColor()];
    document.querySelector("#message").textContent = "";
    textTitle.textContent = pickedColor;
    document.querySelector("h1").style.backgroundColor = "";
    nuevo();
}


//---reset
reset.addEventListener("click", function () {
    reseteo();
})

hard.addEventListener("click", function () {
    hard.classList = ("selected");
    n = 6;
    reseteo();
    for (var i = 3; i < cuadrado.length; i++) {
        cuadrado[i].style.display = "block";
    }
    if (easy.classList = "selected") {
        easy.classList = "noSelected";
    }

})

easy.addEventListener("click", function () {
    easy.classList = ("selected");
    n = 3;
    reseteo();
    for (var i = 3; i < cuadrado.length; i++) {
        cuadrado[i].style.display = "none";
    }
    if (hard.classList = "selected") {
        hard.classList = "noSelected";
    }
})





//-------------------------Cuadrados body---------------

var cuadrado = document.querySelectorAll(".square")
var colores = generateRandomColors(n);
var pickedColor = colores[pickColor()];
var textTitle = document.querySelector("#colorDisplay");
textTitle.textContent = pickedColor;

nuevo();

function nuevo() {
    document.querySelector("#reset").textContent = "NEW GAME";
    for (var i = 0; i < cuadrado.length; i++) {
        cuadrado[i].style.backgroundColor = colores[i];
        cuadrado[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor != pickedColor) {
                this.style.backgroundColor = "#232323";
                document.querySelector("#message").textContent = "TRY AGAIN";
            } else {
                document.querySelector("#message").textContent = "CORRECT!wey";
                document.querySelector("#reset").textContent = "PLAY AGAIN";
                document.querySelector("h1").style.backgroundColor = pickedColor;
                changeColor(pickedColor);
            }
        })
    }
}

//changeColor , Le asigna el color ganador al h1
function changeColor(color) {
    for (var i = 0; i < cuadrado.length; i++) {
        cuadrado[i].style.backgroundColor = color;
    }
}
//le asigna a picked color un numero random del arreglo colores
function pickColor() {
    var colorete = parseInt(Math.random() * n);
    return colorete
}

//crea un numero para el RGB
function randomColor() {
    var x1 = parseInt(Math.random() * 256);
    var x2 = parseInt(Math.random() * 256);
    var x3 = parseInt(Math.random() * 256);
    return "rgb(" + Number(x1) + ", " + Number(x2) + ", " + Number(x3) + ")";
}

function generateRandomColors(n) {
    var arreglo = new Array(n);
    for (var i = 0; i < arreglo.length; i++) {
        arreglo[i] = randomColor();
    }
    return arreglo
}