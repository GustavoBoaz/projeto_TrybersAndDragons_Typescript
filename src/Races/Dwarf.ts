import Race from './Race';

class Dwarf extends Race {
  private $maxLifePoints = 76;

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Dwarf;
