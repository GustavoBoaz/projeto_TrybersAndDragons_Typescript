import Race from './Race';

class Halfling extends Race {
  private $maxLifePoints = 52;

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Halfling;
