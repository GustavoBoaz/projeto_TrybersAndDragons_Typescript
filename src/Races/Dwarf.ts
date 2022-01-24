import Race from './Race';

class Dwarf extends Race {
  private static $createdRacesInstances = 0;

  static createdRacesInstances(): number {
    return this.$createdRacesInstances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.$createdRacesInstances += 1;
  }

  private $maxLifePoints = 80;

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Dwarf;
