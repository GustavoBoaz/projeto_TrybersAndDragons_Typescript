import Archetype from './Archetype';

class Mage extends Archetype {
  private $energyType: 'mana' = 'mana';

  get energyType() {
    return this.$energyType;
  }
}

export default Mage;
