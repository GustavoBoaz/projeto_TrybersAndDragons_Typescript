describe('08 - Classe Battle', () => {
  describe('Classe Battle', () => {
    it('A classe Battle existe', () => {
      expect('Battle.exists').toCompile();
    });
    it('A função fight pode ser acessada', () => {
      expect('Battle.fightAcess').toCompile();
    });
  });
  // TODO: Testar Open Closed
  // TODO: Testar Liskov Substitution
  // TODO: Testar Dependency Inversion
});
