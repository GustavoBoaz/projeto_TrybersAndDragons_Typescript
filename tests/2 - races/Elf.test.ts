import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Elf que herda de Race', function () {
  it('A classe Elf existe', () => {
    expect('Elf.exists.ts').toCompile();
  });

  it('A classe Elf herda de Race', () => {
    const elf = new Races.Elf('', 150);
    expect(elf).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Elf pode ser lido', () => {
    expect('Elf.name.ts').toCompile();
  });

  it('O parâmetro dexterity da classe Elf pode ser lido', () => {
    expect('Elf.dexterity.ts').toCompile();
  });

  it('O parâmetro maxLifePoints existe e é igual a 99', () => {
    expect('Elf.maxLifePoints.ts').toCompile();
  });
});
