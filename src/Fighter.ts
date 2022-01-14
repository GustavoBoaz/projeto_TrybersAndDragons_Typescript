interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  attack(enemy: Fighter): void;
  receiveDamage(amount: number): number;
}

export default Fighter;
