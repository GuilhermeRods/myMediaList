<h1 align="center">
    <img alt="animeList" title="animeList" src="assets/logo.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GuilhermeRods/myMediaList?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/GuilhermeRods/myMediaList">
  
  <a href="https://github.com/GuilhermeRods/myMediaList/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/WesleyMarquesGit/Ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/GuilhermeRods/myMediaList/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/GuilhermeRods/myMediaList?style=social">
  </a>
</p>

---

### :rocket: Sobre o projeto

AnimeList - É um projeto desenvolvido para apreciadores de animes e mangas, e tem como intuito permitir ao usuario criar uma lista organizada do que ele pretende assistir, do que esta acompanhando e do que ja foi finalizado, assim como seus respectivos episódios.

#### Trello do projeto: [Trello](https://trello.com/b/g5JLhrEs/mymidialist-sprint-1)

#### Diagrama do Banco [Dbdiagram.io](https://dbdiagram.io/d/5ec5b08039d18f5553ff874a)

---

### 🎨 Interface

<h1 align="center">
  <img alt="interface" title="interface" src="assets/interface.png" width='800px'>
</h1>

#### UI do projeto: [Invison](https://wesley739884.invisionapp.com/prototype/ck9efkmdw008ol50112om3y6f/play)

---

### :space_invader: Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### Back-end

- [Node.js][nodejs]
- [Koa.js][koajs]
- [Postgres][postgres]
- [Knex][knex]

#### Front-end

- [React][reactjs]
- [Styled-components][styledcomponents]

---

### :computer: Manual

#### Pré-requisitos

- É **necessário** possuir o **[Node.js][nodejs]** instalado no computador
- É **necessário** possuir o **[Git][git]** instalado e configurado no computador
- Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM][npm]** ou **[Yarn][yarn]**.

#### Como executar

```bash
Podemos considerar este projeto como sendo divido em duas partes:

1. Back End (pasta backend)
2. Front End (pasta frontend)

OBS: Para iniciar o Front-End é preciso que o Back-End esteja sendo executado.
```

#### 1. Clone o repositório

```bash
# Clone este repositório
$ git clone https://github.com/GuilhermeRods/myMediaList.git
```

#### 2. Rode o servidor (Back-End)

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd myMediaList/backend

# Instale as dependências
$ yarn

# Configure sua env com a url do banco
$ postgres://user:password@host/database

# Adicione uma extensão no postgres
$ CREATE EXTENSION 'uuid-ossp'

# Para rodar as migrations
$ yarn knex migrate:latest

# Para rodar as seeds
$ yarn knex seed:run

# Rodar a cron
$ Vá no server.js e mude a função `cron.schedule` para `cron.schedule('* * * * * *', animeCron)`


├── /src
|   ├── /controllers
|   ├── /services
|   ├── /database
|   |    ├── /migrations
|   |    ├── /seeds
|   ├── /routes
```

#### 3. Rodando a aplicação web (Front-End)

```bash
# Acesse a pasta do projeto no seu terminal/cmd
$ cd myMediaList/frontend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

├── /src
|   ├── /components
|   ├── /pages

```

---

### :recycle: Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

### :page_with_curl: Licença

Este projeto esta sobe a licença MIT.

---

[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/
[nodejs]: https://nodejs.org/
[koajs]: https://koajs.com/
[knex]: http://knexjs.org/#Installation-node
[reactjs]: https://reactjs.org
[styledcomponents]: https://styled-components.com/docs/basics
[git]: https://git-scm.com/
[postgres]: https://www.postgresql.org/
[license]: https://opensource.org/licenses/MIT
