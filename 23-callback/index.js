'use strict'

//declaracion de funcion
function validateField(isVisible, show, hide){
    if(isVisible){
        show();
    }else{
        hide();
    }

}

//expresion de funcion

let showField = function(){
    alert("Campo Visible");
}

//funcion flecha

let hideField = () => alert ("Campo oculto")


validateField (false, showField, hideField);



//similar al codigo anterior hago uno que sea para la suma y resta de dos numeros


function suma(primernum,segundonum, callback){
    //suma de los dos numeros
    let resultado = primernum + segundonum;
    //alert del resultado
    alert("El resultado de la suma es: " + resultado);
    return callback(resultado);
}
function resta(primernum,segundonum, callback){
    //resta de los dos numeros
    let resultado = primernum - segundonum;
    //alert del resultado
    alert("El resultado de la resta es: " + resultado);
    return callback(resultado);
}

let showSuma = function(){
    alert("Suma Visible");
}
let showResta = function(){
    alert("Resta Visible");
}

let hideSuma = () => alert ("Suma oculto");





let hideResta = () => alert ("Resta oculto");
