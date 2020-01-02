const AccessControl = require('accesscontrol');

const acss = new AccessControl();
const VISITOR = 'VISITOR';
const LOGGED_IN_USER = 'LOGGED_IN_USER';
const ADMIN = 'ADMIN';

acss.grant(VISITOR)
    .grant(LOGGED_IN_USER)
    .readAny('directorate')
    .grant(ADMIN)
    .extend(LOGGED_IN_USER)
    .createAny('directorate')
    .updateAny('directorate')
    .deleteAny('directorate');

const check = (role, resource, action, data) => {
    const staticPermissionsCheck = acss.can(role)[action](resource).granted;

    if (staticPermissionsCheck) {
        return true;
    }

    // TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/

    return false;
}

module.exports = {
    check,
    roleNames: {
        VISITOR,
        LOGGED_IN_USER,
        ADMIN
    }
};
