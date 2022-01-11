import { EnergyType } from '../Fighter';

abstract class Archetype {
  special = 4;

  cost = 5;

  constructor(public name: string) { }

  abstract get energyType(): EnergyType;
}

export default Archetype;
