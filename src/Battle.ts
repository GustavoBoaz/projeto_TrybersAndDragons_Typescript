import Fighter from './Fighter';

class Battle {
  static enterDungeon(invader: Fighter, owner: Fighter): Fighter {
    while (invader.lifePoints > 0) {
      invader.attack(owner);
      if (owner.lifePoints <= 0) {
        return invader;
      }
      owner.attack(invader);
    }
    return invader;
  }
}

export default Battle;
