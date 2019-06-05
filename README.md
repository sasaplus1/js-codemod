# js-codemod

[![Build Status](https://travis-ci.com/sasaplus1/js-codemod.svg?branch=master)](https://travis-ci.com/sasaplus1/js-codemod)
[![renovate](https://badges.renovateapi.com/github/sasaplus1/js-codemod)](https://renovatebot.com)

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
    "flow",
    "jsx",
    "asyncGenerators",
    "bigInt",
    "classProperties",
    "classPrivateProperties",
    "classPrivateMethods",
    [
      "decorators",
      {
        "decoratorsBeforeExport": true
      }
    ],
    "doExpressions",
    "dynamicImport",
    "exportDefaultFrom",
    "exportNamespaceFrom",
    "functionBind",
    "functionSent",
    "importMeta",
    "logicalAssignment",
    "nullishCoalescingOperator",
    "numericSeparator",
    "objectRestSpread",
    "optionalCatchBinding",
    "optionalChaining",
    "partialApplication",
    "pipelineOperator",
    "throwExpressions"
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
