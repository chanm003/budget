import React from 'react';
import { apiSecurity } from 'shared';

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
    user: any;
    yes: () => React.ReactElement;
    no?: () => React.ReactElement;
};

interface SecurityLookup {
    [key: string]: (user: any, data: any) => boolean;
}

const Can: React.FC<Props> = props => {
    const hasPermissions = operationsSecurity[props.operationName](
        props.user,
        props.data,
    );

    if (hasPermissions) {
        return props.yes();
    } else {
        return props.no ? props.no() : null;
    }
};

export default Can;
