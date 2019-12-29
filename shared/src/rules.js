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

module.exports = {
    rules,
    roleNames: {
        VISITOR,
        LOGGED_IN_USER,
        ADMIN
    }
};
