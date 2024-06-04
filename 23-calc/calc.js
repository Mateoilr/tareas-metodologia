'use strict'

//funcion suma

let suma = function(a,b) {
    suma= a + b;
    alert("El resultado de la suma es: " + suma);
}

let resta = (a,b) => a - b;

function calc(op, fnSum, fnRest){
   let number1 = parseFloat(prompt('Ingrese el primer numero:'))
   let number2 = parseFloat(prompt('Ingrese el segundo numero:'))

    if(op === 1){
        fnSum(number1,number2);
    }
    else{
        fnRest(number1,number2);
    }
   
}
   
//llamada de funcion 
calc ('suma', suma, resta)
