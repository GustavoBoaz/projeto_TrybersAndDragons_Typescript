import Archetype from '../src/Archetypes';

describe('1 - Crie a classe Archetype', function () {
  it('A classe Archetype existe', () => {
    class ArchetypeChild extends Archetype { }
    const archetype = new ArchetypeChild('');
  });
  it('O parâmetro name da classe Archetype pode ser lido', () => {
    class ArchetypeChild extends Archetype { }
    const archetype = new ArchetypeChild('Aloha');
    expect(archetype.name).toEqual('Aloha');
  });
});




