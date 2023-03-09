# Linting checks on commit
One of the use case for using linting is to stop buggy code to be pushed to our repos and contaminate the code. We can acheive this by using a tools like *husky* or *GitExtensions* which are git-tools to perform actions on git commited data.
This can be a rather time-consuming process if the size of repo is too large, so to solve this issue we perform linting actions on only **staged** files.

Following are the step to setup a git pre-commit hook using *husky* and *eslint*

Tools to be used for automation:
- **Lint-staged**
- **Husky**

### Setup for Creating Pre-commit Hooks

- Add *prettier*, *EsLint*, *husky* and *lint-staged* to your app as dev-dependencies

```bash
yarn add prettier eslint husky lint-staged --dev
```

- Now create EsLint and prettier configuration based on your need. We will be using our shared configuration here, instructions for setup can be found [here](https://github.com/betalectic-reusejs/shared-configs/blob/main/README.md) 
- Next we will initialise husky and lint-staged:
    - We will init using lint-staged which will automatically configure a basic husky pre-commit hook for us.
    - Following command will initialise husky and lint-staged for us.
    
    ```bash
    npx mrm lint-staged
    ```
    This command will create a new folder .husky and create a pre-commit hook.
    
- Following lines will be added in package.json automatically:

```jsx
"lint-staged": {
    "*.jsx": "eslint --fix",
    "*.{jsx,css,md}": "prettier --write"
  }
```

Here You can add the extensions that you want to run eslint or prettier on for example, if you want to run lint on ***tsx***, ***ts***, ***js*** or ***jsx*** file you can use following syntax

```jsx
"lint-staged": {
    "*.{jsx,js,ts,tsx}": "eslint --fix",
    "*.{jsx,css,md}": "prettier --write"
  }
```

These Function are ran asynchronously, so both prettier and EsLint checks will  be executed at once, to chain them in sequential order you can use following syntax.

```jsx
"lint-staged": {
    "*.{jsx,js,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{jsx,css,md}": "prettier --write"
  }
```

This will execute **eslint** first and **prettier** second.

This will setup the linting and prettier on commit(only on staged files)
