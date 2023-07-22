import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

console.log(inputs);

inputs.forEach(input =>{
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});


textareas.forEach(textarea =>{
    textarea.addEventListener('blur', (textarea) => {
        valida(textarea.target);
    });
});

