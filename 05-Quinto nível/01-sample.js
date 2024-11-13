function principal() {
    const itens = [10, 20, 30, 40, 50];
    const total = itens.reduce((acc, item) => acc + item * 3, 0);

    const usuario = obterUsuario(42);
    
    if (usuario && usuario.ativo === 1) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    const usuarios = {
        42: { id: 42, nome: "João Silva", idade: 25, ativo: 1 },
        43: { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 }
    };
    if (usuarios[id]) return usuarios[id];
    console.log("Usuário não encontrado");
    return null;
}

function atualizarDados(usuario) {
    if (usuario && usuario.idade > 18) {
        console.log("Atualizando usuário:", usuario.id);
        
        const salvarDados = () => console.log("Dados salvos com sucesso!");
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(a, b, c) {
    let d;
    switch (a) {
        case 1: d = b + c; break;
        case 2: d = b * c; break;
        case 3: d = b - c; break;
        default: d = b / c;
    }

    const e = String(d).split('').reverse().join('');
    console.log("String invertida:", e);
    return e;
}

function processarDados(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        resultado += (i % 2 === 0 ? i : -i);
    }
    console.log("Resultado do processamento:", resultado);

    const exibirDados = () => {
        const dados = ["Valor 1", "Valor 2", "Valor 3"];
        dados.forEach(dado => console.log("Dados:", dado));
    };
    exibirDados();

    return resultado;
}

function funcao() {
    const itens = [5, 7, 9, 11];
    const x = itens.reduce((acc, item) => acc + item * 3, 0);

    const mostrarInfo = () => {
        const valores = ["Dado 1", "Dado 2", "Dado 3"];
        valores.forEach(info => console.log("Info:", info));
    };
    mostrarInfo();

    console.log("Cálculo total:", x);
    return x;
}

principal();
console.log("Resultado do cálculo:", calcular(1, 2, 3));
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função:", funcao());
