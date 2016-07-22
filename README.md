#Static Code Analysis

## EsLint
- Rules are documented at http://eslint.org/docs/rules
- To run ESLint on CMD follow the steps:
    -   npm install -g eslint
    -   eslint folder/file
- To ignore folder/file create .eslintignore and define folder/file path
- Turning off eslint rule for a specific line **// eslint-disable-line rule-name**
- Turning off eslint rule for complete file //*eslint rule-name:0*//
- Turning off eslint rule for next line **// eslint-disable-next-line rule-name**

## Sass-Lint
- Rules are documented at https://github.com/sasstools/sass-lint/tree/master/docs/rules
- To run Sass-Lint on CMD follow the steps:
    -   npm install -g sass-lint
    -   sass-lint -v -q
- To ignore folder/file define path in ignore section of .sass-lint.yml
- Turning off sass-lint rule for a specific line **// sass-lint:disable-line rule-name**
- Turning off sass-lint rule for complete file **// sass-lint:disable no-qualifying-elements**

** Warnings or any rule set to severity: 1  will not be reported by the CLI tool unless you use verbose flag -v or --verbose

** By default any rule set to severity: 2 in  config will throw an error which will stop the CLI on the first error it encounters. If you wish to see a list of errors and not have the CLI exit then you'll need to use the -q or --no-exit flag
