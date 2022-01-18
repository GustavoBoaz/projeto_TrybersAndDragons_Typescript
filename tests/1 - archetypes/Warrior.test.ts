import Archetype, * as Archetypes from '../../src/Archetypes';
describe('3 - Crie a classe Warrior que herda de Archetype', function () {
  it('A classe Warrior existe', () => {
    expect('Warrior.exists.ts').toCompile();
  });
  it('O parâmetro name da classe Warrior pode ser lido', () => {
    expect('Warrior.name.ts').toCompile();
  });
  it('A classe Warrior herda de Archetype', () => {
    const warrior = new Archetypes.Warrior('');
    expect(warrior).toBeInstanceOf(Archetype);
  });

});
