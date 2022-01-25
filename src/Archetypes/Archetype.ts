import { EnergyType } from '../Energy';

abstract class Archetype {
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  special = 4;

  cost = 5;

  constructor(public name: string) { }

  abstract get energyType(): EnergyType;
}

export default Archetype;
