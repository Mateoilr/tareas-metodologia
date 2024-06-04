/*
Escribir una funcion que multiplique dos
numeros y devuelva el resultado.
N; usar solo la operacion +
*/

function multiplicar(a,b){ 
    let resultado=0;
    for(let i=0;i<b;i++){
        resultado+=a;
    }
    return resultado;
}

//a continuacion explicar como funciona todo
// y como se puede mejorar

//la funcion multiplicar recibe dos parametros a y b
// y declara una variable resultado con valor 0
// luego entra a un ciclo for que se ejecuta b veces
// en cada iteracion se suma a a resultado
// finalmente se retorna resultado


