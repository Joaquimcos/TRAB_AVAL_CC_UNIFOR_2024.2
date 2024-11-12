let usuarioObjeto = {
    nome: "João",
    idade: 25
};

let usuarioObjeto2 = {
    nome: 44,
    idade: "Maria"
};

function exibirUsuario(usuario) {
    if (typeof usuario.nome !== 'string' || typeof usuario.idade !== 'number') {
        throw new Error ("Erro: o nome deve ser uma string e a idade um número!")
    }
    console.log(usuario.nome + " tem " + usuario.idade + " anos.");
}


try {   
exibirUsuario(usuarioObjeto);
exibirUsuario(usuarioObjeto2);
} catch (error){
    console.log(error.message);
}