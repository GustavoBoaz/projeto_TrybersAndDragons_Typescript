import Archetype from './Archetype';

class Ranger extends Archetype {
  private $energyType: 'stamina' = 'stamina';

  get energyType() {
    return this.$energyType;
  }
}

export default Ranger;
