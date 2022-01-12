import Race from './Race';

class Dwarf extends Race {
  private $maxLifePoints = 40;

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Dwarf;
