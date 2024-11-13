async function buscarPersonagemENave(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`https://swapi.dev/api/people/${idPersonagem}/`);
        
        if (!respostaPersonagem.ok) {
            throw new Error(`Erro ao buscar personagem: ${respostaPersonagem.status} ${respostaPersonagem.statusText}`);
        }

        const personagem = await respostaPersonagem.json();

        if (personagem.starships && personagem.starships.length > 0) {
            console.log(`Naves de ${personagem.name}:`);

            for (const naveURL of personagem.starships) {
                const respostaNave = await fetch(naveURL);
                
                if (!respostaNave.ok) {
                    console.error(`Erro ao buscar nave: ${respostaNave.status} ${respostaNave.statusText}`);
                    continue;
                }

                const nave = await respostaNave.json();

                const tripulacao = parseInt(nave.crew, 10);
                if (isNaN(tripulacao)) {
                    console.log(`A nave ${nave.name} possui uma tripulação não especificada.`);
                } else if (tripulacao > 100) {
                    console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
                } else {
                    console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
                }
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }
        
    } catch (erro) {
        console.error('Erro ao buscar o personagem ou suas naves:', erro.message);
    }
}

buscarPersonagemENave(1);

