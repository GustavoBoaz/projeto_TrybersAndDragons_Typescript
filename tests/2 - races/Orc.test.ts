import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Orc que herda de Race', function () {
  it('A classe Orc existe', () => {
    expect('Orc.exists.ts').toCompile();
  });

  it('A classe Orc herda de Race', () => {
    const orc = new Races.Orc('', 100);
    expect(orc).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Orc pode ser lido', () => {
    expect('Orc.name.ts').toCompile();
  });

  it('O parâmetro dexterity da classe Orc pode ser lido', () => {
    expect('Orc.dexterity.ts').toCompile();
  });

  it('O parâmetro maxLifePoints existe e é igual a 74', () => {
    expect('Orc.maxLifePoints.ts').toCompile(); 
  });
});
