export function valida(input){
    let tipoInput = input.dataset.tipo; 

    
    if(input.validity.valid){
        input.parentElement.classList.remove("div-form--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("div-form--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoInput,input);

    }

};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"

];

const mensajesDeError = {
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email:{
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    asunto:{
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto no debe ser menor a 10 caracteres ni exceder los 150 caracteres",
    },
    mensaje:{
        valueMissing:"El campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje no debe ser menor a 10 caracteres ni exceder los 300 caracteres",
    },
};


function mostrarMensajeDeError(tipoInput,input){
    let mensaje = "";

    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            console.log(tipoInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoInput][error]);
            mensaje = mensajesDeError[tipoInput][error];
        }
        
    });
    return mensaje;

};

