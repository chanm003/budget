const VISITOR = 'VISITOR';
const LOGGED_IN_USER = 'LOGGED_IN_USER';
const ADMIN = 'ADMIN';

const rules = {
    [VISITOR]: {
        static: []
    },
    [LOGGED_IN_USER]: {
        static: [
            "directorates:list",
        ]
    },
    [ADMIN]: {
        static: [
            "directorates:list",
            "directorates:create",
            "directorates:edit"
        ]
    }
};

function check(role, action, data) {
    const permissions = rules[role];
    if (!permissions) {
        // role is not present in the rules
        return false;
    }

    const staticPermissions = permissions.static;

    if (staticPermissions && staticPermissions.includes(action)) {
        // static rule not provided for action
        return true;
    }

    const dynamicPermissions = permissions.dynamic;

    if (dynamicPermissions) {
        const permissionCondition = dynamicPermissions[action];
        if (!permissionCondition) {
            // dynamic rule not provided for action
            return false;
        }

        return permissionCondition(data);
    }
    return false;
};

module.exports = {
    check,
    rules,
    roleNames: {
        VISITOR,
        LOGGED_IN_USER,
        ADMIN
    }
};
