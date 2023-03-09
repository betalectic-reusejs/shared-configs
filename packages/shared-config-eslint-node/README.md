[![NPM version][npm-version-image-eslint-node]][npm-url-eslint-node]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![NPM Publish][npm-publish-action-image]][npm-publish-action-url]

[npm-url-eslint-node]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-eslint-node
[npm-version-image-eslint-node]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-eslint-node.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@betalectic-reusejs/shared-config-eslint-node.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/@betalectic-reusejs/shared-config-eslint-node?minimal=true
[npm-publish-action-image]: https://github.com/reusejs/react/actions/workflows/release.yml/badge.svg
[npm-publish-action-url]: https://github.com/reusejs/react/actions/workflows/release.yml

## Steps to setup ESLINT NODE

1. Add Following packages as dev-dependencies:
   - `eslint`
   - [`@betalectic-reusejs/shared-config-eslint-node`](https://www.npmjs.com/package/@betalectic-reusejs/shared-config-eslint-node) (as per your requirements)
   - `eslint-plugin-react`
   - `eslint-plugin-standard`

Run Following Command to do so:

```bash
yarn add eslint @betalectic-reusejs/shared-config-eslint-node eslint-plugin-react eslint-plugin-standard -D
'or'
yarn add --dev eslint @betalectic-reusejs/shared-config-eslint-node eslint-plugin-react eslint-plugin-standard
```

2. Now create a new file called `.eslintrc.js` in your project root, and add following code fragment to the file

```jsx
module.exports = {
  extends: ["@betalectic-reusejs/shared-config-eslint-node"],
};
```

3. In your package .json create a lint script as shown below:

```jsx
"lint": "yarn eslint '**/*.js' '**/*.jsx'",
```

You have to give the target for the _linting_, here our sample project have `js` and `jsx` files so we give these file(all with given extension) as target for _linting_.

> node_modules is automatically ignored in our package, you can add other ignore options by using `ignorePatterns: ["dist/"]` in `.eslintrc.cjs` or pass it in lint script as `yarn  eslint '**/*.js' --ignore-pattern 'dist/'`
