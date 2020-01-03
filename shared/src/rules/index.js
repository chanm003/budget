const AccessControl = require('accesscontrol');

const acss = new AccessControl();

// role names
const VISITOR = 'VISITOR';
const LOGGED_IN_USER = 'LOGGED_IN_USER';
const ADMIN = 'ADMIN';

acss.grant(VISITOR)
    .grant(LOGGED_IN_USER)
    .readAny('Directorate')
    .grant(ADMIN)
    .extend(LOGGED_IN_USER)
    .createAny('Directorate')
    .updateAny('Directorate')
    .deleteAny('Directorate');

// TODO: perform permissions based on data https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/
const apiPermissions = {
    DirectorateCreateOne: (user, data) => {
        return acss.can(user.role)['createOwn']('Directorate').granted;
    },
    DirectorateMany: (user, data) => {
        return acss.can(user.role)['readAny']('Directorate').granted;
    },
    DirectorateUpdateById: (user, data) => {
        return acss.can(user.role)['updateOwn']('Directorate').granted;
    },
}

module.exports = {
    apiPermissions,
    roleNames: {
        VISITOR,
        LOGGED_IN_USER,
        ADMIN
    }
};
