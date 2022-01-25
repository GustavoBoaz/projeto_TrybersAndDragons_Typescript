describe('Archetype', () => {
  describe('4 - Classe Archetype', () => {
    it('A classe Archetype existe', () => {
      expect('Archetype.exists').toCompile();
    });
    it('A classe Archetype é abstrata', () => {
      expect('Archetype.abstract').not.toCompile();
    });
    it('O parâmetro name da classe Archetype pode ser lido', () => {
      expect('Archetype.name').toCompile();
    });
    it('O parâmetro name da classe Archetype não pode ser alterado', () => {
      expect('Archetypes.name.set').not.toCompile();
    });
    it('O parâmetro special da classe Archetype pode ser lido', () => {
      expect('Archetype.special').toCompile();
    });
    it('O parâmetro cost da classe Archetype pode ser lido', () => {
      expect('Archetype.cost').toCompile();
    });
    it('O método energyType retorna uma string', () => {
      expect('Archetype.energyType').toCompile();
    });
  });

  describe('5 - Classes que herdam de Archetype', () => {
    describe('Cria a classe Mage que herda de Archetype', () => {
      it('A classe Mage existe', () => {
        expect('Mage.exists').toCompile();
      });

      it('A classe Mage herda de Archetype', () => {
        expect('Mage.extends').toCompile();
      });

      it('O parâmetro name da classe "Mage" pode ser lido', () => {
        expect('Mage.name').toCompile();
      });

      // it('O método energyType da Classe Mage existe e retorna uma string', () => {
      //   const mage = new Archetypes.Mage('');
      //   expect(mage.energyType).toEqual('mana');
      // });
    });

    describe('Cria a classe Necromancer que herda de Archetype', () => {
      it('A classe Necromancer existe', () => {
        expect('Necromancer.exists').toCompile();
      });

      // it('A classe Necromancer herda de Archetype', () => {
      //   const necromancer = new Archetypes.Necromancer('');
      //   expect(necromancer).toBeInstanceOf(Archetype);
      // });

      it('O parâmetro name da classe Necromancer pode ser lido', () => {
        expect('Necromancer.name').toCompile();
      });

      // it('O parâmetro energyType da classe Necromancer pode ser lido', () => {
      //   const necromancer = new Archetypes.Necromancer('');
      //   expect(necromancer.energyType).toEqual('mana');
      // });
    });

    describe('Cria a classe Ranger que herda de Archetype', function () {
      it('A classe Ranger existe', () => {
        expect('Ranger.exists').toCompile();
      });

      // it('A classe Ranger herda de Archetype', () => {
      //   const ranger = new Archetypes.Ranger('');
      //   expect(ranger).toBeInstanceOf(Archetype);
      // });

      it('O parâmetro name da classe Ranger pode ser lido', () => {
        expect('Ranger.name').toCompile();
      });

      // it('O parâmetro energyType da classe Ranger pode ser lido', () => {
      //   const ranger = new Archetypes.Ranger('');
      //   expect(ranger.energyType).toEqual('stamina');
      // });
    });

    describe('Cria a classe Warrior que herda de Archetype', function () {
      it('A classe Warrior existe', () => {
        expect('Warrior.exists').toCompile();
      });

      // it('A classe Warrior herda de Archetype', () => {
      //   const warrior = new Archetypes.Warrior('');
      //   expect(warrior).toBeInstanceOf(Archetype);
      // });

      it('O parâmetro name da classe Warrior pode ser lido', () => {
        expect('Warrior.name').toCompile();
      });

      //  it('O parâmetro energyType da classe Warrior pode ser lido', () => {
      //   const warrior = new Archetypes.Warrior('');
      //   expect(warrior.energyType).toEqual('stamina');
      //  });
    });
  });
});
