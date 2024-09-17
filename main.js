let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz0123456789";

function generar() {

    let numeroDigitado = parseInt (cantidad.value);

    if (isNan(numeroDigitado) || numeroDigitado < 6) {
        alert ("La contraseña debe tener un mínimo de 6 caracteres.");
        return;
        }

    let contrasenia = "";
    for(let i=0;i<numeroDigitado;i++) {
        let caracterAleatorio = Math.floor(Math.random() * cadenaCaracteres.length);
        contrasenia += cadenaCaracteres[caracterAleatorio];
        }
        document.getElementById("contrasena").value = contrasenia;

    }

boton.onclick = generar;

