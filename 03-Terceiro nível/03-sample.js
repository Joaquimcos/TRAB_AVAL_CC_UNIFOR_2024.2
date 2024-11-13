async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${idPlaneta}/`);
        
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar planeta: ${resposta.status} ${resposta.statusText}`);
        }

        const planeta = await resposta.json();

        const { name, climate, population } = planeta;
        const detalhesPlaneta = `
            Nome: ${name ?? "Desconhecido"}
            Clima: ${climate ?? "Desconhecido"}
            População: ${population ?? "Desconhecida"}
        `;

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacao = parseInt(population, 10);
        if (!isNaN(populacao)) {
            if (populacao > 1000000) {
                console.log("Este planeta é muito populado.");
            } else {
                console.log("Este planeta tem uma população pequena.");
            }
        } else {
            console.log("Informação de população indisponível ou inválida.");
        }
    } catch (erro) {
        console.error('Erro ao buscar o planeta:', erro.message);
    }
}

buscarEDetalharPlaneta(1);

