//Haz tú validación en javascript acá

export function valida (input) {
    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    
    console.log(input)
    if(input.validity.valid){
        input.parentElement.classList.remove("input__container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input__container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }

}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch"

]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio (máx 50 caracteres)"
    },
    email:{
        valueMissing: "El campo  correo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacio",

    }

}

const validadores = {
    nombre: (input)  => validarNombre(input),
}


function mostrarMensajeDeError (tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error =>{
        if(input.validity[error]){
            console.log(error)
            console.log(input.validity[error])
            console.log(mensajesDeError[tipoDeInput][error])
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    } )
    return mensaje
}



const inputNombre = document.querySelector("#input_nombre")

inputNombre.addEventListener("blur", (evento) => {
    validarNombre(evento.target)
})

function validarNombre(input){
    const nombre = new Date (input.value) 
    let mensaje = "";
    input.setCustomValidity(mensaje)
}

