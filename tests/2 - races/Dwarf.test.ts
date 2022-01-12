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

  it('O parâmetro maxLifePoints existe e é igual a 40', () => {
    const dwarf = new Races.Dwarf('');
    expect(dwarf.maxLifePoints).toEqual(40);
  });

});
