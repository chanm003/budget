const AccessControl = require('accesscontrol');
const { roleNames } = require('../roleNames');

const acss = new AccessControl();

// role names


acss.grant(roleNames.VISITOR)
    .grant(roleNames.LOGGED_IN_USER)
    .readAny('Directorate')
    .grant(roleNames.ADMIN)
    .extend(roleNames.LOGGED_IN_USER)
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
    apiPermissions
};
