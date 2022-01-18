import SimpleFighter from './SimpleFighter';

class Battle {
  private static $inBattle: SimpleFighter[] = [];

  private focus = 0;

  constructor(private player: SimpleFighter, private enemies: SimpleFighter[]) {
    [player, ...enemies].forEach((fighter) => {
      if (Battle.$inBattle.find((f) => f === fighter)) {
        throw new Error(
          'Cada fighter só pode estar em uma batalha ao mesmo tempo',
        );
      }
      Battle.$inBattle.push(fighter);
    });
  }

  fight(): void {
    this.focus = 0;
    while (this.player.lifePoints > 0 && this.enemies.length > 0) {
      this.player.attack(this.enemies[this.focus]);
      if (this.enemies[this.focus].lifePoints < 0) {
        Battle.$inBattle.filter((f) => f !== this.enemies[this.focus]);
      }
      this.enemies[this.focus].attack(this.player);
      this.upFocus(this.enemies);
    }
    Battle.$inBattle.filter(
      (fighter) => ![this.player, ...this.enemies].find((f) => f === fighter),
    );
  }

  private upFocus(arr: SimpleFighter[]): void {
    this.focus = this.focus + 1 === arr.length ? 0 : this.focus + 1;
  }
}

export default Battle;
