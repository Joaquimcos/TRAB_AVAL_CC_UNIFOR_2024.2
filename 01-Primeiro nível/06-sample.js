let nome = "Pedro";
let idade = 25;


function dU(nome, idade) {
    if (idade) {
        console.log(nome + " tem " + idade + " anos e está ativo.");
    } else {
        console.log(nome + " está inativo.");
    }
}

dU(nome, idade);
