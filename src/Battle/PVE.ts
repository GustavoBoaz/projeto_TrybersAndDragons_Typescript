import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    protected player: Fighter,
    protected enemies: SimpleFighter[],
  ) {
    super(player);
  }

  fight() {
    while (this.player.lifePoints !== -1 && this.enemies.length > 0) {
      this.startFightWithNewEnemy();
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private startFightWithNewEnemy() {
    const currentEnemy = this.enemies.pop() as SimpleFighter;
    while (this.player.lifePoints !== -1 && currentEnemy.lifePoints !== -1) {
      this.playerFightsEnemy(currentEnemy);
    }
  }

  private playerFightsEnemy(enemy: SimpleFighter) {
    if (getRandomInt(1, 10) > 7) this.player.special(enemy);
    else this.player.attack(enemy);
    if (enemy.lifePoints !== -1) {
      enemy.attack(this.player);
    }
  }
}

export default PVE;
