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
      it('O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Mage', () => {
        expect('Mage.createdArchetypeInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });

      it('A classe Mage existe', () => {
        expect('Mage.exists').toCompile();
      });

      it('A classe Mage herda de Archetype', () => {
        expect('Mage.extends').toCompile();
      });

      it('O parâmetro name da classe "Mage" pode ser lido', () => {
        expect('Mage.name').toCompile();
      });

      it('O método energyType da Classe Mage existe e retorna uma string', () => {
        expect('Mage.energyType').toCompileAndBeEqualTo('mana');
      });
    });

    describe('Cria a classe Necromancer que herda de Archetype', () => {
      it('O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Necromancer', () => {
        expect('Necromancer.createdArchetypeInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });

      it('A classe Necromancer existe', () => {
        expect('Necromancer.exists').toCompile();
      });

      it('A classe Necromancer herda de Archetype', () => {
        expect('Necromancer.extends').toCompile();
      });

      it('O parâmetro name da classe Necromancer pode ser lido', () => {
        expect('Necromancer.name').toCompile();
      });

      it('O parâmetro energyType da classe Necromancer pode ser lido', () => {
        expect('Necromancer.energyType').toCompileAndBeEqualTo('mana');
      });
    });

    describe('Cria a classe Ranger que herda de Archetype', function () {
      it('O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Ranger', () => {
        expect('Ranger.createdArchetypeInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });

      it('A classe Ranger existe', () => {
        expect('Ranger.exists').toCompile();
      });

      it('A classe Ranger herda de Archetype', () => {
        expect('Ranger.extends').toCompile();
      });

      it('O parâmetro name da classe Ranger pode ser lido', () => {
        expect('Ranger.name').toCompile();
      });

      it('O parâmetro energyType da classe Ranger pode ser lido', () => {
        expect('Ranger.energyType').toCompileAndBeEqualTo('stamina');
      });
    });

    describe('Cria a classe Warrior que herda de Archetype', function () {
      it('O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Warrior', () => {
        expect('Warrior.createdArchetypeInstances').toCompileAndBeEqualTo([1, 2, 3]);
      });

      it('A classe Warrior existe', () => {
        expect('Warrior.exists').toCompile();
      });

      it('A classe Warrior herda de Archetype', () => {
        expect('Warrior.extends').toCompile();
      });

      it('O parâmetro name da classe Warrior pode ser lido', () => {
        expect('Warrior.name').toCompile();
      });

       it('O parâmetro energyType da classe Warrior pode ser lido', () => {
        expect('Warrior.energyType').toCompileAndBeEqualTo('stamina');
       });
    });
  });
});
