import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Dwarf que herda de Race', function () {
  it('A classe Dwarf existe', () => {
    const dwarf = new Races.Dwarf('', 100);
    expect(dwarf).toBeDefined();
  });

  it('A classe Dwarf herda de Race', () => {
    const dwarf = new Races.Dwarf('', 100);
    expect(dwarf).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Dwarf pode ser lido', () => {
    const dwarf = new Races.Dwarf('Dáin Iron Foot', 100);
    expect(dwarf.name).toEqual('Dáin Iron Foot')
    expect(dwarf.dexterity).toEqual(100);
  });

  it('O parâmetro dexterity da classe Dwarf pode ser lido', () => {
    const race = new Races.Dwarf('Dáin Iron Foot', 100);
    expect(race.dexterity).toEqual(100);
  });

  it('O parâmetro maxLifePoints existe e é igual a 80', () => {
    const dwarf = new Races.Dwarf('', 100);
    expect(dwarf.maxLifePoints).toEqual(80);
  });

  it('O parâmetro maxLifePoints existe e possui valor entre 75 e 80', () => {
    const dwarf = new Races.Dwarf('', 100);
    expect(dwarf.maxLifePoints).toBeGreaterThanOrEqual(75);
    expect(dwarf.maxLifePoints).toBeLessThanOrEqual(80);
  });
});
