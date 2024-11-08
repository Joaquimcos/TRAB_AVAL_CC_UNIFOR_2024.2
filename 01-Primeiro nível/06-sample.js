let nome = "Pedro";
let idade = 25;
let estaativo = true;

function dU(nome, idade, estaativo) {
    if (idade) {
        console.log(nome + " tem " + idade + " anos e está ativo.");
    } else {
        console.log(nome + " está inativo.");
    }
}

dU(nome, idade, estaativo);
