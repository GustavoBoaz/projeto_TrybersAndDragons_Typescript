import Race from './Race';

class Elf extends Race {
  private $maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Race.$createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.$maxLifePoints;
  }
}
const e = new Elf('asd', 80);
console.log(e.name);

export default Elf;
