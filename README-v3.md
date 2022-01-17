## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto Trybers and Dragons!

Você já usa o _GitHub_ diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Tenha atenção a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Sumário

- [Boas vindas ao repositório do projeto Trybers and Dragons!](#boas-vindas-ao-repositório-do-projeto-trybers-and-dragons)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Linter](#linter)
  - [Testes](#testes)
    - [Dica: desativando testes](#dica-desativando-testes)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
    - [1 - Crie um endpoint para o cadastro de pessoas usuárias](#1---Crie-um-endpoint-para-o-cadastro-de-pessoas-usuárias)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos finais](#avisos-finais)

---

# Habilidades

Neste projeto, você será capaz de:

---

# Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/fundamentals/git) sempre que precisar!

---

## O que deverá ser desenvolvido

---

## Desenvolvimento

⚠️ **Dicas Importantes** ⚠️:

---

## Data de Entrega

    - Será `X` dia de projeto.
    - Data de entrega para avaliação final do projeto: `DD/MM/YYYY - 14:00h`.

---

# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório

- `git clone https://github.com/tryber/sd-0x-project-trybers-and-dragons.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-0x-project-trybers-and-dragons`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-0x-project-trybers-and-dragons`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-trybers-and-dragons`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-trybers-and-dragons/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-trybers-and-dragons/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

- Faça `commits` das alterações que você fizer no código regularmente.

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto.

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

**⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️**

**👀 Observações importantes:**

---

## Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto, basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em _extensions_ e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## Testes

Para executar os testes localmente, digite no terminal o comando `npm test`.

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `describe`. Como o nome indica, esta função "pula" um teste:

```typescript
```

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

<!-- ![Testando um arquivo específico](./public/skip-tests.jpeg) -->

⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. **Testes ignorados serão tratados como testes falhando**. ⚠️

⚠️ **Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório**. ⚠️

---

# Requisitos do projeto

## Contextualizando

 - No universo de Trybers and Dragons, cada ser que anda por estas terras pertence a uma **raça** e possui um **arquétipo**.
 - As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características de um personagem desde a sua criação, como sua média de longevidade, agilidade ou mesmo altura.
 - Já os arquétipos definem, de modo geral, a vocação de um personagem, suas habilidades e visão de mundo: como enfrentam as situações, exploram masmorras ou enfrentam monstros. Aqui, as pessoas podem ser guerreiras, magas ou guardiãs, para dar alguns exemplos.
 - Cabe a você, nobre ~~dev~~, explorar essas terras e cumprir as quests que surgirão ao longo de sua incrível ~~jornada~~ leitura do README.

**_ Now, follow ~~the blind~~ the master!_**

## Requisitos Obrigatórios

### 1 - Crie a classe `Race`

Todo ser necessariamente pertence a uma raça. No universo de Trybers and Dragons - T&D, embora todas as raças de personagens sejam humanóides, cada uma tem suas particularidades. A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos seres deste universo.

Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de **criar a classe abstrata `Race`**.

Para que você tenha sucesso nesta _quest_, deve se certificar que:

- Os arquivos sejam criados no diretório `src/Races`.
- `Race` tenha os atributos privados `name` e `dexterity`, ambos inicializados em seu construtor.
- A classe deverá ter um `getter` abstrato chamado `maxLifePoints`, que retorna um number. Esse número é correspondente a quantidade máxima de pontos de vida da raça.
- A classe também deverá ter `getters` para acessar os valores de `name` e `dexterity`.

 ```typescript
 name: string;
 dexterity: number;
 maxLifePoints(): number
 ```

- O que será verificado:
  - A classe `Race` existe;
  - O parâmetro `name` da classe `Race` pode ser lido;
  - O parâmetro `dexterity` da classe `Race` pode ser lido;
  - O método `maxLifePoints` retorna um valor numérico;

⚠ Atenção: para que os testes funcionem corretamente, a classe `Race` deve ser importada no no arquivo `src/Races/index.ts` e exportada lá de forma padrão (export default).  ⚠


### 2 - Crie classes que herdam de `Race`

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas. Nesta segunda _quest_, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante que você saiba que:

 - Os arquivos deverão ser criados no diretório `src/Races`.
 - Todas as raças estendem a classe `Race`;
 - As classes criadas deverão ser `Dwarf`, `Elf`, `Halfling` e `Orc` e devem estar em arquivos de mesmo nome.
 
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

⚠ Atenção: para que os testes funcionem corretamente, cada uma das classes criadas para este requisito deve ser importada no no arquivo `src/Races/index.ts` e lá exportas. ⚠

### 3 - Crie a interface `Energy`

Energia é um atributo vital para todos os seres. A energia gasta ao andar, nadar, escalar ou lutar é chamada de stamina no contexto de Trybers and Dragons. No entanto, este universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta ao utilizar magias é chamada de 'mana'.

Sua próxima missão é tornar possível o uso dessas energias. Para isso:

- Crie uma interface Energy, que deve possuir os seguintes atributos:

  - type_: EnergyType
  - amount: number

✨ Dica de mestre: 

- O arquivo deverá ser criado na raiz do diretório `src`.
- O nome do arquivo deverá ser `Energy.ts`;
- Para implementar a interface `Energy`, é necessário criar um type `EnergyType` que poderá ser definido como `'mana'` ou `'stamina'`

O que será verificado:
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'mana'`
  - É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'stamina'`
  - Não possível criar uma variável com o tipo `EnergyType` e atribuir a ela um valor diferente de `'mana'` ou `'stamina'`.


<!-- TODO: Verificar se a necessidade de dois 'its' verificando a possibilidade de criar uma variável com _type 'stamina' no teste deste requisito  -->

⚠ Atenção: Para que os testes funcionem corretamente, a interface `Energy` deve ser exportada de forma padrão (export default).

### 4 - Crie a classe `Archetype`

Dentro do nosso universo, cada ser tem seus talentos especiais. Por isso, sua próxima _quest_ será **criar a classe abstrata `Archetype`**.

- Essa classe deverá conter os atributos `special` e `cost`, ambos do tipo `number`, que representarão a potência de seu ataque especial e o custo energético para utilizá-lo, respectivamente.
- A classe também deverá ter um `getter` energyType, que retorna o tipo de energia do personagem.
- O construtor da classe recebe o atributo `name`, que será uma `string` e representará o nome de um dos arquetipos existentes no universo de D&T.

 - O que será verificado:
   - A classe `Archetype` existe;
   - O parâmetro `name` da classe `Archetype` pode ser lido;

⚠ Atenção: para que os testes funcionem corretamente, o arquivo deverá ser criado no diretório `src/Archetypes` e a classe `Archetypes` deve ser importada no arquivo `src/Archetypes/index.ts` e lá exportada de forma padrão (export default). ⚠

### 5 - Crie classes que herdam de `Archetype`

Como você pode imaginar, há diversos arquétipos diferentes no mundo de _Trybers and Dragons_, cada um com suas peculiaridades e alinhamentos. Agora, chegou a hora de você conhecer alguns deles e o que poderia ser melhor para isso do que criar classes para eles? Mas antes, tenha atenção às seguintes instruções:

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

⚠ Atenção: para que os testes funcionem corretamente, cada uma das classes criadas para este requisito deve ser importada no no arquivo `src/Archetypes/index.ts` e lá exportas. ⚠

### 6 - Criar a interface `Fighter`

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos e personalidades pode não ser um lugar sempre amigável. Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas. Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito, preparamos para você a missão especial de criar a interface `Fighter`. Mas não se preocupe, não deixaremos você dar mais nem um passo sem as informações necessárias para tirar isso de letra! Observe:

 - O arquivo deverá ser criado na raiz do diretório `src`;
 - A interface deverá ter os atributos e métodos:

  ```typescript
  lifePoints: number;
  strength: number;
  defense: number;
  energy: Energy;
  attack();
  receiveDamage();
  ```

 - O atributo `energy` deverá ser do tipo `Energy`, definido no arquivo `src/Energy.ts`.
 - O método `attack`, que recebe outro ser do tipo `Fighter` como parâmetro e não retorna nada;
 - O método `receiveDamage`, que recebe um parâmetro do tipo `number` e retorna também um valor do tipo `number`;

⚠ Atenção: Para que os testes funcionem corretamente, a interface `Fighter` deve ser exportada de forma padrão (export default).

### 7 - Crie a classe `Character`

Maravilha! Agora já temos tanto nossas raças quanto nossos arquétipos e interfaces definidos, mas antes de sair por aí entrando em tavernas e calabouços, temos outra _quest_: **criar um personagem**!

O personagem será composto tanto por uma raça quanto por um arquétipo. Ele é a unidade mais pe  u

 - O arquivo deverá ser criado na raiz do diretório `src`;
 - A interface deverá ter os atributos e métodos:
 - O atributo `life` deve ser privado e possuir um `getter()` e um `setter()`;
 - O atributo `life` não pode ser maior que o máximo definido pela raça;
 

### 8 - Criar a classe `Battle`

 - Testar LSP
 - O arquivo está em `src/placeholder`

### 9 - Criar a classe `Monster` segrega interface

 - O arquivo deverá ser criado na raiz do diretório `src`;
 - classe `Monster` deverá exportada de forma padrão (export default).
 - A classe `Monster` deve implementar a interface `Fighter`
  - A classe `Monster` deverá ter os seguintes atributos:
    - `lifePoints` deve ser privado e possuir o valor 85;
    - `strength` deve ser privado e possuir o valor 63;
    - `defense` deve ser privado e possuir o valor 0;
 - A classe `Monster` deverá implementar o método `attack`;
 - A classe `Monster` deverá implementar o método `receiveDamage`;

- O método `attack`, recebe como parâmetro outro ser do tipo `Fighter` como parâmetro e deverá causar danos ao mesmo;
  - exemplo: Após `Monster` atacar um `Character` o `lifePoints` de `Character` deverá ser menor do que antes do ataque.

- O método `receiveDamage`, recebe um parâmetro do tipo `number` e retorna também um valor do tipo `number` que se refere ao `lifePoints` após receber um ataque;
  - exemplo: Após `Monster` sofrer um ataque de `Character` o `lifePoints` de `Monster` deverá ser menor do que antes de receber o ataque.

 O que será verificado:
   - A classe `Monster` existe;
   - O atributo `lifePoints` existe;
   - O atributo `strength` existe;
   - O atributo `defense` existe;
   - `Monster` pode sofrer um ataque;
   - `Monster` pode realizar um ataque;

### 10 - Criar objetos `Monster` e `Character`

### 11- volta pra battle

