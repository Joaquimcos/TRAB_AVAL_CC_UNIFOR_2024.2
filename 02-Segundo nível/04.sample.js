function tentarLogin(senha, senhaCorreta = '12345') {
    for (let tentativas = 0; tentativas < 3; tentativas++) {
        if (senha === senhaCorreta) {
            return "Login efetuado com sucesso!";
        }
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin("12345"));
