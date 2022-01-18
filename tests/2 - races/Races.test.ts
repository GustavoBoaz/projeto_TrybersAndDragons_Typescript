describe('3 - Crie a classe Race', function () {
  it('A classe Race existe', () => {
    expect('Races.exists.ts').toCompile();
  });
  it('O parâmetro name da classe Race pode ser lido', () => {
    expect('Races.name.ts').toCompile();
  });
  it('O parâmetro dexterity da classe Race pode ser lido', () => {
    expect('Races.dexterity.ts').toCompile();
  });
  it('O método maxLifePoints retorna um valor numérico', () => {
    expect('Races.maxLifePoints.ts').toCompile();    
  });
});
