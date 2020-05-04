# myMediaList
#### Projeto do site que tem como proposta um ranking de séries, filmes e animes, baseado no rating dos usuários. Há também uma lista de favoritos do usuário e uma área para ver as midias.

#### Back-end do projeto feito com Nodejs, utilizando [Koajs](https://koajs.com/), [Postgres](https://www.postgresql.org/), [Knex](http://knexjs.org/#Installation-node) e testes com [Jest](https://jestjs.io/pt-BR/) e [Supertest](https://github.com/visionmedia/supertest). Fluxo de dados explicado [aqui](https://whimsical.com/6DcaGVNzinjE8fXvE42AUv).

#### Front-end com [React](https://pt-br.reactjs.org/), [Styled-components](https://styled-components.com/docs/basics).

#### Trello do projeto: [Trello](https://trello.com/b/g5JLhrEs/mymidialist-sprint-1)
#### Telas do projeto: [Desktop](https://wesley739884.invisionapp.com/prototype/ck9efkmdw008ol50112om3y6f/play)

##### Passos para rodar o projeto:

##### Passo 1: Instale as dependencias com `yarn`

##### Passo 2: Configure sua env com a url do banco `postgres://user:password@host/database`

##### Passo 3: Adicione uma extensão no postgres `CREATE EXTENSION 'uuid-ossp'`

##### Passo 4: Para rodar o server `yarn dev`

#### Estrutura de pastas

```
├── /src
|   ├── /controllers
|   ├── /services
|   ├── /database
|   |    ├── /migrations
|   |    ├── /seeds
|   ├── /repository
|   ├── /routes
|   ├── /validators
├── /test
```
