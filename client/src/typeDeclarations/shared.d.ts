interface RoleNameConstants {
    [key: string]: string;
}

declare module 'shared' {
    export const roleNames: RoleNameConstants;
    export const apiSecurity: {
        [key: string]: {
            Query: {
                [key: string]: (user, data) => boolean;
            };
            Mutation: {
                [key: string]: (user, data) => boolean;
            };
        };
    };
    export const validationSchemas: any;
    export const serverErrors: {
        [key: string]: string;
    };
}
