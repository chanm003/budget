interface RoleNameConstants {
    [key: string]: string;
}

declare module 'shared' {
    export const roleNames: RoleNameConstants;
    export const apiSecurity: any;
    export const validationSchemas: any;
}
