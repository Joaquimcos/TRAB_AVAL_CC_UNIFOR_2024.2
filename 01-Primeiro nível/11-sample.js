class UserProfile {
    constructor(nomeUsuario, idade, papelUsuario, dataCriacao, dataUltLogin, status, numPontos, tentativasLogin) {
        this.nomeUsuario = nomeUsuario; 
        this.idade = idade; 
        this.papelUsuario = papelUsuario; 
        this.dataCriacao = dataCriacao; 
        this.dataUltLogin = dataUltLogin; 
        this.status = status; 
        this.numPontos = numPontos; 
        this.tentativasLogin = tentativasLogin; 
    }

    verificarStatus() { 
        if (this.status) {
            console.log(`${this.nomeUsuario} é um usuário Ativo`);
        } else {
            console.log(`${this.nomeUsuario} é um usuário Inativo`);
        }
    }

    verificarPapelUsuario() { 
        if (this.papelUsuario === 'admin') {
            console.log(`Admin ${this.nomeUsuario} tem acesso ilimitado.`);
        } else {
            console.log(`Convidado(a) ${this.nomeUsuario} tem acesso limitado.`);
        }
    }
}


function contarAdmin(users) { 
    let totalAdmin = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].papelUsuario === 'admin') {
            totalAdmin++;
        }
    }
    return totalAdmin;
}

function contarGuest(users) { 
    let totalGuest = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].papelUsuario === 'guest') {
            totalGuest++;
        }
    }
    return totalGuest;
}


function checarExcessoLogin(user, limite) { 
    if (user.tentativasLogin > limite) {
        console.log(`${user.nomeUsuario} realizou tentativas excessivas de login.`);
    } else {
        console.log(`As tentativas de login de ${user.nomeUsuario} estão sob controle.`);
    }
}


function checarLoginMaisRecente(u1, u2) { 
    if (u1.dataUltLogin > u2.dataUltLogin) {
        return `${u1.nomeUsuario} fez login mais recentemente do que ${u2.nomeUsuario}`;
    } else {
         return `${u2.nomeUsuario} fez login mais recentemente do que ${u1.nomeUsuario}`;
    }
       
}


function checarCriacaoUsuario(user) { 
    const anoEmMilissegundos = 365 * 24 * 60 * 60 * 1000;
    const hrAtual = new Date();
    if (hrAtual - user.dataCriacao < anoEmMilissegundos) {
        console.log(user.nomeUsuario + " é um usuário criado recentemente.");
    } else {
        console.log(user.nomeUsuario + " é um usuário antigo.");
    }
}

let usuarios = [
    new UserProfile("Carlos", 25, 'admin', new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new UserProfile("Ana", 30, 'guest', new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new UserProfile("José", 29, 'admin', new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new UserProfile("Maria", 35, 'guest', new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7),
    new UserProfile("Lucas", 22, 'guest', new Date(2024, 9, 5), new Date(2024, 6, 10), true, 75, 2) 
];

console.log("Usuários admin: " + contarAdmin(usuarios));
console.log("Usuários guest: " + contarGuest(usuarios));

usuarios[0].verificarStatus();
usuarios[3].verificarStatus();

usuarios[1].verificarPapelUsuario();
usuarios[2].verificarPapelUsuario();

checarExcessoLogin(usuarios[2], 4);
checarExcessoLogin(usuarios[1], 4);

console.log(checarLoginMaisRecente(usuarios[0], usuarios[3]));

checarCriacaoUsuario(usuarios[3]);
checarCriacaoUsuario(usuarios[4]);
