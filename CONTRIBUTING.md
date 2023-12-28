# Contributing Guidelines

Thanks for your interest in contributing to Noisekun! Please take a moment to review this document before submitting a pull request.

## Setup Project

### Audio files

The audio URLs is hard coded on [`sounds.tsx`](src/data/sounds.tsx), update file with your URLs.
The audio files are stored on Noisekun CDN, but you can access them at `.github/assets/sounds`.
The icons is on [`src/components/sound-icons/`](src/components/sound-icons/).

### Init server

> _This project is using [pnpm](https://pnpm.io) as package manager._

**Install dependencies**

```
pnpm install
```

**Init development server**

```
pnpm dev
```

_or..._

**Init production server**

```
pnpm build && pnpm start
```

## Pull requests

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create a feature request to first discuss any significant new ideas. This includes things like adding new utilities, creating new at-rules, etc.

If you create a new branch to contributing, make a Draft Pull Requets, even if you haven't finished the implementation yet, to prevent other contributors from making changes that break your implementation, and to keep everyone aware of your progress. After you finish your changes, enable your PR for review and merging.

### Create a Pull Request

1. Fork this repository
2. Clone your new repository to your system
3. Create a new branch from main (i.e. feat/[your-branch-name])
4. Push the new branch to your fork
5. Open and submit a Draft PR
5. Make necessary changes
6. Commit changes and push the new branch
7. Enable the PR for review and merging

## Coding standards

Our code formatting rules are defined in [.eslintrc.js](https://github.com/mateusfg7/Noisekun/blob/main/.eslintrc.js) and [.prettierrc.cjs](https://github.com/mateusfg7/Noisekun/blob/main/.prettierrc.cjs). You can check your code against these standards by running:
```
pnpm lint
```
To automatically fix any style violations in your code, you can run:
```
pnpm lint -- --fix
```

## Running tests
You can run the test suite using the following command:
```
pnpm test:ci
```
Or, for watch changes, just:
```
pnpm test
```
Please ensure that the tests are passing when submitting a pull request for review and merging. If you're adding new features or fixing a bug on Noisekun, please include tests that simulate that feature or bug.
