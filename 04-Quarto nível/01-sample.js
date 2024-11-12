function exibirNomePlaneta(planetaName) {
    if (typeof document !== 'undefined') {
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Nome:</strong> ${planetaName}<br>
            </div>`;
    } else {
        console.log(`Nome do planeta: ${planetaName}`);
    }
}

async function buscarPlaneta(id) {
    let resposta;
    let planeta;
    try {
        resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
        planeta = await resposta.json();
        exibirNomePlaneta(planeta.name);
    } catch (error) {
        console.log("error: ", error);
    }
}

const id = 1;
buscarPlaneta(id);
