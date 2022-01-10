import Race, * as Races from '../src/Races';

class RaceChild extends Race {
  get maxLifePoints(): number {
    return 99;
  }
}

describe('3 - Crie a classe Race', function () {
  it('A classe Race existe', () => {
    const race = new RaceChild('');
  });
  it('O parâmetro name da classe Race pode ser lido', () => {
    const race = new RaceChild('Aloha');
    expect(race.name).toEqual('Aloha');
  });
  it('O método maxLifePoints retorna um valor numérico', () => {
    const race = new RaceChild('Aloha');
    expect(typeof race.maxLifePoints).toEqual('number');
    expect(race.maxLifePoints).toEqual(99);
  });
});
