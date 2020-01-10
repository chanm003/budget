const { schemaComposer } = require('graphql-compose');

const { addToSchema } = require('./schemaHelpers');
const { models } = require('./database');

const generateSchema = () => {
    Object.keys(models).forEach(modelName => {
        const { typeComposer, addCustomizations } = require(`../models/${modelName}/typeComposer`);
        addToSchema(modelName, typeComposer, schemaComposer);
        if (addCustomizations) {
            addCustomizations(schemaComposer);
        }
    });
    return schemaComposer.buildSchema();
}

module.exports = {
    generateSchema
}