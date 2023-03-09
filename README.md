# Shared-Configs
This repository contains sharable configuration packages for Prettier and EsLint. These configuaration files can be added to your project and thus allow you to have a consistent formatting and linting configuration. Having this configuration in your project will allow all the developers to follow the same formating styles thus individual formatting styles will not hamper code readability.

# Why you should use Prettier and EsLint
- Consistent code Formatting
- Auto Code Formatting
- Detects and Prevent common bugs and logical errors
- Keeps code clean and readable by enforcing singular formatting style.
- Makes multi-contributor repos more readable. 

# How to use:
Each sharable configuration-package have individual readme files which will walk you through the steps to use the configuration-packages in your project. Following is the list of all the packages, navigate to their respective readme files and follow the steps to add the configuration to your project.

[![NPM version][npm-version-image-eslint-node]][npm-url-eslint-node] [EsLint Node Readme](https://github.com/betalectic-reusejs/shared-configs/blob/main/packages/shared-config-eslint-node/README.md)   
[![NPM version][npm-version-image-eslint-react]][npm-url-eslint-react] [EsLint React Readme](https://github.com/betalectic-reusejs/shared-configs/blob/main/packages/shared-config-eslint-react/README.md)  
[![NPM version][npm-version-image-eslint-react-native]][npm-url-eslint-react-native] [EsLint React-Native Readme](https://github.com/betalectic-reusejs/shared-configs/blob/main/packages/shared-config-eslint-react-native/README.md)   
[![NPM version][npm-version-image-prettier-node]][npm-url-prettier-node] [Prettier Node Readme](https://github.com/betalectic-reusejs/shared-configs/blob/main/packages/shared-config-prettier-node/README.md)     
[![NPM version][npm-version-image-prettier-react]][npm-url-prettier-react] [Prettier React Readme](https://github.com/betalectic-reusejs/shared-configs/blob/main/packages/shared-config-prettier-react/README.md)     
[![NPM version][npm-version-image-prettier-react-native]][npm-url-prettier-react-native] [Prettier React-Native Readme](https://github.com/betalectic-reusejs/shared-configs/blob/main/packages/shared-config-prettier-react-native/README.md)    

[npm-url-eslint-node]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-eslint-node
[npm-version-image-eslint-node]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-eslint-node.svg?style=flat
[npm-url-eslint-react]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-eslint-react
[npm-version-image-eslint-react]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-eslint-react.svg?style=flat
[npm-url-eslint-react-native]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-eslint-react-native
[npm-version-image-eslint-react-native]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-eslint-react-native.svg?style=flat
[npm-url-prettier-node]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-prettier-node
[npm-version-image-prettier-node]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-prettier-node.svg?style=flat
[npm-url-prettier-react]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-prettier-react
[npm-version-image-prettier-react]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-prettier-react.svg?style=flat
[npm-url-prettier-react-native]: https://www.npmjs.com/package/@betalectic-reusejs/shared-config-prettier-react-native
[npm-version-image-prettier-react-native]: https://img.shields.io/npm/v/@betalectic-reusejs/shared-config-prettier-react-native.svg?style=flat

# Useful VSCode Extensions
Here are some extensions for **`VSCode`** that will allow you to get full use out of Prettier and EsLint   
- **Prettier - Code formatter**  
- **ESLint** 

# How to keep your configuration up-to-date (`Dependabot`)
One of the main issue with using packages is figuring out how to update the package to the latest version. Especially for configuration packages like this where the standard need to be followed as soon as any update happpens in formatting or linting standards. 

One of the methods to keep your configuration dependency updated to latest version is to use **`dependabot`**. This github action scans your dependency array and creates a PR whenever a new version of the watched dependency is released. Thus freeing the developer from constantly keeping an eye out for any changes in configuration.

### Following are the steps to setup dependabot

**`Dependabot`** is a github action, so we have to create a `YAML` file in our `.github` folder. Following are the steps to setup dependabot in your project

- Create a folder `.github` in your project root.
- Create a file `dependabot.yml` in the folder `.github`
- Add following script to you `dependabot.yml` file
   
   ```yml
     version: 2
     updates:
      - package-ecosystem: npm
       directory: "/" 
       schedule:
         interval: "daily"
       allow:
         - dependency-name: "@betalectic-reusejs/shared-config-prettier-react"
         - dependency-name: "@betalectic-reusejs/shared-config-eslint-react"
       reviewers:
         - "github_user_name"
   ```
     
- Make changes based on your needs, for eg. the aforementioned sample will check for any update on packages `@betalectic-reusejs/shared-config-prettier-react` and `@betalectic-reusejs/shared-config-eslint-react` **daily** and raise a PR whenever a new version of the package is released.
- We can also add reviewers by using their `github user name`
    
> Further in depth options for dependabot configuration can be found in the following docs: [Dependabot Options](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
 
 ## Additional Reading
 
 - Guide on how to check linting error on Commits using *`pre-commit hooks`* can be found [here](https://github.com/betalectic-reusejs/shared-configs/blob/main/Pre-Commit-Hooks.md)
 - Guide on how to reslove styling conflicts between *`eslint`* and *`prettier`* on commit can be found [here](https://github.com/betalectic-reusejs/shared-configs/blob/main/Prettier-EsLint-Conflict-Resolution.md)


## Contributors

<a href="https://github.com/betalectic-reusejs/shared-configs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=betalectic-reusejs/shared-configs" />
</a>
