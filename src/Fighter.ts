type EnergyType = 'mana' | 'stamina';

type Energy = {
  type_: EnergyType,
  amount: number;
};

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  agility: number;
  energy: Energy;
  receiveDamage(amount: number): number;
}

export default Fighter;
export { Energy, EnergyType };
