const path = require('path');

const { defineTest } = require('jscodeshift/dist/testUtils');

const transformName = path.basename(__filename, '.js');

defineTest(__dirname, transformName, { quote: 'single' });
