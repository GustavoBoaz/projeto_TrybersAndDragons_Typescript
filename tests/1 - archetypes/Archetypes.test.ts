describe('1 - Crie a classe Archetype', function () {
  it('A classe Archetype existe', () => {
    expect('Archetype.exists.ts').toCompile();
  });
  it('O parâmetro name da classe Archetype pode ser lido', () => {
    expect('Archetype.name.ts').toCompile();
  });
});
