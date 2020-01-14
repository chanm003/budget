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
    yes: () => React.ReactElement | null;
    no: () => React.ReactElement | null;
};

interface SecurityLookup {
    [key: string]: (user: any, data: any) => boolean;
}

const Can: React.FC<Props> = props => {
    const hasPermissions = operationsSecurity[props.operationName](
        props.user,
        props.data,
    );
    return hasPermissions ? props.yes() : props.no();
};

Can.defaultProps = {
    yes: () => null,
    no: () => null,
} as Partial<Props>;

export default Can;
