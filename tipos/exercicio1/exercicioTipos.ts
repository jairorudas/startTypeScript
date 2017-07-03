// Tipos
let batman:String = "Bruce";
let superman:String = "Clark";

let existe:Boolean = false;

// Tuplas
let parejaHeroes:[String, String] = [batman,superman];
let villano:[String, Number, Boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:String[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza {
  fuerzaAcuaman = 0,
  fuerzaBatman = 1,
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
}

let nombre:any = Fuerza.fuerzaAcuaman
console.log(nombre, '<= acuaman');

/**
 * Podemos definir da seguinte forma também.
 */

enum Fuerzas  {
  acuaman = 0,
  batman = 1,
  flash = 5,
  superman = 100
}

let fuerzaAcuaman = Fuerzas.acuaman;
let fuerzaBatman = Fuerzas.batman;
let fuerzaFlash = Fuerzas.flash;
let fuerzaSuperman = Fuerzas.superman;



// Retorno de funciones
function actilet_batiseñal():String{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:String = "100";
let largoDelPoder:number = (<String>poder).length;
console.log( largoDelPoder );


