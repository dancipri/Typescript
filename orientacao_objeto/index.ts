class Cumprimento{
    // atributos nome do atributp:tip
    nome:string;
    idade:number
    
    // metodo construtor
    constructor (_nome:string='',_idade:number=0){
        this.nome=_nome
        this.idade=_idade
    }
    
    // outro metodo
    
    mostrarNomeIdade (_idade:number,_nome:string){
        return(`A pessoa ${_nome} tem ${_idade} anos`)
        
        
    }
    
}
//  fim da definição da classe

//  invocando a  função e o resultado vai amrmazenar na variavel resposta
let resposta=new Cumprimento()
console.log(resposta.mostrarNomeIdade(56,"Silvia"))
