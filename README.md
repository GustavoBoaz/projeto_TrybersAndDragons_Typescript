# sd-0x-project-trybers-and-dragons

#### O que é uma classe ("arquétipo")
A classe descreve de modo geral a vocação de um personagem, seus talentos especiais e quais táticas empregará com maior probabilidade ao explorar uma masmorra, combater monstros ou se envolver em uma negociação acalorada.

Todo ser possui uma `Raça` e um `Arquétipo`. Esse ser vai ser uma interface e tanto `Raça` quanto `Arquétipo` serão interfaces.

## Requisitos:

### 1 - Crie uma interface `Personagem`

Crie uma interface `Personagem`, que deve possuir os atributos:

- vida: number
- força: number
- inteligência: number
- agilidade: number
- destreza: number
- ataque(): void
- ataqueEspecial(): void // Do arquétipo
- energia: 'mana' | 'stamina' // Do arquétipo Mago com mana, Guerreiro com stamina

### ? PRINCÍPIO I - Segregue a interface `Personagem` nas interfaces `Raça` e `Arquétipo`

A interface `Raça` deve ficar com os atributos:

- vida
- força
- inteligência
- agilidade
- furtividade

A interface `Arquétipo` deve ficar com os atributos:

- ataque
- ataqueEspecial
- energia

A interface `Personagem` deve estender as interfaces `Raça` e `Arquétipo`

Crie uma coisa que implemente somente a `Raça`

### Crie uma classe

Criar a classe `Personagem` que implementa as duas interfaces acima

### Requisito para criar um objeto

- Crie um novo personagem `meuPersonagem`
- Os atributos não podem ser menores que zero e maiores que as características dos arquétipos

* Criar alguns objetos de uma classe que já existe e acessar alguns métodos (abstração)
  Ter uma interface inicial com `Raça` (com as classes humano, elfo, hobbit implementando-a) e `Arquétipo` (Bárbaro, ranger, mago, bardo)

### Teste do pilar Abstração

### Teste do pilar Encapsulamento

### Teste do pilar Herança

### Teste do pilar Polimorfismo

### Teste do princípio S

### Teste do princípio O

Será dada uma função que funciona para um caso em específico, e o teste vai utilizá-la em um contexto diferente.
A pessoa deverá tornar a função mais genérica por meio da aplicação do princípio O.

### Teste do princípio L

### Teste do princípio I

### Teste do princípio D


* Requisito obrigatório
! Requisito bônus
- Separa um tema
- 
Requisitos:

* Criar alguns objetos de uma classe que já existe e acessar alguns métodos (abstração)
- Criar uma classe (abstração)
  * Colocar atributos públicos
  * Criar métodos públicos
- Incrementar a classe (encapsulamento)
  * Colocar atributos privados 
  * Criar métodos privados
! Fazer uma classe utilizar outra (composição)
* Criar 3 classes diferentes
  ! Instanciar alguns objetos da classe criada
  * Modificar um atributo comum das 3 (herança)
  * Criar uma classe abstrata para centralizar a modificação do requisito anterior (polimorfismo)
- Refatorar
  ! Trazer objetos js para classe (transformando funções externas em métodos)
  - Princípios SOLID:
    - S:
      * Separar uma classe em duas (com objetivos distintos)
      ! Separar um arquivo em dois (para conter as classes separadas) 
    * O: Um método que checa a instância de uma das 3 classes criadas com o uso de um if precisa aceitar uma nova classe (gerada pelo teste)
    * L: Sobreescrita de método com uso do super, mantendo o funcionamento geral e a assinatura 
    * I: Uma interface complexa precisa ser dividida em duas
    * D: A criação de um objeto de uma das 3 classes criadas deixa de ser feita dentro de uma classe que a utiliza, e esta passa a receber o objeto criado como parâmetro
Sugestões de implementação:
L: Um player precisa poder saber somente alguns atributos específicos do inimigo, portanto precisa de uma interface duplicada, uma pra um readonly e outra contendo todas as informações.

## Entrando no Universo de T&D

### Personagens

 - No universo de T&D, cada ser que anda por estas terras pertence a uma **raça** e possui um **arquétipo**.
 - As diversas raças (como, por exemplo, a Élfica, a Orc ou Placeholder) definem as características de um personagem desde a sua criação, como sua vida, força ou agilidade.
 - Já os arquétipos definem, de modo geral, a vocação de um personagem, suas habilidades e visão de mundo: como enfrentam as situações, exploram masmorras e cavernas ou enfrentam monstros ~~fofinhos~~. Aqui, as pessoas podem ser guerreiras, magas ou "tanques".
 - Cabe a você, nobre ~~dev~~ ser, explorar essas terras e cumprir as quests que surgirão ao longo de sua incrível ~~jornada~~ leitura do README:

### 1 - Crie a classe `Race`

Todo ser necessariamente pertence a uma raça. No universo de Trybers and Dragons, embora todas as raças de personagens sejam humanóides, cada uma tem suas particularidades. A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos seres deste universo.

Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de criar a classe abstrata `Race`.

Para que você tenha sucesso nesta quest, deve se certificar que:

- Os arquivos sejam criados no diretório `src/Races`.
- As classes deverão ter um `getter` chamado `maxLifePoints`, que retorna a quantidade máxima de pontos de vida da raça.

 <!-- TODO: Caso a interface Fighter seja mesmo desnecessária para o projeto, seus atributos deverão ser transferidos para a classe `Race` -->

 ```typescript
 name: string
 maxLifePoints(): number
 ```

- O que será verificado:
  - A classe `Race` existe;
  - O parâmetro `name` da classe `Race` pode ser lido
  - O método `maxLifePoints` retorna um valor numérico;

⚠ Atenção: para que os testes funcionem corretamente, a classe `Race` deve ser exportada de forma padrão (export default) no arquivo `src/Races/index.ts` ⚠

### 2 - Crie classes que herdam de `Race`

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda quest, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante que você saiba que:

 - Os arquivos deverão ser criados no diretório `src/Races`.
 - Todas as raças estendem a classe `Race`;
 - As classes criadas deverão ser `Dwarf`, `Elf`, `Halfling` e `Orc`
 
 - O que será verificado:
   - A classe `Dwarf` existe;
   - A classe `Elf` existe;
   - A classe `Halfling` existe;
   - A classe `Orc` existe;
   - É possível criar um objeto da classe `Dwarf` corretamente;
   - É possível criar um objeto da classe `Elf` corretamente;
   - É possível criar um objeto da classe `Halfling` corretamente;
   - É possível criar um objeto da classe `Orc` corretamente;
   - O parâmetro name da classe `Dwarf` pode ser lido;
   - O parâmetro name da classe `Elf` pode ser lido;
   - O parâmetro name da classe `Halfling` pode ser lido;
   - O parâmetro name da classe `Orc` pode ser lido;
   - O parâmetro `maxLifePoints` existe na classe `Dwarf`e possui valor entre 75 e 80;
   - O parâmetro `maxLifePoints` existe na classe `Elf`e possui valor entre 95 e 99;
   - O parâmetro `maxLifePoints` existe na classe `Halfling`e possui valor entre 50 e 60;
   - O parâmetro `maxLifePoints` existe na classe `Orc`e possui valor entre 70 e 80;

- Testar polimorfismo

### 3 - Crie a interface `Energy`

⚠ Atenção: para que os testes funcionem corretamente, o arquivo deverá ser criado na raiz do diretório `src`, a interface `Energy` deve ser exportada de forma padrão (export default).

- Para implementar a interface `Energy`, é necessário criar um type `EnergyType` que poderá ser definido como `'mana'` ou `'stamina'`

- Crie uma interface Energy, que deve possuir os seguintes atributos:

  - type_: EnergyType
  - amount: number

O que será verificado:
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'mana'`
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'stamina'`
  - É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor `{ amount: 100, type_: 'stamina'}`
  - É possível criar uma variável com o tipo da interface Energy e atribuir a ela o valor `{ amount: 45, type_: 'mana'}`

### 4 - Crie a classe `Archetype`

Dentro do nosso universo, cada ser tem seus talentos especiais. Por isso, sua próxima quest será criar a classe abstrata `Archetype`.

⚠ Atenção: para que os testes funcionem corretamente, o arquivo deverá ser criado no diretório `src/Archetypes` e classe `Archetypes` deve ser exportada de forma padrão (export default) no arquivo `src/Archetypes/index.ts` ⚠

- Essa classe deverá conter os atributos `special` e `cost`, ambos do tipo `number`, que representarão a potência de seu ataque especial e o custo energético para utilizá-lo, respectivamente.
- A classe também deverá ter um `getter` energyType, que retorna o tipo de energia do personagem.
- O construtor da classe recebe o atributo `name`, que será uma `string` e representará o nome de um dos arquetipos existentes no universo de D&T.

 - O que será verificado:
   - A classe `Archetype` existe;
   - O parâmetro `name` da classe `Archetype` pode ser lido;

### 5 - Crie classes que herdam de `Archetype`

Como você pode imaginar, há diversos arquétipos diferentes no mundo de Trybers and Dragons, cada um com suas peculiaridades e alinhamentos. Agora, chegou a hora de você conhecer alguns deles e o que poderia ser melhor para isso do que criar classes para eles? Mas antes disso, tenha atenção às seguintes instruções:

 - Os arquivos deverão ser criados no diretório `src/Archetypes`;
 - Todas os arquétipos estendem a classe `Archetype`;
 - No momento, vamos nos ater a quatro arquétipos muito comuns nos seres deste universo: **Mage** 🧙‍♀️, **Necromancer** ☠️, **Warrior** ⚔️ ou **Ranger** 🍃;
 - São características dos seres dos arquétipos `Mage` e `Necromancer` causar dano em seus inimigos por meio de magia, através do uso de`mana`;
 - São características dos seres dos arquétipos `Warrior` e `Ranger` causar dano em seus inimigos por meio de sua força, usando `stamina` para isso;

 - O que será verificado:
   - A classe `Mage` existe;
   - A classe `Necromancer` existe;
   - A classe `Warrior` existe;
   - A classe `Ranger` existe;
   - É possível criar um objeto da classe `Mage` corretamente;
   - É possível criar um objeto da classe `Necromancer` corretamente;
   - É possível criar um objeto da classe `Warrior` corretamente;
   - É possível criar um objeto da classe `Ranger` corretamente;
   - O tipo de energia do arquétipo `Mage` é 'mana';
   - O tipo de energia do arquétipo `Necromancer` é 'mana';
   - O tipo de energia do arquétipo `Warrior` é 'stamina';
   - O tipo de energia do arquétipo `Ranger` é 'stamina';

### 6 - Criar a interface `Fighter`

<!-- TODO: Confirmar a necessidade dessa interface para o andamento geral do projeto -->

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito, preparamos para você a missão especial de criar a interface `Fighter`. Mas não se preocupe, não deixaremos você dar mais nem um passo sem as informações necessárias para tirar isso de letra! Observe:

 - O arquivo deverá ser criado na raiz do diretório `src`;
 - A interface deverá ter os atributos:

  ```typescript
  lifePoints: number;
  strength: number;
  defense: number;
  dexterity: number;
  energy: Energy;
  ```
 - O atributo `energy` deverá ser do tipo `Energy`, definido no arquivo `src/Energy.ts`.
 - A interface deverá ter o método `receiveDamage`, que recebe um parâmetro do tipo `number` e retorna também um valor do tipo `number`;


### 7 - Crie a classe `Character`

Maravilha! Agora já temos tanto nossas raças quanto nossos arquétipos e interface definidos, mas antes de sair por aí entrando em tavernas e calabouços, temos outra quest: criar um personagem!

 - O atributo `life` deve ser privado, acessado por um `get()` e um `set()`;
 - O atributo `life` não pode ser maior que o máximo definido pela raça;
 

### 8 - Estenda a classe `Battle`

 - Testar LSP
 - O arquivo está em `src/placeholder`

### 9
⚠ Atenção: para que os testes funcionem corretamente, o arquivo deverá ser criado na raiz do diretório `src`, a interface `Fighter` deve ser exportada de forma padrão (export default) ⚠


### 10

### 11
