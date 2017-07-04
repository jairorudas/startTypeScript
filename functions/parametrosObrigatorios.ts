/**
 * Estes parametros são obrigatorios
 * @param nome deve ser uma string
 * @param sobrenome deve ser uma sting
 */

function nomesCompletos (nome:String, sobrenome:String):String{
    return `Hola! ${nome} ${sobrenome}`
}

let retorno = nomesCompletos('Jairo', 'Rudas')

console.log(retorno);

/**
 * Parametros opcionais
 * @param params 
 */
function profession(params?:String):void {
    switch (params) {
        case undefined || null:
            console.log('Olá convidado')
            break;

        default:
            console.log(`Olá ${params}!!!`)
            break;
    }
}

profession('Jairo')


/**
 * 
 * @param nome 
 * @param sobrenome 
 * @param capitalize 
 */
function capitalizar(nome:string = 'Pedro', sobrenome:String = 'alves', capitalize:Boolean = true ): void{
    
    switch (capitalize) {
        case true:
            console.log(`${nome.charAt(0).toUpperCase()}${nome.substr(1)} ${sobrenome.charAt(0).toUpperCase()}${sobrenome.substr(1)}`)
            break;
    
        default:
            console.log(nome, sobrenome)
            break;
    }

    console.log()
}

capitalizar('jairo', 'rudas', false)


/**
 * 
 * @param nome O primeiro parametro desses parmetros convertidos em array deverá ser uma string.
 * @param dados O restante dos parametros passados foram convertidos para um array.
 */

function dados(nome:string, ...dados):void{
    console.log(`${nome} ${dados.join(' ')} `)
}

dados('Clark', 'joseph', 'kent')