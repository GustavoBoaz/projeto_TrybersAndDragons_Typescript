describe('07 - Classe Character', () => {
  it('A classe Character existe', () => {
    expect('Character.exists').toCompile();
  });
  it('A classe Character implementa a interface Fighter', () => {
    expect('Character.implements').toCompile();
  });
  it('Um Character possui uma Race', () => {
    expect('Character.race').toCompile();
  });
  it('Um Character possui um Archetype', () => {
    expect('Character.archetype').toCompile();
  });
});
