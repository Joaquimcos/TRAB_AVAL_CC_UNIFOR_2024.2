function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const taxa1 = 0.11;
    const taxa2 = 0.18;
    const taxa3 = 0.27;
    const desconto = 300;
    
    const bonusPorCargo = {
        gerente: 1000,
        supervisor: 500,
        default: 200
    };
    
    const salarioBase = horasTrabalhadas * valorHora;
    

    const bonus = bonusPorCargo[cargo] || bonusPorCargo.default;
    const salarioComBonus = salarioBase + bonus;
    
    const salarioComDesconto = salarioComBonus - desconto;
    
    let salarioFinal;
    if (salarioComDesconto > 5000) {
        salarioFinal = salarioComDesconto * (1 - taxa3);
    } else if (salarioComDesconto > 3000) {
        salarioFinal = salarioComDesconto * (1 - taxa2);
    } else {
        salarioFinal = salarioComDesconto * (1 - taxa1);
    }
    
    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log("O salário final é: "+salario.toFixed(2)+"");