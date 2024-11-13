function calcularDesconto(preco) {
    const descontoPadrao = 0.15
    return preco - (preco * descontoPadrao);
}

const precoFinal = calcularDesconto(100);
console.log(`Preço com desconto: ${precoFinal}`);
