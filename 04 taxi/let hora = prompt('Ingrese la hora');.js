let hora = prompt('Ingrese la hora');

if(hora >= 20 && hora <= 24)
{
    alert('La tarifa nocturna es de 0.50');
}

if(hora >= 0 && hora <= 5)  
{
    alert('La tarifa nocturna es de 0.50');
}

if(hora >= 6 && hora <= 19)
{
    alert('La tarifa nocturna es de 0.25');
}