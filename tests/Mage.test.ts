import * as fs from 'fs';
describe('3 - Crie a classe Mage que herda de Archetype', function () {
  it('A classe Mage existe', () => {
    expect('Mage.exists.ts').toCompile();
  });
  it('O parâmetro name da classe Mage pode ser lido', async () => {
    expect('x.ts').toCompile();
    const jsString = fs.readFileSync('./tests/sources/Mage.name.js') + ' ; result();';
    const result = eval(jsString.replace('../../src', '../src'));
    expect(result).toBe('Alex');
  });
  it('A classe Mage herda de Archetype', () => {
    // TODO: implementar
  });
});
