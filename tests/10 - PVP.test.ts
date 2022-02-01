describe('10 - Classe PVP', () => {
  it('A classe PVP existe e se pode ser criada uma nova instância, passando dois Characters', () => {
    expect('PVP.exists').toCompile();
  });
  it('A classe PVP pode ser utilizada onde a classe Battle é esperada, e um Characters com level bem elevado ganham uma luta contra Characters level 0', () => {
    expect('PVP.LSP').toCompileAndBeEqualTo([1, -1]);
  });
  it('A classe PVP pode receber tanto dois Characters quanto duas instâncias de uma implementação diferente de Fighter', () => {
    expect('PVP.DIP').toCompile();
  });
});
