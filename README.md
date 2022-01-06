# sd-0x-project-trybers-and-dragons

## Requisitos:

### Requisito para criar um objeto



### Requisito para criar uma classe

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
! Requisito opcional
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
