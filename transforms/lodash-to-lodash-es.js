module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration)
    .filter(function(statement) {
      return /^lodash\/?/.test(statement.value.source.value);
    })
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
    .toSource({
      quote: options.quote === 'double' ? 'double' : 'single'
    });
};
