const rules = {
    visitor: {
        static: []
    },
    loggedInUser: {
        static: [
            "directorates:list",
        ]
    },
    admin: {
        static: [
            "directorates:list",
            "directorates:create",
            "directorates:edit"
        ]
    }
};

module.exports = rules;
