import Archetype from './Archetype';

class Ranger extends Archetype {
  private $energyType: 'stamina' = 'stamina';

  private static $createdArchetypeInstances = 0;

  static createdArchetypeInstances(): number {
    return this.$createdArchetypeInstances;
  }

  constructor(name: string) {
    super(name);
    Ranger.$createdArchetypeInstances += 1;
  }

  get energyType() {
    return this.$energyType;
  }
}

export default Ranger;
