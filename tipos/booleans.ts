
//types Booleans.
let off:Boolean = false;
let on:Boolean = true;

//types strings
let primeiroNome = 'Jairo'
let nome:string = `${primeiroNome}`
let nomeCompleto:string = `${primeiroNome} Rudas`
let segundoNome:string = "Enrique"
let nomeEsposa = 'Patricia'

console.log();
console.log('-------------Tipos String--------------');
console.log(nomeCompleto, `<= tipo String`);
console.log('---------------------------------------');

//types Numbers
let edad:number = 30;
let edadEsposa:number = 33;
let edadHermano = 24;

//Types Arrays
let names:String[] = ['Jairo', 'David', 'Patricia'];
let nombres: Array<string> = ['Leris, Paola', 'Daniel', 'Juan Manuel']

console.log();
console.log('------------Tipos Arrays---------------');
console.log(nombres, `<= tipo Arrays`);
console.log('---------------------------------------');

//types Tuples
let datos: [String, String, Number]
datos = ['Bruno', 'de Araujo', 30];

//A tupla só aceitará extensão se for um tipo decladrado antes,
// quando a tupla foi declarada.
datos[4] = 'Estudante'; // é possivel

//Causara um erro
//datos[5] = false // Não é possivel.

console.log();
console.log('-------------tipo Tuples--------------');
console.log(datos[0].substr(1), `<= tipo tuples`); //runo
console.log('-------------------------------------');

//Enum
enum Color {red, green, white }
let c: Color = Color.red //<= Retono a posição da propiedade


console.log();
console.log('------------type Enum---------------');
console.log(c, `<= tipo enum`); // Imprime a posição
console.log(Color.green, `<= tipo enum`); //Retona a 

let color:String = Color[2] //isso deverá ser do tipo string
console.log(color, `<= tipo enum`) //imprime o tipo string
console.log('------------------------------------');

//Types any
//Pode ser reescrita.
let cosa:any = 'mesa'
cosa = 30
cosa = false

console.log();
console.log('------------tipo Any---------------');
console.log(cosa, 'tipo Any'); //<= tipo Any
console.log('------------------------------------');


//Types voids
//Funções que Não retonam nada
console.log();
console.log('------------tipo Void---------------');
function ciudad():void{
    console.log('Cartagena');
    
}

ciudad();
console.log('-------------------------------------');


//types null and undefined
console.log();
console.log('------------tipo Void---------------');
let vaso:String = `vidrio`;
vaso = undefined;
vaso = null;
console.log(vaso);
console.log('-------------------------------------')


//types nevers
function error(mensagem):never{
    throw(`${mensagem}`)
}

//error('Meu codigo nunca deve chegar nesta função. Pois é critico que isso aconteça')

//Aserões de tipos
/**
 * As aseções de tipos, podem ser utilizadas para tratar uma variavel de um tipo
 * que conhecemos. Ex
 * 
 * Normalmete é utilizado isso quando sabemos sempre o tipo de dado esperado.
 */

let bairros:any = 'los Calamares Engenho de dentro'

let bairro:number = (<string> bairros).length


/**
 * Descubrindo o this de um objeto em typeScript.
 */
console.log();
console.log('* Descubrindo o this de um objeto em typeScript.')
let estudiante:any = {
    name: 'jairo',
    apellido: this.name,
    getName: function():void{
        console.log(this.name)
    }
}
console.log(estudiante.apellido); //undefined
estudiante.getName() //jairo

console.log('---------------------------------------------------');


//let names:(string | number)[] = ['Jairo', 'David', 'Patricia', 12]
//console.log(names);




