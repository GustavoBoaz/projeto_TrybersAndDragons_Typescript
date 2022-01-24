abstract class Race {
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  private $name: string;

  private $dexterity: number;

  constructor(name: string, dexterity: number) {
    this.$name = name;
    this.$dexterity = dexterity;
  }

  get name() { return this.$name; }

  get dexterity() { return this.$dexterity; }

  abstract get maxLifePoints(): number;
}

export default Race;
