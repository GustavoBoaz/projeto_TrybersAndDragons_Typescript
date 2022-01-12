import Archetype, * as Archetypes from '../../src/Archetypes';

describe('Verifica se a classe "Necromancer" é uma extensão de Archetype', () => {
  it('Verifica se a classe "Necromancer" existe', () => {
    const necromancer = new Archetypes.Necromancer('');
    expect(necromancer).toBeDefined();
  });

  it('Verifica se o nome do "Necromancer" pode ser lido', () => {
    const necromancer = new Archetypes.Necromancer('Harry');
    expect(necromancer.name).toBe('Harry');
  });

  it('A classe Necromancer herda de Archetype', () => {
    const necromancer = new Archetypes.Necromancer('');
    expect(necromancer).toBeInstanceOf(Archetype);
  });
});
