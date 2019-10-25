const rules = {
    visitor: {
        static: [
            "403-page:visit",
            "home-page:visit",
            "login-page:visit",
            "logout-page:visit"
        ]
    },
    loggedInUser: {
        static: [
            "403-page:visit",
            "home-page:visit",
            "login-page:visit",
            "logout-page:visit",
            "directorates:list",
            "directorates:create"
        ],
        dynamic: {
            "directorates:edit": ({ userId, postOwnerId }) => {
                if (!userId || !postOwnerId) return false;
                return userId === postOwnerId;
            }
        }
    },
    admin: {
        static: [
            "403-page:visit",
            "home-page:visit",
            "login-page:visit",
            "logout-page:visit",
            "directorates:list",
            "directorates:create",
            "directorates:edit",
            "directorates:delete"
        ]
    }
};

export default rules;