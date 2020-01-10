const AccessControl = require('accesscontrol');

const { roleNames } = require('../roleNames');
const { mergeSecurity, mergeResourceGrants } = require('./combineSecurity');
const { modelNames } = require('../modelNames');

const combinedImports = modelNames.reduce(
    (combined, modelName) => {
        const { grantsObject, apiSecurity } = require(`./${modelName}`);
        combined.grants.push(grantsObject);
        combined.security.push(apiSecurity);
        return combined;
    },
    {
        grants: [],
        security: []
    })

const grantsObject = mergeResourceGrants(roleNames, combinedImports.grants);

const accessControl = new AccessControl(grantsObject);

const apiSecurity = mergeSecurity(accessControl, combinedImports.security);

module.exports = {
    apiSecurity
};
