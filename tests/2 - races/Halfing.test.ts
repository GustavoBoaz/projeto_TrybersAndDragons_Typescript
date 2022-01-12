import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Halfling que herda de Race', function () {
  it('A classe Halfling existe', () => {
    const halfling = new Races.Halfling('');
    expect(halfling).toBeDefined();
  });

  it('A classe Halfling herda de Race', () => {
    const halfling = new Races.Halfling('');
    expect(halfling).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Halfling pode ser lido', () => {
    const Halfling = new Races.Halfling('Lobélia Sacola-Bolseiro');
    expect(Halfling.name).toEqual('Lobélia Sacola-Bolseiro');
  });

  it('O parâmetro maxLifePoints existe e é igual a 36', () => {
    const Halfling = new Races.Halfling('');
    expect(Halfling.maxLifePoints).toEqual(36);
  });
});
