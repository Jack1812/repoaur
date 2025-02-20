let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades! Adivinaste el numero secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no adivino el numero secreto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');