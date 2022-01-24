import Race from './Race';

class Halfling extends Race {
  private $maxLifePoints = 60;

  private static $createdRacesInstances = 0;

  static createdRacesInstances(): number {
    return this.$createdRacesInstances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.$createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Halfling;
