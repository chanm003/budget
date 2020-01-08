const { schemaComposer } = require('graphql-compose');

const { typeComposer: UserTC, addCustomFields: addFieldsUserTC } = require('../models/User/typeComposer');
const { typeComposer: DirectorateTC } = require('../models/Directorate/typeComposer');
const { addToSchema } = require('./schemaHelpers');

const generateSchema = () => {
    addToSchema('User', UserTC, schemaComposer);
    addFieldsUserTC(schemaComposer);
    addToSchema('Directorate', DirectorateTC, schemaComposer);
    return schemaComposer.buildSchema();
}

module.exports = {
    generateSchema
}