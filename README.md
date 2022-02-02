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

- Exercitar o conhecimento dos pilares da `Programação Orientada a Objetos`: `Herança`, `Abstração`, `Encapsulamento` e `Polimorfismo`;
- Exercitar a utilização de `Composição`;
- Exercitar a criação e utilização de `Interfaces`;
- Implementar, em `TypeScript`, `Classes`, `Instâncias`, `Atributos`, `Métodos` e `Objetos`;
- Exercitar o conhecimento por meio da aplicação dos princípios `SOLID`.

---

# Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/fundamentals/git) sempre que precisar!

---

## O que deverá ser desenvolvido

---

## Desenvolvimento

⚠️ **Dicas Importantes** ⚠️:

- Durante a execução dos testes, serão criados arquivos .js no repositório do projeto
  - Ao final da execução de cada teste é rodado um script que apaga todos os arquivos .js do repositório (com exceção dos que já vão com o projeto)
  - O script utiliza o binário `find` do linux
  - Em ambiente Windows, o `find` utilizado é o que vem na instalação do git (`C:/Program Files/Git/usr/bin/find.exe`)

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

2. Instale as dependências

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
describe.skip('...', () => {})
```

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

<!-- ![Testando um arquivo específico](./public/skip-tests.jpeg) -->

⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. **Testes ignorados serão tratados como testes falhando**. ⚠️

⚠️ **Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório**. ⚠️

---

# Requisitos do projeto

## Contextualizando

- No universo de Trybers and Dragons, a maioria dos seres que andam por estas terras pertencem a uma **raça**
- As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características dos personagens desde a sua criação, como seus pontos de vida e sua destreza
- Alguns seres também possuem uma **energia**, e ao treinarem o uso da energia passam a possuir um **arquétipo**
- Os arquétipos definem, de modo geral, a vocação de um personagem, suas habilidades e visão de mundo:
  - Como enfrentam as situações, exploram masmorras ou enfrentam monstros
  - Aqui, os seres podem ser guerreiros, magos ou necromantes, para dar alguns exemplos
- Alguns seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos
- Existem seres denominados **monstros** que não possuem uma raça específica, mas podem lutar
- Em diversas ocasiões podem acontecer lutas entre personagens diversos, bem como entre personagens e monstros
- Cabe a você, nobre ~~dev~~, explorar essas terras e cumprir as quests que surgirão ao longo de sua incrível ~~jornada~~ leitura do README

**_Now, follow ~~the blind~~ the master!_**

## Requisitos Obrigatórios

### 1 - Crie a classe `Race`

Quase todos os seres pertencem a uma raça.
No universo de Trybers and Dragons - T&D, embora todas as raças de personagens sejam humanoides, cada uma tem suas particularidades.
A raça influencia desde a aparência geral até fatores como longevidade média, talento em determinadas habilidades ou mesmo a presença de algum sentido mais aguçado nos seres deste universo.

Para entender melhor um pouco da incrível diversidade que temos e as características únicas de algumas das raças de T&D, vamos começar nossa jornada com a missão de **criar a classe abstrata `Race`**.

Para que você tenha sucesso nesta _quest_, deve se certificar que:

- Os arquivos sejam criados no diretório `src/Races`.
- `Race` tenha os atributos privados `name` e `dexterity`, ambos inicializados em seu construtor.
- A classe `Race` deverá ter um método estático chamado `createdRacesInstances` que retorna um number.
  - Esse número é correspondente a quantidade de instâncias criadas a partir das classes estendidas de `Race`. Porém na classe `Race` levantará apenas uma mensagem de erro.
- A classe deverá ter um `getter` abstrato chamado `maxLifePoints`, que retorna um number. Esse número é correspondente a quantidade máxima de pontos de vida da raça.
- A classe também deverá ter `getters` para acessar os valores de `name` e `dexterity`.

 ```typescript
 name: string;
 dexterity: number;
 maxLifePoints(): number
 ```

- O que será verificado:
  - A classe `Race` existe;
  - A classe `Race` é abstrata;
  - O método `maxLifePoints` da classe `Race` é abstrato;
  - O parâmetro `name` da classe `Race` pode ser lido;
  - O parâmetro `name` da classe `Race` *NÃO* pode ser alterado;
  - O parâmetro `dexterity` da classe `Race` pode ser lido;
  - O parâmetro `dexterity` da classe Race *NÃO* pode ser setado;
  - O método `maxLifePoints` retorna um valor numérico;
  - O método `createdRacesInstances` deve existir e ser estático;
  - O método `createdRacesInstances` deve levantar um erro "Not implemented"

⚠ Atenção: para que os testes funcionem corretamente, a classe `Race` deve ser importada no arquivo `src/Races/index.ts` e exportada lá de forma padrão (export default).  ⚠

### 2 - Crie classes que herdam de `Race`

Já foi dito anteriormente que há uma diversidade de raças neste universo e agora chegou a hora de você saber mais a respeito de algumas delas.
Nesta segunda _quest_, você irá criar classes para quatro raças que existem no mundo de T&D.

Antes de prosseguir com a missão, é muito importante que você saiba que:

- Os arquivos deverão ser criados no diretório `src/Races`.
- Todas as raças estendem a classe `Race`;
- As classes criadas deverão ser `Dwarf`, `Elf`, `Halfling` e `Orc` e devem estar em arquivos de mesmo nome.

- O que será verificado:
  - A classe `Dwarf` existe;
  - A classe `Dwarf` herda de `Race`;
  - O parâmetro `name` da classe `Dwarf` pode ser lido;
  - O parâmetro `dexterity` da classe `Dwarf` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Dwarf`;
  - O parâmetro `maxLifePoints` da classe `Dwarf` existe e é igual a 80;
  - A classe `Elf` existe;
  - A classe `Elf` herda de `Race`;
  - O parâmetro `name` da classe `Elf` pode ser lido;
  - O parâmetro `dexterity` da classe `Elf` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Elf`;
  - O parâmetro `maxLifePoints` da classe `Elf` existe e é igual a 99;
  - A classe `Halfling` existe;
  - A classe `Halfling` herda de `Race`;
  - O parâmetro `name` da classe `Halfling` pode ser lido;
  - O parâmetro `dexterity` da classe `Halfling` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Halfling`;
  - O parâmetro `maxLifePoints` da classe `Halfling` existe e é igual a 60;
  - A classe `Orc` existe;
  - A classe `Orc` herda de `Race`;
  - O parâmetro `name` da classe `Orc` pode ser lido;
  - O parâmetro `dexterity` da classe `Orc` pode ser lido;
  - O método `createdRacesInstances` deve retornar o número correto de instâncias criadas da classe `Orc`;
  - O parâmetro `maxLifePoints` da classe `Orc` existe e é igual a 74;

⚠ Atenção: para que os testes funcionem corretamente, cada uma das classes criadas para este requisito deve ser importada no arquivo `src/Races/index.ts` e lá exportas. ⚠

### 3 - Crie a interface `Energy`

Energia é um atributo vital para a maioria dos seres.
A energia gasta ao andar, nadar, escalar ou lutar é chamada de stamina no contexto de Trybers and Dragons.
No entanto, este universo também abriga seres capazes de usar magia. Nesses casos, a energia gasta ao utilizar magias é chamada de 'mana'.

Sua próxima missão é tornar possível o uso dessas energias. Para isso:

- Crie uma interface Energy, que deve possuir os seguintes atributos:

  - type_: EnergyType
  - amount: number

✨ Dica de mestre:

- O arquivo deverá ser criado na raiz do diretório `src`.
- O nome do arquivo deverá ser `Energy.ts`;
- Para implementar a interface `Energy`, é necessário criar um type `EnergyType` que poderá ser definido como `'mana'` ou `'stamina'`

O que será verificado:

- É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'mana'`;
- É possível criar uma variável com o tipo `EnergyType` e atribuir a ela o valor `'stamina'`;
- É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 10, type_: 'stamina'}`;
- É possível criar uma variável com o tipo da interface `Energy` e atribuir a ela o valor `{ amount: 45, type_: 'mana'}`;
- Não possível criar uma variável com o tipo `EnergyType` e atribuir a ela um valor diferente de `'mana'` ou `'stamina'`;
- Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `amount`;
- Não é possível criar uma variável com o tipo da interface `Energy` sem atribuir a ela um `type_`

⚠ Atenção: Para que os testes funcionem corretamente, a interface `Energy` deve ser exportada de forma padrão (export default).

### 4 - Crie a classe `Archetype`

Dentro do nosso universo, os seres têm seus talentos especiais. Por isso, sua próxima _quest_ será **criar a classe abstrata `Archetype`**.

- Essa classe deverá conter os atributos `special` e `cost`, ambos do tipo `number`, que representarão a potência de seu ataque especial e o custo energético para utilizá-lo, respectivamente.
- A classe `Archetype` deverá ter um método estático chamado `createdArchetypesInstances` que retorna um number.
  - Esse número é correspondente a quantidade de instâncias criadas a partir das classes estendidas de `Archetype`. Porém na classe `Archetype` levantará apenas uma mensagem de erro.
- A classe também deverá ter um `getter` energyType, que retorna o tipo de energia do personagem.
- O construtor da classe recebe o atributo `name`, que será uma `string` e representará o nome de um dos arquétipos existentes no universo de D&T.

- O que será verificado:
  - A classe `Archetype` existe;
  - A classe `Archetype` é abstrata;
  - O parâmetro `name` da classe `Archetype` pode ser lido;
  - O parâmetro `name` da classe `Archetype` não pode ser alterado;
  - O parâmetro `special` da classe `Archetype` pode ser lido;
  - O parâmetro `cost` da classe `Archetype` pode ser lido;
  - O método `energyType` retorna uma string.

⚠ Atenção: para que os testes funcionem corretamente, o arquivo deverá ser criado no diretório `src/Archetypes` e a classe `Archetypes` deve ser importada no arquivo `src/Archetypes/index.ts` e lá exportada de forma padrão (export default). ⚠

### 5 - Crie classes que herdam de `Archetype`

Como você pode imaginar, há diversos arquétipos diferentes no mundo de _Trybers and Dragons_, cada um com suas peculiaridades e alinhamentos.
Agora, chegou a hora de você conhecer alguns deles e o que poderia ser melhor para isso do que criar classes para eles? Mas antes, tenha atenção às seguintes instruções:

- Os arquivos deverão ser criados no diretório `src/Archetypes`;
- Todas os arquétipos estendem a classe `Archetype`;
- No momento, vamos nos ater a quatro arquétipos muito comuns nos seres deste universo: **Mage** 🧙‍♀️, **Necromancer** ☠️, **Warrior** ⚔️ ou **Ranger** 🍃;
- São características dos seres dos arquétipos `Mage` e `Necromancer` causar dano em seus inimigos por meio de magia, através do uso de`mana`;
- São características dos seres dos arquétipos `Warrior` e `Ranger` causar dano em seus inimigos por meio de sua força, usando `stamina` para isso;

- O que será verificado:
  - A classe `Mage` existe
  - A classe `Mage` herda de `Archetype`
  - O parâmetro `name` da classe `Mage` pode ser lido
  - O método `energyType` da Classe `Mage` existe e retorna uma string
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Mage`
  - A classe `Necromancer` existe
  - A classe `Necromancer` herda de `Archetype`
  - O parâmetro `name` da classe `Necromancer` pode ser lido
  - O parâmetro `energyType` da classe `Necromancer` pode ser lido
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Necromancer`
  - A classe `Ranger` existe
  - A classe `Ranger` herda de `Archetype`
  - O parâmetro `name` da classe `Ranger` pode ser lido
  - O parâmetro `energyType` da classe `Ranger` pode ser lido
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Ranger`
  - A classe `Warrior` existe
  - A classe `Warrior` herda de `Archetype`
  - O parâmetro `name` da classe `Warrior` pode ser lido
  - O parâmetro `energyType` da classe `Warrior` pode ser lido
  - O método `createdArchetypeInstances` deve retornar o número correto de instâncias criadas da classe `Warrior`

⚠ Atenção: para que os testes funcionem corretamente, cada uma das classes criadas para este requisito deve ser importada no no arquivo `src/Archetypes/index.ts` e lá exportas. ⚠

### 6 - Criar a interface `Fighter`

Um universo tão rico e cheio de diferentes seres, com diferentes alinhamentos e personalidades pode não ser um lugar sempre amigável.
Por isso, seus habitantes têm que ser capazes de se defender ou de inventar artimanhas para se livrarem de brigas, confusões e armadilhas.
Sendo assim, podemos dizer que todos os seres de T&D são, em essência, lutadores.

Para fixar bem esse conceito, preparamos para você a missão especial de criar a interface `Fighter`.
Mas não se preocupe, não deixaremos você dar mais nem um passo sem as informações necessárias para tirar isso de letra! Observe:

- O arquivo deverá ser criado na raiz do diretório `src`;
- A interface deverá possuir os atributos:
  - lifePoints, do tipo number
  - strength, do tipo number
  - defense, do tipo number
  - energy, do tipo Energy
- A interface deverá possuir os métodos:
  - attack
  - special
  - receiveDamage
  - levelUp

- O que será verificado:
  - A interface `Fighter` existe;
  - A interface `Fighter` pode ser implementada corretamente;
  - A interface `Fighter` possui o atributo `lifePoints`;
  - A interface `Fighter` possui o atributo `strength`;
  - A interface `Fighter` possui o atributo `defense`;
  - A interface `Fighter` possui o método `attack`, que recebe um `enemy` do tipo `Fighter`;
  - A interface `Fighter` possui o método `special`, que recebe um `enemy` do tipo `Fighter`
  - A interface `Fighter` possui o método `receiveDamage`, que recebe um `amount` do tipo number;
  - O atributo `energy` deverá ser do tipo `Energy`, definido no arquivo `src/Energy.ts`;
  - A interface `Fighter` possui o método `levelUp`, que não recebe parâmetros nem retorna nada.

⚠ Atenção: Para que os testes funcionem corretamente, a interface `Fighter` deve ser exportada de forma padrão (export default).

### 7 - Crie a classe `Character`

Maravilha! Agora já temos tanto nossas raças quanto nossos arquétipos e interfaces definidos, mas antes de sair por aí entrando em tavernas e calabouços, temos outra _quest_: **criar um personagem**!

Cada personagem será composto tanto por uma raça quanto por um arquétipo. Essa classe reunirá um conjunto de características que terão o poder de fazer deste ser o mais único possível.
Além disso, um personagem deve possuir tudo o que se espera de alguém que luta.

As dicas para completar essa _quest_ são: 

- O arquivo `Character.ts` deverá ser criado na raiz do diretório `src`;
- A classe implementa a interface `Fighter`;
- A classe `Character` possui uma `Race`, que por padrão deve ser uma instância de `Elf`;
- A classe `Character` possui um `Archetype`, que por padrão deve ser uma instância de `Mage`;

- O que será verificado:
  - A classe `Character` existe;
  - A classe `Character` implementa a interface `Fighter`;
  - Um `Character` possui uma `Race`;
  - Um `Character` possui um `Archetype`;
  - Um `Character` possui um atributo `lifePoints`, que pode ser lido mas não pode ser setado;
  - Um `Character` possui um atributo `strength`, que pode ser lido mas não pode ser setado;
  - Um `Character` possui um atributo `defense`, que pode ser lido mas não pode ser setado;
  - Um `Character` possui um atributo `energy`, que pode ser lido mas não pode ser setado nem ter um de seus valores internos alterados;
  - Um `Character` possui um atributo `dexterity`, que pode ser lido mas não pode ser setado;
  - Um `Character` pode subir de nível através do método `levelUp`, e seus atributos (`maxLifePoints`, `strength`, `dexterity`, `defense`) ficarão no mínimo 1 ponto e no máximo 10 pontos maiores (sendo que `lifePoints` nunca poderá ser maior que o `maxLifePoints` da `Race`), sua vida ficará completamente cheia (`lifePoints` ficará igual ao novo `maxLifePoints`) e sua energia também ficará cheia (`energy.amount` será igual a 10);
  - Um `Character` pode receber danos através do método `receiveDamage`, fazendo com que seus `lifePoints` caiam entre o valor do parâmetro `amount` e este mesmo valor decrescido da `defense` do `Character` (com o limite inferior de 0), e o `receiveDamage` retorna os `lifePoints` atuais do `Character`, devendo retornar -1 caso os `lifePoints` tenham chegado a 0 ou menos;
  - Um `Character` pode atacar outro `Character`, e o outro `Character` receberá dano entre o valor do atributo `strength` do `Character` que ataca e este valor decrescido do valor do atributo `defense` do `Character` que defende.

⚠ Atenção: Para que os testes funcionem corretamente, a classe `Character` deve ser exportada de forma padrão (export default).

### 8 - Criar a interface `SimpleFighter`
 - Simula os comportamentos de batalha entre personagens ou personagem vs montros.
 - Recebe dois objetos como parâmetro criados a partir da interface SimpleFighter
 - Código parcialmente implementado, já com a criação dos objetos dentro da função.
 - Espera-se que a pessoa estudante faça a função receber os players e não mais instanciá-los dentro da função
 - Espera-se também que a função possa receber dois objetos do tipo Fighter ou SimpleFighter
 - A partir disso, espera-se que interface SimpleFighter seja criada a partir da segregação de atributos de Fighter

  - O que será verificado:
    - A classe `Battle` existe;
    - A função `fight` pode ser acessada

### 9 - Criar a classe `Monster`

 - O arquivo deverá ser criado na raiz do diretório `src`;
 - classe `Monster` deverá exportada de forma padrão (export default).
 - A classe `Monster` deve implementar a interface `SimpleFighter`
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

### 10 - Criar a classe `PVP`

### 11 - Criar a classe `PVE`

### 12 - Criar a classe `Dragon`

### 13 - Criar objetos no arquivo `index`

