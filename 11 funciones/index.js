'use strict'

//1.declarando la funcion
function mostrarMensaje(){
    alert('Hola Mundo')
}
//2.invocando o llamar a la funcion
//mostrarMensaje()

function mostrarMensajeconNombre(nombre){
    alert('Hola '+nombre)
}
//mostrarMensajeconNombre('Juan')//juan es el argunmento


function generarFrase(){
    return 'Hola Mundo';
}

alert(generarFrase())

//3.declarando la funcion con parametros

function sumar(a,b){
    let resultado a+b;
    return a+b;
}
alert(sumar(5,3))


//4.declarando la funcion con parametros por defecto
function saludar(nombre='Mundo'){
    alert('Hola '+nombre)
}





function generarFrase (){
    return 'Hola Mundo';

}

let result;
result = generarFrase();
alert('el valor de retorno de la funcion es: ')


function sum(primervalor, segundovalor){

    let result=primervalor+segundovalor;
    return result;

}

let resultado = sum(3,6)







