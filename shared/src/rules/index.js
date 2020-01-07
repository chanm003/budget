const AccessControl = require('accesscontrol');

const { roleNames } = require('../roleNames');
const { grantsObject: directorateSecurityGrants, apiSecurity: directorateApiSecurity } = require('./directorate');
const { grantsObject: userprofileGrants, apiSecurity: userprofileApiSecurity } = require('./userprofile');
const { mergeApiPermissions, mergeResourceGrants } = require('./combineSecurity');

const grantsObject = mergeResourceGrants(roleNames, directorateSecurityGrants, userprofileGrants);

const accessControl = new AccessControl(grantsObject);

const apiPermissions = mergeApiPermissions(accessControl, directorateApiSecurity, userprofileApiSecurity);

module.exports = {
    apiPermissions
};
