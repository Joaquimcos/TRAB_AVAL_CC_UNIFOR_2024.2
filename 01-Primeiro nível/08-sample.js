let pessoa = { nome: "Maria", idade: 28 };

function verificarMaioridade(pessoa) {
    return pessoa.idade >= 18;
}

console.log(`${pessoa.nome}` + " é maior de idade? " + verificarMaioridade(pessoa));
