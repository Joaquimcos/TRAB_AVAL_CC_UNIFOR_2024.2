function calcularFrete(distancia) {
    const custoPorKm = 10;
    return distancia * custoPorKm;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
