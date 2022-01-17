import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Halfling que herda de Race', function () {
  it('A classe Halfling existe', () => {
    const halfling = new Races.Halfling('', 110);
    expect(halfling).toBeDefined();
  });

  it('A classe Halfling herda de Race', () => {
    const halfling = new Races.Halfling('', 110);
    expect(halfling).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Halfling pode ser lido', () => {
    const Halfling = new Races.Halfling('Lobélia Sacola-Bolseiro', 110);
    expect(Halfling.name).toEqual('Lobélia Sacola-Bolseiro');
  });

  it('O parâmetro dexterity da classe Halfling pode ser lido', () => {
    const race = new Races.Halfling('Lobélia Sacola-Bolseiro', 110);
    expect(race.dexterity).toEqual(110);
  });

  it('O parâmetro maxLifePoints existe e é igual a 60', () => {
    const Halfling = new Races.Halfling('', 110);
    expect(Halfling.maxLifePoints).toEqual(60);
  });

  it('O parâmetro maxLifePoints existe e possui valor entre 50 e 60', () => {
    const halfling = new Races.Halfling('', 110);
    expect(halfling.maxLifePoints).toBeGreaterThanOrEqual(50);
    expect(halfling.maxLifePoints).toBeLessThanOrEqual(60);
  });
});
