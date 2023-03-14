## Adding Global Variables to EsLint

Many times in code we come across variables which can be used globally in our projects(throughout the project), for eg. functions line `console.log()` or `windows` object. These are available globally and hence does eslint will not give undefined error while checking for these functions or objects.

Similar to above inbuilt global objects/functions we can also have custom function/objects which we want to make available globally in our project repository. Following is an example of creating a custom global function in nodejs.

```jsx
global.sampleFunction = (string) => {
		console.log("String is >> ", string
	};
```

 Using above code we can access sampleFunction anywhere in our repo. Thus using it as follows will not give any logical error.

```jsx
const a = "Hello";
sampleFunction(a);

// Output
// String is >> Hello
```

But using this global variable will still give an error when we run an EsLint check on the repo. Why? Because EsLint does not know that this is a custom global object, and will treat it aa simply a function, a function which is not defined any where in the same file. Thus we will be getting the following error on linting using EsLint .

```bash
'sampleFunction' is not defined.  eslint. no-undef
```

To solve this issue we have to make EsLint understand that this function is a global function. and can be used throughout the repository. To do so we will make use of **globals** key in our eslint config file.

Following code sample will show how to declare a global variable in eslint.

```jsx
module.exports = {
	extends: ['./node_modules/@betalectic-reusejs/shared-config-eslint-nobejs'],
	rules: {},
	globals: {
		sampleFunction: 'writable'
	},
};
```

This syntax will make `sampleFunction`  available globally and remove the eslint `no-undef` error.

The globals object only accept key-value pairs, with the name of function/variable that you want to make global as key and `readonly` or `writable` as value.

For further information on **EsLint Globals** refer to following link [here](https://eslint.org/docs/latest/use/configure/language-options#specifying-globals)
