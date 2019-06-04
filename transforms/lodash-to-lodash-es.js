module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration, {
      source: {
        type: 'Literal'
      }
    })
    .filter(p => /^lodash\/?/.test(p.value.source.value))
    .forEach(function(statement) {
      const oldmoduleName = statement.value.source.value;
      const newModuleName = oldmoduleName.replace('lodash', 'lodash-es');

      return j(statement).replaceWith(
        j.importDeclaration(
          statement.value.specifiers,
          j.literal(newModuleName)
        )
      );
    })
    .toSource();
};
