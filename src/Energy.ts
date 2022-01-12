type EnergyType = 'mana' | 'stamina';

type Energy = {
  type_: EnergyType,
  amount: number;
};

export default Energy;
export { EnergyType };
