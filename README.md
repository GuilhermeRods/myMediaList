# myMediaList

<h1 align="center">
  <img alt="interface" title="interface" src="assets/interface.jpg" width='800px'>
</h1>

#### Projeto do site que tem como proposta um ranking de séries, filmes e animes, baseado no rating dos usuários. Há também uma lista de favoritos do usuário e uma área para ver as midias.

#### Back-end do projeto feito com Nodejs, utilizando [Koajs](https://koajs.com/), [Postgres](https://www.postgresql.org/), [Knex](http://knexjs.org/#Installation-node).

#### Front-end com [React](https://pt-br.reactjs.org/), [Styled-components](https://styled-components.com/docs/basics).

#### Trello do projeto: [Trello](https://trello.com/b/g5JLhrEs/mymidialist-sprint-1)

#### Telas do projeto: [Desktop](https://wesley739884.invisionapp.com/prototype/ck9efkmdw008ol50112om3y6f/play)

#### Diagrama do Banco [Dbdiagram.io](https://dbdiagram.io/d/5ec5b08039d18f5553ff874a)

##### Passos para rodar o back-end:

##### Passo 1: Instale as dependencias com `yarn`

##### Passo 2: Configure sua env com a url do banco `postgres://user:password@host/database`

##### Passo 3: Adicione uma extensão no postgres `CREATE EXTENSION 'uuid-ossp'`

##### Passo 4: Para rodar as migrations `yarn knex migrate:latest`

##### Passo 5: Para rodar as seeds `yarn knex seed:run`

##### Passo 6: Rodar o server `yarn dev`

##### Passo 7: Rodar a cron: Vá no server.js e mude a função `cron.schedule` para `cron.schedule('* * * * * *', animeCron)` 

#### Estrutura de pastas back-end

```
├── /src
|   ├── /controllers
|   ├── /services
|   ├── /database
|   |    ├── /migrations
|   |    ├── /seeds
|   ├── /routes
```
