import Fighter from './Fighter';

class Battle {
  static enterDungeon(invader: Fighter, owner: Fighter): Fighter {
    while (true) {
      invader.attack(owner);
      if (owner.lifePoints > 0) {
        owner.attack(invader);
        if (invader.lifePoints <= 0) {
          return owner;
        }
      }
      else {
        return invader;
      }
    }
  }
}

export default Battle;
