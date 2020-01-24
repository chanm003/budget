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

const Can: React.FC<Props> = props => {
    const checkPermissions = operationsSecurity[props.operationName];
    const hasPermissions =
        checkPermissions && checkPermissions(props.user, props.data);

    if (hasPermissions) {
        return props.yes();
    } else {
        return props.no ? props.no() : null;
    }
};

export default Can;
