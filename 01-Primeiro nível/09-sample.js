class Gestor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
 exibirInformacao(){
    return `Nome do Gestor: ${this.nome} 
Idade: ${this.idade}` 
    }

}

 let pessoa = new Gestor("Lucas", 40);
 console.log(pessoa.exibirInformacao());
    

