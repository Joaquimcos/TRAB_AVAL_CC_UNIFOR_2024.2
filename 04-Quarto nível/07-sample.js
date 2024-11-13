async function buscarEspecie(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/species/${id}/`);
        const especie = await resposta.json();
        console.log(
            "especie.average_lifespan.toUpperCase(): ", especie.average_lifespan.toUpperCase(),
            "especie: ", especie
        );
    } catch (error) {
        console.log("error: ", error);
    }
}

const id = 1;
buscarEspecie(id);
