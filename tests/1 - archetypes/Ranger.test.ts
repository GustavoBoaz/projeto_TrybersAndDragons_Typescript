import Archetype, * as Archetypes from '../../src/Archetypes';

describe('3 - Crie a classe Ranger que herda de Archetype', function () {
  it('A classe Ranger existe', () => {
    expect('Ranger.exists.ts').toCompile();
  });

  it('O parâmetro name da classe Ranger pode ser lido', () => {
    expect('Ranger.name.ts').toCompile();
  });

  it('A classe Ranger herda de Archetype', () => {
    const ranger = new Archetypes.Ranger('');
    expect(ranger).toBeInstanceOf(Archetype);
  });
});
