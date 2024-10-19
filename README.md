<p align="center">
  <a href="https://github.com/joctansilva" rel="noopener" target="_blank"><img width="220" height="80" src="./media/logo.png" alt="Joocoding Logo"></a>
</p>

<h1 align="center">Joocoding Design System</h1>

Joocoding is a Design System made by Joctan for front-end studing, this is the Typescript monorepo. For now it provides components for the following frameworks:

- React

## Packages Usedœ

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos

- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces

- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild

- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by [Vite](https://github.com/vitejs/vite)

Tools preconfigured:

- [Typescript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting ([using Airbnb JS/TS/React Style Guid](https://github.com/airbnb/javascript))
- [Prettier](https://prettier.io/) for code formatting.
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs.

## Joocoding Packages

### joocoding-icons

Provides the necessary icons from Joocoding, for more details check its [documentation](packages/joocoding-icons/README.md).

### joocoding-theme

Provides the Joocoding theme and its tokens to use with **Emotion** or **styled-components**, for more details check its [documentation](packages/joocoding-theme/README.md).

### react-components

Provides the Joocoding components for **React** projects, for more details check its [documentation](packages/react-components/README.md).

### react-utils

Provides utils for **React** projects like hooks for **responsiviness** and **theme**, for more details check its [documentation](packages/react-utils/README.md).

## Installation

First you have to setup the authorization from Azure Devops on your machine following the steps. You need to have Node.js and npm installed on your machine.

**Step 1**

Run the following command to install **vsts-npm-auth** from Azure Devops

```bash
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
```

**Step 2**

Add a .npmrc to your project, in the same directory as your package.json with the following content

```text
registry=https://yoururlhere.com.br

always-auth=true
```

**Step 3**

Run vsts-npm-auth to get an Azure Artifacts token added to your user-level .npmrc file

```bash
vsts-npm-auth -config .npmrc
```

After following this steps you can run the install commands

```bash
npm install @joocoding/icons

npm install @joocoding/theme

npm install @joocoding/react-components

npm install @joocoding/react-utils
```

## Karla Font

Joocoding uses the **Karla** font by default. You can add it to your project via Fontsource

```bash
npm install @fontsource-variable/karla
```

Then you can import it in your entry point (App.tsx, \_app.tsx and etc) like this:

```bash
import '@fontsource-variable/karla';
```

## Contributing

To know how to contribute to the project check the [contributing guide](/CONTRIBUTING.md).
