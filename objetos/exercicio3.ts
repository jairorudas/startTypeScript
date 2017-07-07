
/**
 * Definido un tipo proprio, onde disparar é um metodo opcional a implementar.
 */
type Carro  = {
  carroceria:string, 
  modelo:String, 
  antibalas:boolean, 
  pasajeros:number, 
  disparar?:()=> void 
}

// Objetos
let batimovill:Carro = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebe:Carro = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Persoagens = {
  nombre:string,
  edad:number,
  mutante: boolean
}
// Villanos debe de ser un arreglo de objetos personalizados
let villanoss:Persoagens[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];


type Psiquico = {poder:string, estatura:number}
type Lider = {lider:boolean, miembros:string[] }
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
let charless:Psiquico | Lider = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsiss:Psiquico | Lider = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystiquee:Psiquico | Lider;

mystique = charles;
mystique = apocalipsis;