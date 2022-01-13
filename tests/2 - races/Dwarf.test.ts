import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Dwarf que herda de Race', function () {
  it('A classe Dwarf existe', () => {
    const dwarf = new Races.Dwarf('');
    expect(dwarf).toBeDefined();
  });

  it('A classe Dwarf herda de Race', () => {
    const dwarf = new Races.Dwarf('');
    expect(dwarf).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Dwarf pode ser lido', () => {
    const dwarf = new Races.Dwarf('Dáin Iron Foot');
    expect(dwarf.name).toEqual('Dáin Iron Foot');
  });

  it.skip('O parâmetro maxLifePoints existe e é igual a 40', () => {
    const dwarf = new Races.Dwarf('');
    expect(dwarf.maxLifePoints).toEqual(40);
  });

  it('O parâmetro maxLifePoints existe e possui valor entre 75 e 80', () => {
    const dwarf = new Races.Dwarf('');
    expect(dwarf.maxLifePoints).toBeGreaterThanOrEqual(75);
    expect(dwarf.maxLifePoints).toBeLessThanOrEqual(80);
  });
});
