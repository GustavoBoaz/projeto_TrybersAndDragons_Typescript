import Energy from './Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  agility: number;
  energy: Energy;
  receiveDamage(amount: number): number;
}

export default Fighter;
