import Archetype, * as Archetypes from '../src/Archetypes';

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

describe('2 - Crie classes que herdam de Archetype', function () {
  it('A classe Mage existe', () => {
    const mage = new Archetypes.Mage('');
  });
  it('Tem o nome correto', () => {
    const mage = new Archetypes.Mage('Ramon');
    class ArchetypeChild extends Archetype { }
    expect(mage.name).toEqual('Ramon');
  });
});
