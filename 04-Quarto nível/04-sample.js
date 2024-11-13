async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status} ${resposta.statusText}`);
        }
        const personagem = await resposta.json();
        console.log("personagem.name: ", personagem.name);
    } catch (error) {
        console.log("error: ", error)
    }
}

const lukeId = 1;
buscarPersonagem(lukeId);
