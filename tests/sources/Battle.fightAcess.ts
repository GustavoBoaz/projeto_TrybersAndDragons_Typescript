import Battle from "../../src/Battle";
import Character from "../../src/Character";
import Monster from "../../src/Monster";

const myPLayer = new Character('');
const myMonster = new Monster();
const battle = new Battle(myPLayer, [myMonster]);
battle.fight();
