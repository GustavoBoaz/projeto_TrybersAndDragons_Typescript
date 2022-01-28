describe('10 - Classe PVE', () => {
  it('A classe PVE existe', () => {
    expect('PVE.exists').toCompile();
  });
  // TODO: Testar Liskov Substitution com fight estendida de Battle
  // TODO: Testar Dependency Inversion recebendo algo diferente de monster que implemente SimpleFighter
});
