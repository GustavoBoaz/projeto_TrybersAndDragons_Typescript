import Race, * as Races from '../../src/Races';
describe(' - Crie a classe Elf que herda de Race', function () {
  it('A classe Elf existe', () => {
    const elf = new Races.Elf('');
    expect(elf).toBeDefined();
  });

  it('A classe Elf herda de Race', () => {
    const elf = new Races.Elf('');
    expect(elf).toBeInstanceOf(Race);
  });

  it('O parâmetro name da classe Elf pode ser lido', () => {
    const elf = new Races.Elf('Lúthien');
    expect(elf.name).toEqual('Lúthien');
  });

  it.skip('O parâmetro maxLifePoints existe e é igual a 99', () => {
    const elf = new Races.Elf('');
    expect(elf.maxLifePoints).toEqual(99);
  });

  it('O parâmetro maxLifePoints existe e possui valor entre 95 e 99', () => {
    const elf = new Races.Elf('');
    expect(elf.maxLifePoints).toBeGreaterThanOrEqual(95);
    expect(elf.maxLifePoints).toBeLessThanOrEqual(99);
  });
});
