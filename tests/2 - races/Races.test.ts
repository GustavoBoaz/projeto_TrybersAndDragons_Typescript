import Race, * as Races from '../../src/Races';

class RaceChild extends Race {
  get maxLifePoints(): number {
    return 99;
  }
}

describe('3 - Crie a classe Race', function () {
  it('A classe Race existe', () => {
    const race = new RaceChild('', 80);
  });
  it('O parâmetro name da classe Race pode ser lido', () => {
    const race = new RaceChild('Aloha', 80);
    expect(race.name).toEqual('Aloha');
  });
  it('O parâmetro dexterity da classe Race pode ser lido', () => {
    const race = new RaceChild('Aloha', 80);
    expect(race.dexterity).toEqual(80);
  });
  it('O método maxLifePoints retorna um valor numérico', () => {
    const race = new RaceChild('Aloha', 80);
    expect(typeof race.maxLifePoints).toEqual('number');
  });
});
