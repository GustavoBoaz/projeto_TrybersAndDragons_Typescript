import Race from './Race';

class Orc extends Race {
  private $maxLifePoints = 74;

  private static $createdRacesInstances = 0;

  static createdRacesInstances(): number {
    return this.$createdRacesInstances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.$createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}

export default Orc;
