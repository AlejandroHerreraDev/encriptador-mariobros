

let campoTextoIngresado = document.querySelector(".campo1");
let campoMensaje = document.querySelector(".campo2");
let matrizCode =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function botonEncriptar() {
    let textoUsuario = encriptar(campoTextoIngresado.value);
    campoTextoIngresado.value = "";
    campoMensaje.value = textoUsuario;
    document.querySelector(".contenedor-muneco").remove();
    document.querySelector(".contenedor-boton-copiar").style.visibility = "visible";    
}

function encriptar(textoAlmacenado) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (textoAlmacenado.includes(matrizCode[i][0])) {
            textoAlmacenado = textoAlmacenado.replaceAll(matrizCode[i][0], matrizCode[i][1])
        }
    }
    return textoAlmacenado;
}

function botonDesencriptar() {
    let textoUsuario = desencriptar(campoTextoIngresado.value);
    campoTextoIngresado.value = "";
    campoMensaje.value = textoUsuario;
}

function desencriptar(textoAlmacenado) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (textoAlmacenado.includes(matrizCode[i][1])) {
            textoAlmacenado = textoAlmacenado.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }
    return textoAlmacenado;
}

function botonCopiar() {
    let textoCopiado = campoMensaje;
    textoCopiado.select();
    document.execCommand("copy");
    campoMensaje.value = "";
}