// Funciones Básicas
function sumar( a, b ):number{
  return a + b;
}

var contar = function( heroes:String[] ):number{
  return heroes.length;
}
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar='Batman' ){
  if( !!llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes(...personas:string[] ){
  return personas.join(", ");
}

unirheroes("Flash", "Arrow", "Superman", "Linterna Verde");


// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ):void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
