describe('Archetype', () => {
  describe('3- Classe Archetype', () => {
    it('A classe Archetype existe', () => {
      expect('Archetypes.exists.ts').toCompile();
    });

    it('O parâmetro name da classe Archetype pode ser lido', () => {
      expect('Archetypes.name.ts').toCompile();
    });

    it('O parâmetro special da classe Archetype pode ser lido', () => {
      expect('Archetypes.special.ts').toCompile();
    });

    it('O parâmetro cost da classe Archetype pode ser lido', () => {
      expect('Archetypes.cost.ts').toCompile();
    });

    it('O método energyType retorna uma string', () => {
      expect('Archetypes.energyType.ts').toCompile();
    });
  });

  describe('4- Classes que herdam de Archetype', () => {
    describe('Cria a classe Mage que herda de Archetype', () => {
      it('A classe Mage existe', () => {
        expect('Mage.exists.ts').toCompile();
      });

      // it('A classe Mage herda de Archetype', () => {
      //   const mage = new Archetypes.Mage('');
      //   expect(mage).toBeInstanceOf(Archetype);
      // });

      it('O parâmetro name da classe "Mage" pode ser lido', () => {
        expect('Mage.name.ts').toCompile();
      });

      // it('O método energyType da Classe Mage existe e retorna uma string', () => {
      //   const mage = new Archetypes.Mage('');
      //   expect(mage.energyType).toEqual('mana');
      // });
    });

    describe('Cria a classe Necromancer que herda de Archetype', () => {
      it('A classe Necromancer existe', () => {
        expect('Necromancer.exists.ts').toCompile();
      });

      // it('A classe Necromancer herda de Archetype', () => {
      //   const necromancer = new Archetypes.Necromancer('');
      //   expect(necromancer).toBeInstanceOf(Archetype);
      // });
    
      it('O parâmetro name da classe Necromancer pode ser lido', () => {
        expect('Necromancer.name.ts').toCompile();
      });

      // it('O parâmetro energyType da classe Necromancer pode ser lido', () => {
      //   const necromancer = new Archetypes.Necromancer('');
      //   expect(necromancer.energyType).toEqual('mana');
      // });
    });

    describe('Cria a classe Ranger que herda de Archetype', function () {
      it('A classe Ranger existe', () => {
        expect('Ranger.exists.ts').toCompile();
      });
    
      // it('A classe Ranger herda de Archetype', () => {
      //   const ranger = new Archetypes.Ranger('');
      //   expect(ranger).toBeInstanceOf(Archetype);
      // });

      it('O parâmetro name da classe Ranger pode ser lido', () => {
        expect('Ranger.name.ts').toCompile();
      });

      // it('O parâmetro energyType da classe Ranger pode ser lido', () => {
      //   const ranger = new Archetypes.Ranger('');
      //   expect(ranger.energyType).toEqual('stamina');
      // });
    });

    describe('Cria a classe Warrior que herda de Archetype', function () {
      it('A classe Warrior existe', () => {
        expect('Warrior.exists.ts').toCompile();
      });

      // it('A classe Warrior herda de Archetype', () => {
      //   const warrior = new Archetypes.Warrior('');
      //   expect(warrior).toBeInstanceOf(Archetype);
      // });

      it('O parâmetro name da classe Warrior pode ser lido', () => {
        expect('Warrior.name.ts').toCompile();
      });

    //  it('O parâmetro energyType da classe Warrior pode ser lido', () => {
    //   const warrior = new Archetypes.Warrior('');
    //   expect(warrior.energyType).toEqual('stamina');
    //  });
    });
  });
});
