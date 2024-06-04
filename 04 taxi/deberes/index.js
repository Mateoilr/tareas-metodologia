'use strict';
/*Escribe un programa que solicite al usuario ingresar su edad y luego 
imprima "Eres mayor de edad" si la edad ingresada es igual o mayor a 18, 
de lo contrario imprime "Eres menor de edad"*/

let edad = prompt('Ingrese su edad');

if (edad >= 18) {
    alert('Eres mayor de edad');
} else {
    alert('Eres menor de edad');
}


'use strict';
/*Crea un programa que pida al usuario ingresar dos números y 
luego determine e imprima cuál de los dos números es mayor.*/
let num1 = prompt('Ingrese un numero');
let num2 = prompt('Ingrese otro numero');

if (num1 > num2) {
    alert('El numero mayor es: ' + num1);
} else {
    alert('El numero mayor es: ' + num2);
}


'use strict';
/*Desarrolla un programa que pida al usuario ingresar un número y determine si es par o impar. 
Imprime el resultado correspondiente.*/
let num = prompt('Ingrese un numero');

if (num % 2 == 0) {
    alert('El numero es par');
} else {
    alert('El numero es impar');
}


'use strict';
/*crea un programa que pida al usuario ingresar un número y 
determine si es divisible por 5. Imprime "Es divisible por 5" o "No es divisible por 5" según corresponda.*/
let numero = prompt('Ingrese un numero');

if (num % 5 == 0) {
    alert('Es divisible por 5');
} else  {
    alert('No es divisible por 5');
}   