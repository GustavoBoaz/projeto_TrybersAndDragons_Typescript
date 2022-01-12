import Archetype, * as Archetypes from '../../src/Archetypes';

describe('3 - Crie a classe Ranger que herda de Archetype', function () {
  it('A classe Ranger existe', () => {
    const ranger = new Archetypes.Ranger('');
    expect(ranger).toBeDefined();
  });

  it('O parâmetro name da classe Ranger pode ser lido', () => {
    const ranger = new Archetypes.Ranger('Ramon');
    expect(ranger.name).toEqual('Ramon');
  });

  it('A classe Ranger herda de Archetype', () => {
    const ranger = new Archetypes.Ranger('');
    expect(ranger).toBeInstanceOf(Archetype);
  });
});
