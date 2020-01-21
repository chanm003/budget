import { RouteProps } from 'react-router-dom';
import { User } from '../generated/graphql';

export interface PrivateRouteProps extends RouteProps {
    operationName: string;
    auth: boolean;
}

export interface AuthenticationPayload {
    token: string;
    user: User;
}

export interface RouteDictionary {
    [key: string]: any;
}
