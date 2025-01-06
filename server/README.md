<div align="center">
  <a href="https://github.com/emmanuelonah/adcash-influencer-manager">
    <img src="./public/icn-logo.jpeg" alt="Logo" width="300" />
  </a>
</div>

<h1 align="left" style="font-size:40px;">Adcash influencer manager</h1>

This is an influencers management system.

# Getting Started

## Env variables

create a file in the root folder called `.env`, paste the below content and swap it with the actual values

```bash
ADCASH_INFLUENCER_MANAGER_APP_NAME=<string> #Optional
ADCASH_INFLUENCER_MANAGER_SERVER_URL=<string>
ADCASH_INFLUENCER_MANAGER_SERVER_PORT=<number>
ADCASH_INFLUENCER_MANAGER_SERVER_MONGO_DB_URI=<string>
ADCASH_INFLUENCER_MANAGER_WHITE_LISTED_DOMAINS<string> # separate them with a delimeter e.g https://domain1.com,https://domain2.com,
NODE_ENV=<string> # e.g test | development | production
```

## Scripts

__Ensure you are using the specified node version__
If you have `nvm`, run the below command to select the latest `node` version:

```bash
nvm use
```

## Dependencies installation

```bash
yarn
```

## Development server

```bash
yarn run dev
```

Open [http://localhost:8080](http://localhost:8080) via a client e.g postman, browser, etc.

## Production build

```bash
yarn run build
```

## Run unit tests

```bash
yarn run test
```

## Run unit tests coverage

```bash
yarn run test:coverage
```

## Lint errors

```bash
yarn run lint
```

## Format errors

```bash
yarn run format
```

## Architecture

### Code Structure

We use the MVC pattern:
[This project uses the MVC software design pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

### CI Processes

- __Local CI__: UsesGit hooks (Husky).
- __Remote CI__: Uses Git Actions.

### Testing Frameworks

- __Jest__: For unit test.
- __Supertest__: For api test.

### Documentation Tool

- __Postman__: [For Api documentation.](https://documenter.getpostman.com/view/7240396/2sAYJ9BJpz#d95807cc-bb9a-41ad-ae05-9be7ebd86ee7)

# Tools used

1. [NodeJs](https://nodejs.org/en)
2. [Express](https://expressjs.com/)
3. [Typescript](https://www.typescriptlang.org/)
4. [Mongo DB](https://www.mongodb.com/)
5. [Jest](https://jestjs.io/)

## Environments

- [Local](https://localhost:8080/)
- [Production](https://adcash-influencer-manager-api.netlify.app/api/v1/)
