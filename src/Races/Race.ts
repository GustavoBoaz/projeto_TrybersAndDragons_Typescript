abstract class Race {
  private $name: string;

  constructor(name: string) {
    this.$name = name;
  }

  get name() { return this.$name; }

  abstract get maxLifePoints(): number;
}

export default Race;
