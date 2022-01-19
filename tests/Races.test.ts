import Race, * as Races from '../src/Races';

describe('Race', () => {
  describe('1 - Classe Race', () => {
    it('A classe Race existe', () => {
      expect('Races.exists').toCompile();
    });
    it('O parâmetro name da classe Race pode ser lido', () => {
      expect('Races.name').toCompile();
    });
    it('O parâmetro dexterity da classe Race pode ser lido', () => {
      expect('Races.dexterity').toCompile();
    });
    it('O método maxLifePoints retorna um valor numérico', () => {
      expect('Races.maxLifePoints').toCompile();
    });
  });

  describe('2 - Classes que herdam de Race', () => {
    describe('Cria a classe Dwarf que herda de Race', () => {
      it('A classe Dwarf existe', () => {
        expect('Dwarf.exists').toCompile();
      });

      it('A classe Dwarf herda de Race', () => {
        const dwarf = new Races.Dwarf('', 100);
        expect(dwarf).toBeInstanceOf(Race);
      });

      it('O parâmetro name da classe Dwarf pode ser lido', () => {
        expect('Dwarf.name').toCompile();
      });

      it('O parâmetro dexterity da classe Dwarf pode ser lido', () => {
        expect('Dwarf.dexterity').toCompile();
      });

      it('O parâmetro maxLifePoints existe e é igual a 80', () => {
        const dwarf = new Races.Dwarf('', 100);
        expect(dwarf.maxLifePoints).toEqual(80);
        expect('Dwarf.maxLifePoints').toCompile();
      });
    });
    describe('Cria a classe Elf que herda de Race', () => {
      it('A classe Elf existe', () => {
        expect('Elf.exists').toCompile();
      });

      it('A classe Elf herda de Race', () => {
        const elf = new Races.Elf('', 150);
        expect(elf).toBeInstanceOf(Race);
      });

      it('O parâmetro name da classe Elf pode ser lido', () => {
        expect('Elf.name').toCompile();
      });

      it('O parâmetro dexterity da classe Elf pode ser lido', () => {
        expect('Elf.dexterity').toCompile();
      });

      it('O parâmetro maxLifePoints existe e é igual a 99', () => {
        expect('Elf.maxLifePoints').toCompile();
      });
    });
    describe('Cria a classe Halfling que herda de Race', () => {
      it('A classe Halfling existe', () => {
        expect('Halfling.exists').toCompile();
      });

      it('A classe Halfling herda de Race', () => {
        const halfling = new Races.Halfling('', 110);
        expect(halfling).toBeInstanceOf(Race);
      });

      it('O parâmetro name da classe Halfling pode ser lido', () => {
        expect('Halfling.name').toCompile();
      });

      it('O parâmetro dexterity da classe Halfling pode ser lido', () => {
        expect('Halfling.dexterity').toCompile();
      });

      it('O parâmetro maxLifePoints existe e é igual a 60', () => {
        expect('Halfling.maxLifePoints').toCompile();
      });
    });
    describe('Crie a classe Orc que herda de Race', () => {
      it('A classe Orc existe', () => {
        expect('Orc.exists').toCompile();
      });

      it('A classe Orc herda de Race', () => {
        const orc = new Races.Orc('', 100);
        expect(orc).toBeInstanceOf(Race);
      });

      it('O parâmetro name da classe Orc pode ser lido', () => {
        expect('Orc.name').toCompile();
      });

      it('O parâmetro dexterity da classe Orc pode ser lido', () => {
        expect('Orc.dexterity').toCompile();
      });

      it('O parâmetro maxLifePoints existe e é igual a 74', () => {
        expect('Orc.maxLifePoints').toCompile();
      });
    });
  });
});
