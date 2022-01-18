import Archetype, * as Archetypes from '../../src/Archetypes';
describe('3 - Crie a classe Mage que herda de Archetype', function () {
  it('A classe Mage existe', () => {
    expect('Mage.exists.ts').toCompile();
  });
  it('O parâmetro name da classe Mage pode ser lido', () => {
    expect('Mage.name.ts').toCompile();
  });
  it('A classe Mage herda de Archetype', () => {
    const mage = new Archetypes.Mage('');
    expect(mage).toBeInstanceOf(Archetype);
  });

});
