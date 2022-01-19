import SimpleFighter from './SimpleFighter';

class Monster implements SimpleFighter {
  private $lifePoints: number;

  private $strength: number;

  private $defense: number;

  constructor() {
    this.$lifePoints = 85;
    this.$strength = 63;
    this.$defense = 0;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.$strength);
  }

  receiveDamage(amount: number): number {
    this.$lifePoints -= amount;
    if (this.$lifePoints <= 0) this.$lifePoints = -1;
    return this.$lifePoints;
  }

  get strength(): number {
    return this.$strength;
  }

  public get defense(): number {
    return this.$defense;
  }

  public get lifePoints(): number {
    return this.$lifePoints;
  }
}

export default Monster;
