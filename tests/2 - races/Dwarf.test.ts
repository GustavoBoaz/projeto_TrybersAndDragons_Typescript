import Race, * as Races from '../../src/Races';

describe(' - Crie a classe Dwarf que herda de Race', function () {
  it('A classe Dwarf existe', () => {
    expect('Dwarf.exists.ts').toCompile();
  });

  it('A classe Dwarf herda de Race', () => {
    const dwarf = new Races.Dwarf('', 100);
    expect(dwarf).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Dwarf pode ser lido', () => {
    expect('Dwarf.name.ts').toCompile();
  });

  it('O parâmetro dexterity da classe Dwarf pode ser lido', () => {
    expect('Dwarf.dexterity.ts').toCompile();
  });

  it('O parâmetro maxLifePoints existe e é igual a 80', () => {
    const dwarf = new Races.Dwarf('', 100);
    expect(dwarf.maxLifePoints).toEqual(80);
    expect('Dwarf.maxLifePoints.ts').toCompile();
  });
});
