import Fighter from './Fighter';
import Energy from './Energy';
import Archetype from './Archetypes';
import Mage from './Archetypes/Mage';
import Race from './Races';
import Elf from './Races/Elf';

class Character implements Fighter {
  private $level: number;

  private $lifePoints: number;

  private $maxLifePoints: number;

  private $strength: number;

  private $defense: number;

  private $agility: number; // TODO: Chamar isso de destreza @thayscosta3

  private $energy: Energy;

  constructor(
    public name: string,
    public race: Race = new Elf(name),
    public archetype: Archetype = new Mage(name),
  ) {
    this.$maxLifePoints = this.race.maxLifePoints / 2;
    this.$lifePoints = this.$maxLifePoints;
    this.$level = 1;
    this.$strength = 1;
    this.$defense = 1;
    this.$agility = 1;
    this.$energy = {
      amount: 10,
      type_: archetype.energyType,
    };
  }

  special(enemy: Fighter): void {
    if (this.$energy.amount >= this.archetype.cost) {
      this.$energy.amount -= this.archetype.cost;
      enemy.receiveDamage(this.$strength * this.archetype.special);
    } else {
      this.attack(enemy);
    }
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.$strength);
  }

  receiveDamage(amount: number): number {
    // TODO: Defender
    this.$lifePoints -= amount;
    if (this.$lifePoints <= 0) this.$lifePoints = -1;
    return this.$lifePoints;
  }

  get strength(): number {
    return this.strength;
  }

  public get defense(): number {
    return this.$defense;
  }

  public get agility(): number {
    return this.$agility;
  }

  public get lifePoints(): number {
    return this.$lifePoints;
  }

  public get energy() {
    return { ...this.$energy };
  }
}

export default Character;
