import Fighter from './Fighter';
import SimpleFighter from './SimpleFighter';

class Battle {
  static fight(player: Fighter, enemies: SimpleFighter[]): void {
    let focus = 0;
    while (player.lifePoints > 0 && enemies.length > 0) {
      player.attack(enemies[focus]);
      if (enemies[focus].lifePoints < 0) {
        enemies.splice(focus, 1);
      }
      enemies[focus].attack(player);
      focus = this.upFocus(enemies, focus);
    }
  }

  private static upFocus(arr: any[], curr: number): number {
    const newFocus = curr + 1;
    if (newFocus === arr.length) {
      return 0;
    }
    return newFocus;
  }
  // TODO: Limpar comentários @natanaelneto
  // static enterDungeon(invader: Fighter, owner: Fighter): Fighter {
  //   while (invader.lifePoints > 0) {
  //     invader.attack(owner);
  //     if (owner.lifePoints <= 0) {
  //       return invader;
  //     }
  //     owner.attack(invader);
  //   }
  //   return invader;
  // }
}

export default Battle;
