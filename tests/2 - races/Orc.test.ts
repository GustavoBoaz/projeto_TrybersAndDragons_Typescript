import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Orc que herda de Race', function () {
  it('A classe Orc existe', () => {
    const orc = new Races.Orc('', 100);
    expect(orc).toBeDefined();
  });

  it('A classe Orc herda de Race', () => {
    const orc = new Races.Orc('', 100);
    expect(orc).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Orc pode ser lido', () => {
    const orc = new Races.Orc('Shagrat', 100);
    expect(orc.name).toEqual('Shagrat');
  });

  it('O parâmetro dexterity da classe Orc pode ser lido', () => {
    const race = new Races.Orc('Shagrat', 100);
    expect(race.dexterity).toEqual(100);
  });

  it('O parâmetro maxLifePoints existe e é igual a 74', () => {
    const orc = new Races.Orc('', 100);
    expect(orc.maxLifePoints).toEqual(74);
  });

  it('O parâmetro maxLifePoints existe e possui valor entre 70 e 80', () => {
    const orc = new Races.Orc('', 100);
    expect(orc.maxLifePoints).toBeGreaterThanOrEqual(70);
    expect(orc.maxLifePoints).toBeLessThanOrEqual(80);
  });
});
