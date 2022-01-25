import Archetype from './Archetype';

class Mage extends Archetype {
  private $energyType: 'mana' = 'mana';

  private static $createdArchetypeInstances = 0;

  static createdArchetypeInstances(): number {
    return this.$createdArchetypeInstances;
  }

  constructor(name: string) {
    super(name);
    Mage.$createdArchetypeInstances += 1;
  }
  
  get energyType() {
    return this.$energyType;
  }
}

export default Mage;
