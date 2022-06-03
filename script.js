// declaracion de variables
var palabras = ["ROBIN","JUSTICIA","BATMAN","CORRUPCION","BATICHICA","CRIMINALES","SUPERHEROE","ALFRED","BATICUEVA","ACERTIJO"];

var tablero = document.getElementById("horca").getContext("2d");

var letras = [];

var palabraCorrecta = "";

var errores = 9;

// funciones
function escojerPalabrasSecretas(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return 

} escojerPalabrasSecretas()

