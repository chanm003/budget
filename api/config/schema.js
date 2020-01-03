const { schemaComposer } = require('graphql-compose');

const { typeComposer: UserTC } = require('../models/typeComposers/user');
const { typeComposer: DirectorateTC } = require('../models/typeComposers/directorate');
const { addToSchema } = require('./schemaHelpers');

const generateSchema = () => {
    addToSchema('User', UserTC, schemaComposer);
    addToSchema('Directorate', DirectorateTC, schemaComposer);
    return schemaComposer.buildSchema();
}

module.exports = {
    generateSchema
}