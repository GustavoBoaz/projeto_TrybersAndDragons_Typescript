import Archetype from './Archetypes';
import Mage from './Archetypes/Mage';
import Race from './Races';
import Elf from './Races/Elf';

class Character {
  // Level?
  private $lifePoints: number;

  private $strength: number;

  private $defense: number;

  private $agility: number;

  private $energy: number; // Não vai ser number

  constructor(
    public name: string,
    public race: Race = new Elf(name),
    public archetype: Archetype = new Mage(name),
  ) {
    this.$lifePoints = this.race.maxLifePoints / 2;
  }

  special(): number {
    return this.$strength * 5;
    // Pega um dos possíveis especiais que existem no Arquétipo
  }
}

export default Character;
