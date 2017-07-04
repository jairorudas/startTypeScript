function somar(a:number, b:number):number {
    return a + b;
}

function Oi(nome:String):String {
    return `Olá ${nome}`
}

function salvarMundo():void {
    console.log('El mundo está salvo')
}


/**
 * Aqui espesificamos que nossa função não poderá mudar de tipo se não cumpre com esses requisitos
 * Nossa variavel chamada de minhafuncao só poderá receber funções que cumpram com essa inteface
 * Em outras palavras definimos regras de mutação para uma variavel.
 * EX:
 */

let minhafuncao: (x:number, y:number) => number

minhafuncao = somar;

//minhafuncao = 10 //Marca um erro pois não é possivel receber um numero, pelo que foi feito anteriormente.