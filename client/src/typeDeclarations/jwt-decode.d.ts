interface JwtDecodedResult {
    exp: number;
    user: User;
}

declare module 'jwt-decode' {
    export default (token: string, options?: any) => string;
}
