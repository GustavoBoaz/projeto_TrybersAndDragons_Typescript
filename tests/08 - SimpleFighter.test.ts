describe('08 - Interface SimpleFighter', () => {
  it('A interface Fighter existe', () => {
    expect('Fighter.exists').toCompile();
  });
  it('A interface Fighter possui o atributo lifePoints', () => {
    expect('Fighter.lifePoints').notToCompile();
  });
  it('A interface Fighter possui o atributo strength', () => {
    expect('Fighter.strength').notToCompile();
  });
  it('A interface Fighter possui o método attack, que recebe um enemy do tipo Fighter', () => {
    expect('Fighter.attack').notToCompile();
  });
  it('A interface Fighter possui o método receiveDamage, que recebe um amount do tipo number', () => {
    expect('Fighter.receiveDamage').notToCompile();
  });
});
