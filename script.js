// declaracion de variables
var palabras = ["ROBIN","JUSTICIA","BATMAN","CORRUPCION","BATICHICA","CRIMINALES","SUPERHEROE","ALFRED","BATICUEVA","ACERTIJO"];

var tablero = document.getElementById("horca").getContext("2d");

var letras = [];

var palabraCorrecta = "";

var errores = 9;

// funciones
function escojerPalabrasSecretas(){
    var palabras = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabras
    console.log(palabras)
    return palabras
} escojerPalabrasSecretas()

