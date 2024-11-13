async function buscarPlanetaRecursivo(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const planeta = await resposta.json();
        planeta.name !== undefined ? (
            console.log("planeta.name: ", planeta.name),
            id++,
            buscarPlanetaRecursivo(id))
            :
            console.log("Consulta completa");
    } catch (error) {
        console.log("error: ", error)
    }
}

let id = 1;
buscarPlanetaRecursivo(id);
