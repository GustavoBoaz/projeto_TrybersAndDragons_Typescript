interface SimpleFighter {
  lifePoints: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(amount: number): void;
}

export default SimpleFighter;
