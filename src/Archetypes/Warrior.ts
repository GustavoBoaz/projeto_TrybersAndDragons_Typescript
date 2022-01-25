import Archetype from './Archetype';

class Warrior extends Archetype {
  private $energyType: 'stamina' = 'stamina';

  private static $createdArchetypeInstances = 0;

  static createdArchetypeInstances(): number {
    return this.$createdArchetypeInstances;
  }

  constructor(name: string) {
    super(name);
    Warrior.$createdArchetypeInstances += 1;
  }

  get energyType() {
    return this.$energyType;
  }
}

export default Warrior;
