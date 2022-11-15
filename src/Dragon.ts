import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this.lifePoints = 999;
  }

  set lifePoints(points: number) {
    this.lifePoints = points;
  }
}