'use strict';

let carrera = prompt('la carrera es nocturna o diurna?');

let totalkms = prompt('Ingrese el km');

let precioPorKm = 0.29;

let arranque = 0.55;

let valornocturno = 1.75;

let valordia = 1.50;

let valor = (totalkms * precioPorKm) + arranque;

if(valor < 1.50)
{
    valor = 1.50;
}

    alert('El valor a pagar es: ' + valor);






