import Monster from '../src/Monster';
import Character from '../src/Character';

describe(' - Crie a classe Monster', function () {
  it('A classe Monster existe', () => {
    const monster = new Monster();
    expect(monster).toBeDefined();
  });
});

describe(' - A classe Monster deve possuir as propriedades "lifePoints", "strength" e "defense" ', function () {
  it('A propriedade "lifePoints" existe', () => {
    const monster = new Monster();
    expect(monster).toHaveProperty('lifePoints');
  });
  it('A propriedade "strength" existe', () => {
    const monster = new Monster();
    expect(monster).toHaveProperty('strength');
  });
  it('A propriedade "defense" existe', () => {
    const monster = new Monster();
    expect(monster).toHaveProperty('defense');
  });
});

describe(' - Monster pode realizar um ataque', function () {
  it('realiza um ataque', () => {
    const monster = new Monster();
    const character = new Character('Zezin')
    monster.attack(character)
    expect(character.receiveDamage(monster.strength)).toBeGreaterThanOrEqual(-1);
    expect(character.receiveDamage(monster.strength)).toBeLessThanOrEqual(character.lifePoints);
  });
});

describe(' - Monster pode sofrer um ataque', function () {
  it('Recebe um ataque', () => {
    const monster = new Monster();
    const character = new Character('Zezin')
    character.attack(monster)
    expect(monster.receiveDamage(character.strength)).toBeGreaterThanOrEqual(-1);
    expect(monster.receiveDamage(character.strength)).toBeLessThanOrEqual(monster.lifePoints);
  });
});