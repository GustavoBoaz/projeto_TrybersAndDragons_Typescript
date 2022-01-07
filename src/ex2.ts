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

class Elfo implements Raça {
  constructor(public name: string) { }
}

class Mago implements Arquétipo {
  constructor(public nome: string) { }
}

// Antes do princípio D
class Personagem {
  public raça: Elfo;
  public tipo: Mago;
  constructor(public name: string) {
    this.raça = new Elfo(name);
    this.tipo = new Mago(name);
  }
}


const personagem = new Personagem(elfo, mago);
