// declaracion de variables frecuentes
var palabras = ["ROBIN","JUSTICIA","BATMAN","CORRUPCION","BATICHICA","CRIMINALES","SUPERHEROE","ALFRED","BATICUEVA","ACERTIJO"];

var tablero = document.getElementById("horca").getContext("2d");

var letras = [];

var palabraCorrecta = "";

var errores = 9;

// funciones
// logica de ramdon palabra 
function escojerPalabrasSecretas(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabraSecreta
}



function dibujarLineas(){
    // caracteristicas y color de la linea q se va a dibujar bajo las letras de la palabra secreta
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#FF0000"
    tablero.beginPath()

    // logica para dibujar
    var ancho=600/palabraSecreta.length
    for(let i = 0; i < palabraSecreta.length ; i++){
        tablero.moveTo(500+(ancho*i),640)
        tablero.lineTo(550+(ancho*i),640)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(escojerPalabrasSecretas())

// escribir las letras correctas de arriba
function escribirLetraCorrecta(index){
    tablero.font = "bold 52px arial"
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#FF0000"

    var ancho=600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505+(ancho*index),620)
}

// letras incorrectas de abajo
function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px arial"
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#FF0000"

    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710,40)
}

// verificacion de lo q se clickea. la variable letras q se usa aca, es la q se define al inicio
function verificarLetraClicada(key){
    if (letras.length<1 || letras.indexOf(key)<0)
    {
        letras.push(key)
        return false
    }
    else{
        letras.push(key)
    return true
    }
}

//  agregar letra correctas al canvas
function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}

// agregar letras incorrectas al canvas.La variable errores esta definida al inicio
function adicionarLetrasIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores-=1
    }
}

// logica para añadir o no la letra clickeada
document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if(!verificarLetraClicada(e.key)){
        if(palabraSecreta.includes(letra)){
        console.log(letra)
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for (let i=0;i<palabraSecreta.length;i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i)
                }
            }
        }
        else{
            if(!verificarLetraClicada(e.key)) return
            adicionarLetrasIncorrecta(letra)
            escribirLetraIncorrecta(letra,errores)
        }
    }
}