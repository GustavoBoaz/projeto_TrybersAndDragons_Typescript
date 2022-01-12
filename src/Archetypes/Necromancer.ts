import Archetype from './Archetype';

class Necromancer extends Archetype {
  private $energyType: 'stamina' = 'stamina';

  get energyType() {
    return this.$energyType;
  }
}

export default Necromancer;
