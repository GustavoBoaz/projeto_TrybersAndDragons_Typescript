import Archetype, * as Archetypes from '../src/Archetypes';
import { EnergyType } from '../src/Fighter';

class ArchetypeChild extends Archetype {
  get energyType(): EnergyType {
    throw new Error('Method not implemented.');
  }
}

describe('1 - Crie a classe Archetype', function () {
  it('A classe Archetype existe', () => {
    const archetype = new ArchetypeChild('');
    expect(archetype).toBeDefined();
  });
  it('O parâmetro name da classe Archetype pode ser lido', () => {
    const archetype = new ArchetypeChild('Aloha');
    expect(archetype.name).toEqual('Aloha');
  });
});

describe('2 - Crie classes que herdam de Archetype', function () {
  it('A classe Mage existe', () => {
    const mage = new Archetypes.Mage('');
    expect(mage).toBeDefined();
  });
  it('Tem o nome correto', () => {
    const mage = new Archetypes.Mage('Ramon');
    expect(mage.name).toEqual('Ramon');
  });
});
