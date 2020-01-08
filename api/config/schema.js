const { schemaComposer } = require('graphql-compose');

const { addToSchema } = require('./schemaHelpers');
const { models } = require('./database');

const generateSchema = () => {
    Object.keys(models).forEach(modelName => {
        const { typeComposer, addCustomFields } = require(`../models/${modelName}/typeComposer`);

        if (addCustomFields) {
            addCustomFields(schemaComposer);
        }

        addToSchema(modelName, typeComposer, schemaComposer)
    });
    return schemaComposer.buildSchema();
}

module.exports = {
    generateSchema
}