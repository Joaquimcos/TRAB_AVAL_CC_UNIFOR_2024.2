async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);

    try {
        const nave = await resposta.json();
        console.log(
            "nave.name: ", nave.name,
            "nave: ", nave
        );
    } catch (error) {
        console.log("error: ", error);
    }
}

const naveId = 10
buscarNave(10);
