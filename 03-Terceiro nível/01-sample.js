async function buscarEDetalharNave() {
    try {
        const resposta = await fetch('https://swapi.dev/api/starships/9/');
        
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }

        const nave = await resposta.json();

        console.log("Detalhes da Nave:");
        console.table({
            Nome: nave.name,
            Modelo: nave.model,
            Fabricante: nave.manufacturer
        });

        const tamanhoTripulacao = parseInt(nave.crew);
        if (Number.isNaN(tamanhoTripulacao)) {
            console.log('Informação da tripulação indisponível.');
        } else if (tamanhoTripulacao > 100) {
            console.log('Esta é uma nave grande.');
        } else {
            console.log('Esta é uma nave pequena.');
        }

    } catch (erro) {
        console.error('Erro ao buscar detalhes da nave:', erro);
    }
}

buscarEDetalharNave();