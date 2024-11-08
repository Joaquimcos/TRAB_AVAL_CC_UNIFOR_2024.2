const acessoPermitido = true;

function verificarAcesso(usuario, acessoAtivo) {
    if (acessoAtivo && usuario.admin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const usuario = { nome: "João", admin: true };
verificarAcesso(usuario, acessoPermitido);

