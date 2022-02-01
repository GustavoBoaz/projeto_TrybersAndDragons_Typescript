describe('11 - Classe PVE', () => {
  it('A classe PVE existe e se pode ser criada uma nova instância, passando um Character e um array com um Monster', () => {
    expect('PVE.exists').toCompile();
  });
  it('A classe PVE pode ser utilizada onde a classe Battle é esperada, e um Character com level bem elevado ganha uma luta contra somente um Monster, e um Character com level baixo perde numa luta contra diversos Monsters', () => {
    expect('PVE.LSP').toCompileAndBeEqualTo([1, -1]);
  });
  it('A classe PVE pode receber tanto Character e um array com um Monster quanto implementações diferentes de Fighter e SimpleFighter que não são Character nem Monster', () => {
    expect('PVE.DIP').toCompile();
  });
  // TODO: Testar mais funcionalidades do PVE
});
