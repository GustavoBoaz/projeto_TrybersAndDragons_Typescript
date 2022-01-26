import Fighter, { SimpleFighter } from './Fighter';
import Energy from './Energy';
import Archetype from './Archetypes';
import Mage from './Archetypes/Mage';
import Race from './Races';
import Elf from './Races/Elf';
import getRandomInt from './utils';

class Character implements Fighter {
  private $lifePoints: number;

  private $maxLifePoints: number;

  private $strength: number;

  private $defense: number;

  private $energy: Energy;

  private $dexterity: number;

  constructor(
    public name: string,
    public race: Race = new Elf(name, 150),
    public archetype: Archetype = new Mage(name),
  ) {
    this.$maxLifePoints = this.race.maxLifePoints / 2;
    this.$lifePoints = this.$maxLifePoints;
    this.$strength = 1;
    this.$defense = 1;
    this.$dexterity = 10;
    this.$energy = {
      amount: 10,
      type_: archetype.energyType,
    };
  }

  special(enemy: SimpleFighter): void {
    if (this.$energy.amount >= this.archetype.cost) {
      this.$energy.amount -= this.archetype.cost;
      enemy.receiveDamage(this.$strength * this.archetype.special);
    } else {
      this.attack(enemy);
    }
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.$strength);
  }

  receiveDamage(amount: number): number {
    const defense = getRandomInt(0, 50) < this.dexterity ? this.$defense : 0;
    let life = this.lifePoints + defense * (getRandomInt(0, 100) / 100);
    life -= amount;
    this.$lifePoints = life <= this.lifePoints ? life : this.lifePoints;
    if (this.$lifePoints <= 0) this.$lifePoints = -1;
    return this.$lifePoints;
  }

  levelUp(): void {
    this.$strength += getRandomInt(1, 10);
    this.$defense += getRandomInt(1, 10);
    this.$dexterity += getRandomInt(1, 10);
    this.$maxLifePoints += getRandomInt(1, 10);
    if (this.$maxLifePoints > this.race.maxLifePoints) {
      this.$maxLifePoints = this.race.maxLifePoints;
    }
    this.$lifePoints = this.$maxLifePoints;
    this.energy.amount = 10;
  }

  get strength(): number {
    return this.$strength;
  }

  public get defense(): number {
    return this.$defense;
  }

  public get dexterity(): number {
    return this.$dexterity;
  }

  public get lifePoints(): number {
    return this.$lifePoints;
  }

  public get energy() {
    return { ...this.$energy };
  }
}

export default Character;
