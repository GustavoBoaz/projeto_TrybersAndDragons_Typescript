import Archetype, * as Archetypes from '../src/Archetypes';
import { EnergyType } from '../src/Energy';

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
