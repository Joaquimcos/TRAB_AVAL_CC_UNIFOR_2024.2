async function buscarDados(dados) {
    try {
        const personagem = JSON.parse(dados);
        console.log("personagem.name: ", personagem.name, "; personagem.idade: ", personagem.idade);
    } catch (error) {
        console.log("erro: ", erro);
    }
}

const dados = '{ "name": "Luke", "idade": 23 }';
buscarDados(dados);
