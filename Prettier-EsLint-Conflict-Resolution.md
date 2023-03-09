## How to resolve conflicts between Prettier and EsLint

As stated [here](https://github.com/betalectic-reusejs/shared-configs/blob/main/Pre-Commit-Hooks.md) pre-commit hooks will run both EsLint and Prettier asynchronously, so its a coin toss which will be finished last. In this case we come across the situation where formatting conflicts between Prettier and EsLint can occur. To understand this issue we will look at the use of Prettier and EsLint once.

- **Prettier** - An opinionated code formatter
- **EsLint** - ESLint is a configurable JavaScript linter. It helps you find and fix problems in your JavaScript code. Problems can be anything from potential runtime bugs, to not following best practices, to styling issues.

As seen from aforementioned description both Prettier and EsLint can format code and enforce styling, thus if they follow different rules we can encounter conflicts in our styling.

To Solve this issue we segregate the responsibilities of both `EsLint` and `Prettier`. As Prettier is a code formatting tool it will be responsible for code formatting and only code formatting, while EsLint will be responsible for detecting potential runtime bugs and other logical issues and leave the code formatting to Prettier, we will **ignore** all formatting from EsLint. Following are the setup steps for this:

1. Install following packages in your app as dev-dependencies.
    - `eslint-config-prettier`
    - `eslint-plugin-prettier`
    
    ```bash
    yarn add eslint-config-prettier eslint-plugin-prettier --dev
    ```
    
2. Make following changes to your EsLint config file:
    - Extend Prettier
    - Add Prettier Rule
    - Add Prettier Plugin
    
    After the changes `.eslintrc.cjs` will look like this
    
    ```jsx
    module.exports = {
    	extends: ['@shared-test/eslint-config-react', 'prettier'], //Added Prettier
    	rules: {
    		'prettier/prettier': "error", //Override Eslint rules, This should always be last
    	},
    	plugins:['prettier'] //Add prettier Plugin
    };
    ```
    
3. Run Yarn and that completes the steps for conflict resolution between Prettier and EsLint.
