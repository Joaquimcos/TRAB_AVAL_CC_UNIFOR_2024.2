async function buscarPessoas(url = 'https://swapi.dev/api/people/') {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
}

async function buscarTodasPessoas() {
    let url = 'https://swapi.dev/api/people/';
    let todasPessoas = [];

    while (url) {
        const dados = await buscarPessoas(url);
        todasPessoas = todasPessoas.concat(dados.results);
        url = dados.next; // URL da próxima página, se existir
    }

    return todasPessoas;
}

async function filtrarPessoasPorLetra(letra) {
    try {
        const todasPessoas = await buscarTodasPessoas();
        const pessoasComLetra = todasPessoas.filter(pessoa => pessoa.name.startsWith(letra));

        console.log(`Pessoas cujo nome começa com ${letra}:`);
        pessoasComLetra.forEach(pessoa => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas: ${todasPessoas.length}`);
    } catch (erro) {
        console.error('Erro ao buscar pessoas:', erro);
    }
}

filtrarPessoasPorLetra('L');
