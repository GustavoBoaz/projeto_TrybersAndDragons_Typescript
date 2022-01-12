import Archetype, * as Archetypes from '../src/Archetypes';
describe('3 - Crie a classe Mage que herda de Archetype', function () {
  it('A classe Mage existe', () => {
    const mage = new Archetypes.Mage('');
    expect(mage).toBeDefined();
  });
  it('O parâmetro name da classe Mage pode ser lido', () => {
    const mage = new Archetypes.Mage('Ramon');
    expect(mage.name).toEqual('Ramon');
  });
  it('A classe Mage herda de Archetype', () => {
    const mage = new Archetypes.Mage('');
    expect(mage).toBeInstanceOf(Archetype);
  });

});
