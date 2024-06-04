/*
Escribir una funcion que reciba como argumento la 
edad de una persona y devuelva true su mayor a 18 
y false si es menor en un promt ingrese la edad
*/


function esMayorDeEdad(edad){
    /*if(edad>=18){
        return true;
    }else{
        return false;
    }*/
return (edad>=18)
}

let edad= Number(prompt('ingresar su edad'));

alert(
    esMayorDeEdad(edad) ? 'Eres mayor de edad' : 'Eres menor de edad'
);



