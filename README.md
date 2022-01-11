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
- destreza

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

### 1 - Crie a classe `Archetype`

 - O arquivo deverá estar na pasta `src/Archetypes`.
 - Dentro do nosso universo, cada pessoa terá sua função. Por isso, sua primeira quest será criar uma classe abstrata `Archetype`, onde deverá ter todos os atributos e métodos listados abaixo:

 ```typescript
 name:string
 ```

 - Além disso, será verificado se:
   - A classe `Archetype` existe;
   - O parâmetro `name` da classe `Archetype` pode ser lido;

### 2 - Crie classes que herdam de `Archetype`

 - Os arquivos deverão estar na pasta `src/Archetypes`.
 - Dentre as funções que uma pessoa pode escolher, ela poderá ser uma **guerreira**, **maga** ou **"tanque"**.
 - São características das pessoas guerreiras causar dano com sua força, usando ``stamina``;
 - São características das pessoas magas causar dano com magia, usando ``mana``;
 - São características das pessoas "tanques" ter defesas altas, mas com pouco ataque;
 - Será verificado se:
   - A classe `Mage` existe;
   - É possível criar um objeto da classe `Mage` corretamente;
   - A classe `Warrior` existe;
   - É possível criar um objeto da classe `Warrior` corretamente;
   - A classe `Tank` existe;
   - É possível criar um objeto da classe `Tank` corretamente;

### 3 - Crie a classe `Race`

 - Nesse universo, viajantes de todas as suas partes chegam em nosso reino. Não há algo melhor do que vermos a incrível diversidade que temos, com características únicas de cada pessoa.
 - Por isso, sua terceira quest será criar uma classe abstrata `Race`, onde deverá ter todos os atributos e métodos listados abaixo:

 ```typescript
 name:string // O atributo deverá ser privado, acessado por um get()
 maxLifePoints(): number // O método deverá ser um get()
 ```

 - Além disso, será verificado se:
   - A classe `Race` existe;
   - O parâmetro `name` da classe `Race` pode ser lido
   - O método `maxLifePoints` retorna um valor numérico
