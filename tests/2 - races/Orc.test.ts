import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Orc que herda de Race', function () {
  it('A classe Orc existe', () => {
    const orc = new Races.Orc('');
    expect(orc).toBeDefined();
  });

  it('A classe Orc herda de Race', () => {
    const orc = new Races.Orc('');
    expect(orc).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Orc pode ser lido', () => {
    const orc = new Races.Orc('Shagrat');
    expect(orc.name).toEqual('Shagrat');
  });

  it.skip('O parâmetro maxLifePoints existe e é igual a 75', () => {
    const orc = new Races.Orc('');
    expect(orc.maxLifePoints).toEqual(75);
  });

  it('O parâmetro maxLifePoints existe e possui valor entre 70 e 80', () => {
    const orc = new Races.Orc('');
    expect(orc.maxLifePoints).toBeGreaterThanOrEqual(70);
    expect(orc.maxLifePoints).toBeLessThanOrEqual(80);
  });
});
