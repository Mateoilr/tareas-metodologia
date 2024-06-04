'use strict';

//forma comun de declarar una funcion

function sum(a,b) {
    return a + b;
}

//forma de declarar una funcion como expresion(expresion de funcion)

let sumExp = function(a,b) {
    return a + b;
}

//forma de declarar una funcion como funcion flecha

let sumArrow = (a,b) => a + b;

//Llamar o invocar a las funciones 
let result = sum (2,3);
alert(result);


//utilizando una expresion de funcion crear un algoritmo que reciba el a;o de nacimiento y devuelva la edad

let age = function(year) {
    return 2024 - year;
}

