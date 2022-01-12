import Archetype, * as Archetypes from '../../src/Archetypes';
describe('3 - Crie a classe Warrior que herda de Archetype', function () {
  it('A classe Warrior existe', () => {
    const warrior = new Archetypes.Warrior('');
    expect(warrior).toBeDefined();
  });
  it('O parâmetro name da classe Warrior pode ser lido', () => {
    const warrior = new Archetypes.Warrior('Ramon');
    expect(warrior.name).toEqual('Ramon');
  });
  it('A classe Warrior herda de Archetype', () => {
    const warrior = new Archetypes.Warrior('');
    expect(warrior).toBeInstanceOf(Archetype);
  });

});
