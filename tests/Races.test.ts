describe('Race', () => {
  describe('1 - Classe Race', () => {
    it('A classe Race existe', () => {
      expect('Races.exists').toCompile();
    });
    it('A classe Race é abstrata', () => {
      expect('Races.abstract').not.toCompile();
    });
    it('O método maxLifePoints da classe Race é abstrato', () => {
      expect('Races.maxLifePoints.abstract').not.toCompile();
    });
    it('O parâmetro name da classe Race pode ser lido', () => {
      expect('Races.name').toCompile();
    });
    it('O parâmetro name da classe Race não pode ser alterado', () => {
      expect('Races.name.set').not.toCompile();
    });
    it('O parâmetro dexterity da classe Race pode ser lido', () => {
      expect('Races.dexterity').toCompile();
    });
    it('O parâmetro dexterity da classe Race não pode ser setado', () => {
      expect('Races.dexterity').toCompile();
    });
    it('O método maxLifePoints retorna um valor numérico', () => {
      expect('Races.maxLifePoints').toCompile();
    });
    it('O método createdRacesInstances deve existir e ser estático', () => {
      expect('Races.createdRacesInstances').toCompile();
    });
    it('O método createdRacesInstances deve levantar um erro "Not implemented"', () => {
      expect('Races.createdRacesInstances.error').toCompileAndBeEqualTo(false);
    });
  });

  describe('2 - Classes que herdam de Race', () => {
    describe('Cria a classe Dwarf que herda de Race', () => {
      it('A classe Dwarf existe', () => {
        expect('Dwarf.exists').toCompile();
      });
      it('A classe Dwarf herda de Race', () => {
        expect('Dwarf.extends').toCompile();
      });
      it('O parâmetro name da classe Dwarf pode ser lido', () => {
        expect('Dwarf.name').toCompile();
      });
      it('O parâmetro dexterity da classe Dwarf pode ser lido', () => {
        expect('Dwarf.dexterity').toCompile();
      });
      it('O parâmetro maxLifePoints existe e é igual a 80', () => {
        expect('Dwarf.maxLifePoints').toCompileAndBeEqualTo(80);
      });
      it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Dwarf', () => {
        expect('Dwarf.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });
    });

    describe('Cria a classe Elf que herda de Race', () => {
      it('A classe Elf existe', () => {
        expect('Elf.exists').toCompile();
      });
      it('A classe Elf herda de Race', () => {
        expect('Elf.extends').toCompile();
      });
      it('O parâmetro name da classe Elf pode ser lido', () => {
        expect('Elf.name').toCompile();
      });
      it('O parâmetro dexterity da classe Elf pode ser lido', () => {
        expect('Elf.dexterity').toCompile();
      });
      it('O parâmetro maxLifePoints existe e é igual a 99', () => {
        expect('Elf.maxLifePoints').toCompileAndBeEqualTo(99);
      });
      it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Elf', () => {
        expect('Elf.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });
    });

    describe('Cria a classe Halfling que herda de Race', () => {
      it('A classe Halfling existe', () => {
        expect('Halfling.exists').toCompile();
      });
      it('A classe Halfling herda de Race', () => {
        expect('Halfling.extends').toCompile();
      });
      it('O parâmetro name da classe Halfling pode ser lido', () => {
        expect('Halfling.name').toCompile();
      });
      it('O parâmetro dexterity da classe Halfling pode ser lido', () => {
        expect('Halfling.dexterity').toCompile();
      });
      it('O parâmetro maxLifePoints existe e é igual a 60', () => {
        expect('Halfling.maxLifePoints').toCompileAndBeEqualTo(60);
      });
      it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Halfling', () => {
        expect('Halfling.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });
    });

    describe('Cria a classe Orc que herda de Race', () => {
      it('A classe Orc existe', () => {
        expect('Orc.exists').toCompile();
      });
      it('A classe Orc herda de Race', () => {
        expect('Orc.extends').toCompile();
      });
      it('O parâmetro name da classe Orc pode ser lido', () => {
        expect('Orc.name').toCompile();
      });
      it('O parâmetro dexterity da classe Orc pode ser lido', () => {
        expect('Orc.dexterity').toCompile();
      });
      it('O parâmetro maxLifePoints existe e é igual a 74', () => {
        expect('Orc.maxLifePoints').toCompileAndBeEqualTo(74);
      });
      it('O método createdRacesInstances deve retornar o número correto de instâncias criadas da classe Orc', () => {
        expect('Orc.createdRacesInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });
    });
  });
});
