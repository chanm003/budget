const AccessControl = require('accesscontrol');

const { roleNames } = require('../roleNames');
const { mergeApiPermissions, mergeResourceGrants } = require('./combineSecurity');
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

const apiPermissions = mergeApiPermissions(accessControl, combinedImports.security);

module.exports = {
    apiPermissions
};
