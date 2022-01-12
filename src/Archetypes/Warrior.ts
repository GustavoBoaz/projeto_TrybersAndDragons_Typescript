import Archetype from './Archetype';

class Warrior extends Archetype {
  private $energyType: 'stamina' = 'stamina';

  get energyType() {
    return this.$energyType;
  }
}

export default Warrior;
