import Character from '../../src/Character';
import Monster from '../../src/Monster';

const monster = new Monster();
const character = new Character('');
character.attack(monster);

const result = monster.receiveDamage(character.strength);
export default result;

