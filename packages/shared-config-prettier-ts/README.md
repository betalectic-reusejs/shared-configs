[![NPM version][npm-version-image-prettier-ts]][npm-url-prettier-ts]
[![NPM downloads][npm-downloads-image]][npm-downloads-url]
[![NPM Publish][npm-publish-action-image]][npm-publish-action-url]

[npm-url-prettier-ts]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-prettier-ts
[npm-version-image-prettier-ts]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-prettier-ts.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@betalectic-reusejs/shared-config-prettier-ts.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/@betalectic-reusejs/shared-config-prettier-ts?minimal=true
[npm-publish-action-image]: https://github.com/reusejs/react/actions/workflows/release.yml/badge.svg
[npm-publish-action-url]: https://github.com/reusejs/react/actions/workflows/release.yml

## Steps to setup Node Prettier-Configuration

1. Add following packages as dev-dependencies
   - [`@betalectic-reusejs/shared-config-prettier-ts`](https://www.npmjs.com/package/@betalectic-reusejs/shared-config-prettier-ts)
   - `prettier`

```bash
yarn add @betalectic-reusejs/shared-config-prettier-ts prettier -D
'or'
yarn add --dev @betalectic-reusejs/shared-config-prettier-ts prettier
```

2. Add following line to the package.json of your app.

```json
{
  //Some Code
  "prettier": "@betalectic-reusejs/shared-config-prettier-ts"
  //Some code
}
```

That should configure prettier for your project. The package only provides you with configuration for prettier and above steps show the easiest and simplest method to use this configuration. If you want to use some other methods to configure prettier or over ride the configuration pls refer to following link to configure your own prettier settings. [https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)
