import React from 'react';
import { apiSecurity } from 'shared';
import { User } from '../../../generated/graphql';

const operationsSecurity: SecurityLookup = Object.keys(
    apiSecurity,
).reduce((combined, modelName) => {
    combined = {
        ...combined,
        ...apiSecurity[modelName].Query,
        ...apiSecurity[modelName].Mutation,
    };
    return combined;
}, {});

type Props = {
    data?: any;
    operationName: string;
    user: User;
    yes: () => React.ReactElement;
    no?: () => React.ReactElement;
};

interface SecurityLookup {
    [key: string]: (user: User, data: any) => boolean;
}

const Can: React.FC<Props> = ({
    user,
    data,
    operationName,
    yes,
    no,
}) => {
    const shouldShow = hasPermissions(user, operationName, data);

    if (shouldShow) {
        return yes();
    } else {
        return no ? no() : null;
    }
};

export const hasPermissions = (
    user: User,
    operationName: string,
    data?: any,
) => {
    const checkPermissions = operationsSecurity[operationName];
    return checkPermissions && checkPermissions(user, data);
};

export default Can;
