const { modelNames } = require('../modelNames');

const validationSchemas = modelNames.reduce(
    (combined, modelName) => {
        combined = { ...combined, ...require(`./${modelName}`) }
        return combined;
    },
    {});

module.exports = {
    validationSchemas
} 