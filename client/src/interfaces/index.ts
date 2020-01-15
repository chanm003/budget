import { RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
    operationName: string;
    auth: boolean;
}

export interface AuthenticationPayload {
    token: string;
    user: any;
}

export interface RouteDictionary {
    [key: string]: any;
}
