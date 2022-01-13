import Energy, { EnergyType } from '../../src/Energy';

describe('Energy', () => {
  describe('EnergyType', () => {
    it('Cria variável para guardar o EnergyType "mana"', () => {
      let x: EnergyType = 'mana';
    });
    it('Cria variável para guardar o EnergyType "stamina"', () => {
      let x: EnergyType = 'stamina';
    });
  });
  describe('Energy', () => {
    it('Cria variável para guardar o Energy 1', () => {
      let x: Energy = {
        amount: 10,
        type_: 'stamina'
      };
    });
    it('Cria variável para guardar o Energy 2', () => {
      let x: Energy = {
        amount: 10,
        type_: 'mana'
      };
    });
    it('Cria variável para guardar o Energy 3', () => {
      let x: Energy = {
        amount: 45,
        type_: 'stamina'
      };
    });
    it('Cria variável para guardar o Energy 4', () => {
      let x: Energy = {
        amount: 45,
        type_: 'mana'
      };
    });
  });
});
