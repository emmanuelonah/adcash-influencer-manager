<div align="center">
  <a href="https://github.com/emmanuelonah/adcash-influencer-manager">
    <img src="./src/design-system/assets/icn-logo.jpeg" alt="Logo" width="300" />
  </a>
</div>

<h1 align="left" style="font-size:40px;">Adcash influencer manager</h1>

This is an influencers management system.

# Getting Started

## Environmental Variables

create .env file in the root dir and add the below variables

```bash
REACT_APP_ADCASH_INFLUENCER_MANAGER_SERVER_URL="https://localhost:8080/"
REACT_APP_ADCASH_INFLUENCER_MANAGER_CLIENT_URL="http://localhost:4000/"
```

## Prerequisites

Ensure you are using the specified Node version. If you have nvm, run:

```bash
nvm use
```

## Install Dependencies

```bash
yarn
```

## Development Server

Start the development server:

```bash
yarn run dev
```

[Open in Browser](http://localhost:3000)

## Production Build

To create a production build:

```bash
yarn run build
```

## Run Unit Tests

Execute unit tests:

```bash
yarn run test
```

## Test Coverage

Check test coverage:

```bash
yarn run test:cv
```

## Visualize Design System

To visualize the design system:

```bash
yarn run sb
```

## Linting and Formatting

Check for lint errors:

```bash
yarn run lint
```

Format code:

```bash
yarn run format
```

## Visualize code performance

This will generate a file called `performance.html` in the root. But before running the command, make sure the project is running locally.

```bash
yarn run perf:audit
```

## Audit packages for maintenance

This is useful for keeping packages upto date and scanning through critical/vulnerable packages.

```bash
yarn run pkgs:audit
```

## Architecture

### Code Structure

We use the MVP pattern:

- **Model**: Interacts with the API.
- **View**: What the user sees in the browser.
- **Presenter**: Middleware between the model and view.

### CI Processes

- **Local CI**: UsesGit hooks (Husky).
- **Remote CI**: Uses Git Actions.

### Testing Frameworks

- **React Testing Library**: For UI tests.
- **Jest**: For non-UI tests.

### Documentation Tool

- **Storybook**: For component and design system documentation.

## Tools Used

1. [ReactJs](https://react.dev/)
2. [React Router Dom](https://reactrouter.com/en/main/routers/create-browser-router)
3. [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
4. [Styled Components](https://styled-components.com/)
5. [Axios](https://axios-http.com/docs/intro)
6. [Jest](https://jestjs.io/)
7. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
8. [ESLint](https://eslint.org/)
9. [Prettier](https://prettier.io/)
10. [Git Husky](https://typicode.github.io/husky/)
11. [Git Actions](https://docs.github.com/en/actions)
12. [Storybook](https://storybook.js.org/)

## Environments

- [Local](http://localhost:3000/)
- [Staging](https://aim.netlify.app)
