async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}`;
    try {
        const resposta = await fetch(url);
        const personagem = await resposta.json();
        console.log(
            "personagem.name: ", personagem.name,
            "personagem: ", personagem
        );
    } catch (error) {
        console.log("error: ", error);
    }
}

const id = 1
buscarPersonagem(id);
