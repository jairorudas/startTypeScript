class Avenger {
    public nome:string
    private apellido:string //
    protected idade:number //só as classes que instanciem essa classe aqui, conseguiram ver essa propiedade
    static ciudad:string = 'Cartagena'

    constructor(nome:string, ){
        this.nome = nome
    }

    idadee():number{
        return this.idade
    }

}

//Classe de exemplo para testar as funcionalidades das clases
class Cap extends Avenger{
    constructor(public apelido:string = 'Rudas'){
        super('Jairo Rudas')
        this.apelido = apelido
    }

    bucaNome(){
        return super.idadee()
    }

    ciudad():string{
        return Avenger.ciudad;
    }

}

abstract class Xmen{
    
}

let personagem = new Avenger('Jairo')


