import { apiSecurity } from 'shared';

const operationsSecurity = Object.keys(apiSecurity).reduce((combined, modelName) => {
    combined = {
        ...combined,
        ...apiSecurity[modelName].Query,
        ...apiSecurity[modelName].Mutation
    }
    return combined;
}, {});

const Can = props => {
    const hasPermissions = operationsSecurity[props.operationName](props.user, props.data);
    return hasPermissions ? props.yes() : props.no();
}

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;