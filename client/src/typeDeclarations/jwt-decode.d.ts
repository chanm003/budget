interface JwtDecodedResult {
    exp: number;
    user: any;
}

declare module 'jwt-decode' {
    export default (token: string, options?: any) => string;
}
