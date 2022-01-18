import Character from '../../src/Character';
import Monster from '../../src/Monster';

const monster = new Monster();
const character = new Character('');
monster.attack(character);

const result = character.receiveDamage(monster.strength);
export default result;

