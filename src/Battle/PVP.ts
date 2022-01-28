import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    protected player: Fighter,
    protected enemy: Fighter,
  ) {
    super(player);
  }

  fight() {
    while (this.player.lifePoints !== -1 && this.enemy.lifePoints !== -1) {
      this.playerFightsEnemy();
      if (this.enemy.lifePoints !== -1) this.enemyFightsPlayer();
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private playerFightsEnemy() {
    if (getRandomInt(1, 10) > 7) this.player.special(this.enemy);
    else this.player.attack(this.enemy);
  }

  private enemyFightsPlayer() {
    if (getRandomInt(1, 10) > 7) this.enemy.special(this.player);
    else this.enemy.attack(this.player);
  }
}

export default PVP;
