let pessoa = { nome: "Maria", idade: 28 };

function verificarMaioridade(pessoa) {
    const maiorIdade = 18;
    return pessoa.idade >= maiorIdade;
}

console.log(`${pessoa.nome}` + " é maior de idade? " + verificarMaioridade(pessoa));
