let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let password = document.getElementById("contrasenia");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz0123456789";

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
    }

