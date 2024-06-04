'use strict'

//ahora nececito un contador que indique el intento en el que se adivina el numero

let premio = 7;

let num;

let contador = 0;

do{
    num = Number(prompt('Ingrese el numero'));
    contador++;
}while(num != premio);

alert('You win! Intentos: ' + contador); 

//ahora el usuario tiene 3 intentos y si no adivina, se le informa que ha perdido

let premio = 7;

let num;

let contador = 0;
do{
    num = Number(prompt('Ingrese el numero'));
    contador++;
}while(num != premio && contador < 3);
if(num == premio){
    alert('You win! Intentos: ' + contador);
}else{
    alert('You lose! Intentos: ' + contador);
}

