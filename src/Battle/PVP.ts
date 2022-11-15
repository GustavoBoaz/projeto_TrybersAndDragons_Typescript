import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  override fight(): number {
    const queue = [this._player1, this._player2];
    let battleOver = 1;
    let queueIndex = 0;
    while (battleOver > 0) {
      const nextIndex = queueIndex ? 0 : 1;
      queue[queueIndex].attack(queue[nextIndex]);
      battleOver = queue[nextIndex].lifePoints;
      queueIndex = nextIndex;
    }

    return super.fight();
  }
}