import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Halfling que herda de Race', function () {
  it('A classe Halfling existe', () => {
    expect('Halfling.exists.ts').toCompile();
  });

  it('A classe Halfling herda de Race', () => {
    const halfling = new Races.Halfling('', 110);
    expect(halfling).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Halfling pode ser lido', () => {
    expect('Halfling.name.ts').toCompile();
  });

  it('O parâmetro dexterity da classe Halfling pode ser lido', () => {
    expect('Halfling.dexterity.ts').toCompile();
  });

  it('O parâmetro maxLifePoints existe e é igual a 60', () => {
    expect('Halfling.maxLifePoints.ts').toCompile();
  });
});
