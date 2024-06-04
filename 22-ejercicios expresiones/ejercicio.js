'use strict'

//utilizando una expresion de funcion crear un algoritmo que reciba el año de nacimiento y devuelva la edad
//explicar en un comentario como funciona

let age = function(year){
    return 2024 - year;
};
alert(age(1995));


//Crear una expresion de funcion que reciba un numero y muestre la tabla de multiplicar del numero ingresado


let tabla = function(numero){
    for(let i = 1; i <= 10; i++){
        alert(numero + " * " + i + " = " + (numero * i));
    }
}
tabla(5);


//crear una funcion flecha que convierta en unidades de temperatura Celcius a Fareneit 


let celciusToFarenheit = (celcius) => (celcius * 9/5) + 32;

alert(celciusToFarenheit(30));















