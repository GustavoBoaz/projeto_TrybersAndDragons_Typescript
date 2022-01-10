import Race from '.';

class Elf extends Race {
  private $maxLifePoints = 99;

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Elf;
