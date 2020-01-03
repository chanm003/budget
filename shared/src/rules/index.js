const AccessControl = require('accesscontrol');

const { roleNames } = require('../roleNames');
const { grantsObject: directorateSecurityGrants, apiSecurity: directorateApiSecurity } = require('./directorate');
const { mergeApiPermissions, mergeResourceGrants } = require('./combineSecurity');

const grantsObject = mergeResourceGrants(roleNames, directorateSecurityGrants);

const accessControl = new AccessControl(grantsObject);

const apiPermissions = mergeApiPermissions(accessControl, directorateApiSecurity);

module.exports = {
    apiPermissions
};
