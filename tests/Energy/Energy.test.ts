import Energy, { EnergyType } from '../../src/Energy';
import cp from 'child_process';
import path from 'path';

describe('Energy', () => {
  describe.only('Tipo EnergyType', () => {
    it('É possível criar uma variável com o tipo EnergyType e atribuir a ela o valor "mana"', () => {
      expect(() => {
        cp.exec(`npx tsc ${path.resolve(path.join(__dirname, 'Energy.mana.ts'))}`);
      }).not.toThrow();
    });
    it('Não possível criar uma variável com o tipo EnergyType e atribuir a ela o valor "mani"', () => {
      expect(() => {
        cp.exec(`npx tsc ${path.resolve(path.join(__dirname, 'Energy.mani.ts'))}`);
      }).toThrow();
    });
    it('É possível criar uma variável com o tipo EnergyType e atribuir a ela o valor "stamina"', () => {
      let x: EnergyType = 'stamina';
    });
  });
  describe('Interface Energy', () => {
    it("É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor { amount: 10, type_: 'stamina'}", () => {
      let x: Energy = {
        amount: 10,
        type_: 'stamina'
      };
    });
    it("É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor { amount: 10, type_: 'mana'}", () => {
      let x: Energy = {
        amount: 10,
        type_: 'mana'
      };
    });
    it("É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor { amount: 100, type_: 'stamina'}", () => {
      let x: Energy = {
        amount: 45,
        type_: 'stamina'
      };
    });
    it("É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor { amount: 10, type_: 'mana'}", () => {
      let x: Energy = {
        amount: 45,
        type_: 'mana'
      };
    });
  });
});
