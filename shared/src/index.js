const validationSchemas = require('./validationSchemas');
const { rules, roleNames } = require('./rules');

module.exports = {
    validationSchemas: { ...validationSchemas },
    rules,
    roleNames
};