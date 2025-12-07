# Contributing

Thank you for being interested in this project! We are excited to have you here. This document will guide you through the process of contributing to this project.

## Setup (locally)

To set up the project locally, you need to have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) installed. Once you have them, follow these steps:

```bash
pnpm i
```

## Development

```bash
pnpm run dev
```

## Code Style

We use [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config) for code style.

To lint the code, run

```bash
pnpm run lint -- --fix
```

Be sure to fix all linting errors before submitting a pull request.

## Deploying (for maintainers)

```bash
pnpm run build
pnpm run deploy
```
