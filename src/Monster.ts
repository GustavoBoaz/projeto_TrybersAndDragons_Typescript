import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected $lifePoints: number;

  private $strength: number;

  constructor() {
    this.$lifePoints = 85;
    this.$strength = 63;
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

  public get lifePoints(): number {
    return this.$lifePoints;
  }
}

export default Monster;
