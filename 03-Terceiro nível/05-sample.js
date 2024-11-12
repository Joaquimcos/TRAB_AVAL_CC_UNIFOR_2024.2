async function buscarVeiculosECalcularCusto() {
    try {
        const resposta = await fetch('https://swapi.dev/api/vehicles/');
        
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar veículos: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();

        const veiculosCaros = dados.results.filter(veiculo => {
            const custo = parseInt(veiculo.cost_in_credits, 10);
            return !isNaN(custo) && custo > 10000;
        });

        if (veiculosCaros.length > 0) {
            console.log("Veículos caros (mais de 10.000 créditos):");
            veiculosCaros.forEach(veiculo => {
                console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
            });
        } else {
            console.log("Nenhum veículo caro encontrado (mais de 10.000 créditos).");
        }

        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            return total + parseInt(veiculo.cost_in_credits, 10);
        }, 0);

        console.log(`Custo total dos veículos caros: ${custoTotal.toLocaleString()} créditos`);

    } catch (erro) {
        console.error('Erro ao buscar veículos:', erro.message);
    }
}

buscarVeiculosECalcularCusto();
