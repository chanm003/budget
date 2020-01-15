import { RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
    operationName: string;
    component: any;
}

export interface AuthenticationPayload {
    token: string;
    user: any;
}

export interface RouteDictionary {
    [key: string]: any;
}
