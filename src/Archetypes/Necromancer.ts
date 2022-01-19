import Archetype from './Archetype';

class Necromancer extends Archetype {
  private $energyType: 'mana' = 'mana';

  get energyType() {
    return this.$energyType;
  }
}

export default Necromancer;
