import Monster from '../src/Monster';
import Character from '../src/Character';

describe('Monster', () => {
  describe('Crie a classe Monster', function () {
    it('A classe Monster existe', () => {
      expect('Monster.exists.ts').toCompile();
    });
  });

  describe('A classe Monster deve possuir as propriedades "lifePoints", "strength" e "defense" ', function () {
    it('A propriedade "lifePoints" existe', () => {
      expect('Monster.lifePoints.ts').toCompile();
    });
    it('A propriedade "strength" existe', () => {
      expect('Monster.strength.ts').toCompile();
    });
    it('A propriedade "defense" existe', () => {
      expect('Monster.defense.ts').toCompile();
    });
  });

  describe('Monster pode atacar e sofrer ataques', function () {
    it('Realiza um ataque', () => {
      // expect('Monster.attack.ts').toCompile();
      // TODO: implementar assert do monster.attack
    });
  });

  describe(' - Monster pode sofrer um ataque', function () {
    it('Recebe um ataque', () => {
      // expect('Monster.receiveAttack.ts').toCompile();
      // TODO: implementar assert do monster.receiveDamage
    });
  });
});
