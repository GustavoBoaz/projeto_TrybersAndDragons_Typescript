import Race from './Race';

class Elf extends Race {
  private static $createdRacesInstances = 0;

  private $maxLifePoints = 99;

  static createdRacesInstances(): number {
    return this.$createdRacesInstances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.$createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Elf;
