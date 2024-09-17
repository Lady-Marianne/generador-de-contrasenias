let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let password = document.getElementById("contrasenia");
let limpiar = document.getElementById("limpiar");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz0123456789@#$%&/.-_¡¿?!";

function generar() {

    let numeroDigitado = parseInt (cantidad.value);

    if (isNaN(numeroDigitado) || numeroDigitado < 6) {
        alert ("La contraseña debe tener un mínimo de 6 caracteres.");
        return;
    }

    let contrasenia = "";

    for(let i=0;i<numeroDigitado;i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        contrasenia += caracterAleatorio;
    }
    
    password.value = contrasenia;
    var mensajeFortaleza = document.getElementById("mensaje-fortaleza");

    if (numeroDigitado >= 6 && numeroDigitado <= 10) {
        mensajeFortaleza.textContent = "Contraseña débil";
        setTimeout(function() {mensajeFortaleza.textContent = "";}, 5000);
    }
     else if (numeroDigitado > 10 && numeroDigitado <=15) {
        mensajeFortaleza.textContent = "Contraseña fuerte";
        setTimeout(function() {mensajeFortaleza.textContent = "";}, 5000);
     }

    else {
        mensajeFortaleza.textContent = "Contraseña muy fuerte";
        setTimeout(function() {mensajeFortaleza.textContent = "";}, 5000);
    }
}

function limpiarCampos() {
    console.log("Función limpiarCampos() llamada");
    cantidad.value = NaN;
    password.value = "";
}

botonLimpiar.addEventListener("click", limpiarCampos);

