## Extending EsLint Configuration

Extending EsLint format is easy and can be done directly in your EsLint configuration files. You can use this method to add additional rules to your repo or override pre-existing rules that are applied in other configuration.

Following are some sample for extending EsLint configurations:

- This will allow us to override the rules already mentioned in configuration, rules object always override extended packages, So if you want to overwrite any rules in any of the extended packages mentioning them in rules will override the rule with new value.

```jsx
// This will switch no-unused-var from arror to warning level

module.exports = {
	extends: ['./node_modules/@betalectic-reusejs/shared-config-eslint-nobejs'],
	rules: {
		'no-unused-vars': 'warn',
	},
};

```

- This is for adding additional packages(with lot of different rule-set), to add a new package of rules first add that package to `package.json`, then add to extends in EsLint configuration file line .eslintrc.

```jsx
// Extending additinal EsLInt Configuration
module.exports = {
	extends: [
			'./node_modules/@betalectic-reusejs/shared-config-eslint-nobejs',
			'airbnb'
		],
}; 
```

- Adding Global Variables, we can also add global variables by extending our EsLint configuration, for more details on adding Global Configuration refer to [here](https://github.com/betalectic-reusejs/shared-configs/blob/main/Global_Variables.md)

```jsx
// Adding Global Variables
module.exports = {
	extends: ['./node_modules/@betalectic-reusejs/shared-config-eslint-nobejs'],
	globals: {
		requireUtil: 'writable',
		requireValidator: 'writable',
		requireHttpServer: 'writable',
	},
};
```
