async function buscarFilme(id) {
  let resposta;
  let filme;
  try {
    resposta = await fetch(`https://swapi.dev/api/films/${id}/`);
    filme = await resposta.json();
    console.log("filme.title: ", filme.title);
  } catch (error) {
    console.log("error: ", error);
  }

}

const id = 1
buscarFilme(id);
