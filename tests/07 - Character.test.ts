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
  it('Um Character possui um atributo lifePoints, que pode ser lido mas não pode ser setado', () => {
    expect('Character.lifePoints').toCompile();
    expect('Character.lifePoints.set').notToCompile();
  });
  it('Um Character possui um atributo strength, que pode ser lido mas não pode ser setado', () => {
    expect('Character.strength').toCompile();
    expect('Character.strength.set').notToCompile();
  });
  it('Um Character possui um atributo defense, que pode ser lido mas não pode ser setado', () => {
    expect('Character.defense').toCompile();
    expect('Character.defense.set').notToCompile();
  });
  it('Um Character possui um atributo energy, que pode ser lido mas não pode ser setado', () => {
    expect('Character.energy').toCompile();
    expect('Character.energy.set').notToCompile();
  });
  it('Um Character possui um atributo dexterity, que pode ser lido mas não pode ser setado', () => {
    expect('Character.dexterity').toCompile();
    expect('Character.dexterity.set').notToCompile();
  });
  it('Um Character pode subir de nível através do método levelUp, e seus atributos (maxLifePoints, strength, dexterity, defense) ficarão no mínimo 1 ponto e no máximo 10 pontos maiores (sendo que lifePoints nunca poderá ser maior que o maxLifePoints da Race), sua vida ficará completamente cheia (lifePoints ficará igual ao novo maxLifePoints) e sua energia também ficará cheia (energy.amount será igual a 10)', () => {
    expect('Character.levelUp').toCompileAndBeEqualTo(true);
  });
});
