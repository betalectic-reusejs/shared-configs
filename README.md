# Shared-Configs

Contains sharable configuration configuration packages for Prettier and EsLint

# How to use:

Following are the instructions that you need to follow for using Prettier/EsLint shared configuration. Each Individual package have their own readme file which give a specialised set of instructions to use the package. Configuration steps will for EsLint and Prettier are different and general steps are given below:

> Following are some extensions that will allow you to get full use out of Prettier and EsLint \***\*Prettier - Code formatter
> ESLint\*\***

## Steps to setup Prettier-Configuration

1. Add following packages as dev-dependencies
   - \*\*[`@betalectic-reusejs/shared-config-prettier-node`](https://www.npmjs.com/package/@betalectic-reusejs/shared-config-prettier-node)\*\* (as per your requirements)
   - `prettier`

```bash
yarn add @betalectic-reusejs/shared-config-prettier-node prettier -D
'or'
yarn add --dev @betalectic-reusejs/shared-config-prettier-node prettier
```

1. Add following line to the package.json of your app.

```json
{
  //Some Code
  "prettier": "@betalectic-reusejs/shared-config-prettier-node"
  //Some code
}
```

That should configure prettier for your project. The package only provides you with configuration for prettier and above steps show the easiest and simplest method to use this configuration. If you want to use some other methods to configure prettier or over ride the configuration pls refer to following link to configure your own prettier settings. [https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)

## Steps to setup ESLINT

1. Add Following packages as dev-dependencies:
   - `eslint`
   - \*\*[`@betalectic-reusejs/shared-config-eslint-node`](https://www.npmjs.com/package/@betalectic-reusejs/shared-config-eslint-node)\*\* (as per your requirements)
   - `eslint-plugin-react`
   - `eslint-plugin-standard`

Run Following Command to do so:

```bash
yarn add eslint @betalectic-reusejs/shared-config-eslint-node eslint-plugin-react eslint-plugin-standard -D
'or'
yarn add --dev eslint @betalectic-reusejs/shared-config-eslint-node eslint-plugin-react eslint-plugin-standard
```

1. Now create a new file called `.eslintrc.js` in your project root, and add following code fragment to the file

```jsx
module.exports = {
  extends: ["@betalectic-reusejs/shared-config-eslint-node"],
};
```

1. In your package .json create a lint script as shown below:

```jsx
"lint": "yarn eslint '**/*.js' '**/*.jsx'",
```

You have to give the target for the _linting_, here our sample project have `js` and `jsx` files so we give these file(all with given extension) as target for _linting_.

> node_modules is automatically ignored in our package, you can add other ignore options by using `ignorePatterns: ["dist/"]` in `.eslintrc.cjs` or pass it in lint script as `yarn  eslint '**/*.js' --ignore-pattern 'dist/'`
