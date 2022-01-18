import Archetype, * as Archetypes from '../../src/Archetypes';

describe('Verifica se a classe "Necromancer" é uma extensão de Archetype', () => {
  it('Verifica se a classe "Necromancer" existe', () => {
    expect('Necromancer.exists.ts').toCompile();
  });

  it('Verifica se o nome do "Necromancer" pode ser lido', () => {
    expect('Necromancer.name.ts').toCompile();
  });

  it('A classe Necromancer herda de Archetype', () => {
    const necromancer = new Archetypes.Necromancer('');
    expect(necromancer).toBeInstanceOf(Archetype);
  });
});
