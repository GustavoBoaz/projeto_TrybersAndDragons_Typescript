describe('10 - Classe Monster', () => {
  describe('Crie a classe Monster', function () {
    it('A classe Monster existe', () => {
      expect('Monster.exists').toCompile();
    });
  });

  describe('A classe Monster deve possuir as propriedades "lifePoints", "strength" e "defense" ', function () {
    it('A propriedade "lifePoints" existe', () => {
      expect('Monster.lifePoints').toCompile();
    });
    it('A propriedade "strength" existe', () => {
      expect('Monster.strength').toCompile();
    });
    it('A propriedade "defense" existe', () => {
      expect('Monster.defense').toCompile();
    });
  });

  describe('Monster pode atacar e sofrer ataques', function () {
    it('Realiza um ataque', () => {
      expect('Monster.attack').toCompile();
    });
  });

  describe(' - Monster pode sofrer um ataque', function () {
    it('Recebe um ataque', () => {
      expect('Monster.receiveAttack').toCompile();
    });
  });
});
