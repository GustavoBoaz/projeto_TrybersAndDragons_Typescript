import { EnergyType } from '../Energy';

abstract class Archetype {
  private $name: string;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  special = 4;

  cost = 5;

  constructor(name: string) {
    this.$name = name;
  }

  get name(): string {
    return this.$name;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
