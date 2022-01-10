import Race from './Race';

class Human extends Race {
  private $maxLifePoints = 36;

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Human;
