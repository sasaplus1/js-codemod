# js-codemod

codemod collection for [jscodeshift](https://github.com/facebook/jscodeshift)

## lodash-to-lodash-es

replace to `import _ from 'lodash-es'` from `import _ from 'lodash'`.

[source](transforms/lodash-to-lodash-es.js)

## How to use

### write configuration

write configuration file for the parser:

#### config.json

```json
{
  "sourceType": "module",
  "allowImportExportEverywhere": true,
  "allowReturnOutsideFunction": true,
  "tokens": true,
  "ranges": true,
  "plugins": [
    "jsx",
    "flow",
    "asyncFunctions",
    "classConstructorCall",
    "doExpressions",
    "trailingFunctionCommas",
    "objectRestSpread",
    ["decorators", { "decoratorsBeforeExport": true }],
    "classProperties",
    "exportExtensions",
    "exponentiationOperator",
    "asyncGenerators",
    "functionBind",
    "functionSent",
    "dynamicImport",
    "nullishCoalescingOperator",
    "optionalChaining",
    "numericSeparator"
  ]
}
```

for more details: [@babel/parser](https://babeljs.io/docs/en/babel-parser)

### execute

execute below:

```console
$ npx jscodeshift -t https://raw.githubusercontent.com/sasaplus1/js-codemod/master/transforms/lodash-to-lodash-es.js --ignore-config=.gitignore --parser=babylon --parser-config=config.json ./src
```

### change output quotation

```console
$ npx jscodeshift --quote=single -t https://raw.githubusercontent.com/sasaplus1/js-codemod/master/transforms/lodash-to-lodash-es.js --ignore-config=.gitignore --parser=babylon --parser-config=config.json ./src
```

for more details: [recast/lib/options.ts](https://github.com/benjamn/recast/blob/master/lib/options.ts)

## License

The MIT license.
