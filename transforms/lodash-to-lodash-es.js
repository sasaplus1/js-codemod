module.exports = function transformer(file, api, options = {}) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration)
    .filter(function(statement) {
      return /^lodash(?!-es|\.)\/?/.test(statement.value.source.value);
    })
    .forEach(function(statement) {
      const node = Object.assign({}, statement.value);

      const oldModuleName = node.source.value;
      const newModuleName = oldModuleName.replace('lodash', 'lodash-es');

      node.source.value = newModuleName;

      return j(statement).replaceWith(node);
    })
    .toSource(options);
};
