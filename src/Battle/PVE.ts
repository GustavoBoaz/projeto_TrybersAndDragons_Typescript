import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, enemies: (Fighter | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  override fight(): number {
    let inBattle = true;
    while (inBattle) {
      this._player.attack(
        this._enemies[getRandomInt(0, this._enemies.length - 1)],
      );

      this._enemies.forEach((enemy, i) => {
        if (enemy.lifePoints === -1) {
          this._enemies.splice(i, 1);
        } else {
          enemy.attack(this._player);
        }
      });
      inBattle = this.checkEndFight();
    }

    return super.fight();
  }

  checkEndFight() {
    if (this._player.lifePoints === -1 || this._enemies.length === 0) {
      return false;
    }
    return true;
  }
}