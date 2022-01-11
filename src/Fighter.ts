type Energy = {
  type_: 'mana' | 'stamina',
  amount: number
};

interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  agility: number,
  energy: Energy
}

export default Fighter;