class Arquétipo {
  constructor(public nome: string) { }
}

class Raça {
  constructor(public name: string) { }
}

const elfo = new Raça('Elfo');
const humano = new Raça('Humano');

const mago = new Arquétipo('Mago');
const guerreiro = new Arquétipo('Guerreiro');
const arqueiro = new Arquétipo('Arqueiro');

class Personagem {
  constructor(public raça: Raça, public tipo: Arquétipo) { }
}

const personagem = new Personagem(elfo, mago);
