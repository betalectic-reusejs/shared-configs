## Disabling EsLint.

Some time you may need to disable some rules for a specific project repository, for eg you can disable `no-unused` rule in some repos. You can do this in one of the following ways.

1. **Disable EsLint Rule for a specific line.**
    
    To disable an EsLint rule for one line you can use following code sample
    
    ```jsx
    // eslint-disable-next-line no-undef
    const val = requireUtils('httpsRequestPromise');
    ```
    
    This syntax will disable the EsLint Rule `no-undef` for the next line of code.
    
2. **Disable EsLint Rule for a whole file.**
    
    To disable an EsLint rule for whole files you can use following code sample
    
    ```jsx
    /* eslint-disable no-undef */
    
    const temp = 5;
    const val = requireUtils('httpsRequestPromise');
    ```
    
    This syntax will disable the EsLint Rule `no-undef` for the whole file.
    
3. **Overriding rules in `.eslintrc.js`.**
    
    You can also disable any EsLint rule defined in configurations through out the project by overriding its default value given by any EsLint extension. For example following code syntax can be used to disable `no-undef` rule in the whole project.
    
    ```jsx
    module.exports = {
    	extends: ['./node_modules/@betalectic-reusejs/shared-config-eslint-node'],
    	rules: {
    		'no-undef' : 'off'
    	},
    };
    ```
    
    This will override the `no-undef` rules existing in extends packages throughout the project repository.
    

### Creating EsLint Ignore file

We can also disable EsLint for some files or folders by creating a `.eslintignore` file similar to `.gitignore` file. All files/folders mentioned here will be ignored by the EsLint linter.

For Example:

```
# .eslintignore File

/node_modules
/packages/*.js
```

The afore mentioned `.eslintignore` file will ignore all files and folders in `node_modules` folder and all files with the extension of `.js` in the folder `packages`. This can be used to exclude any particular files or folders from the EsLint as per case by case requirements.
