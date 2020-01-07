import { apiPermissions } from 'shared';

const getAccessFunc = operationName => {

    for (let model of Object.keys(apiPermissions)) {
        if (apiPermissions[model].Query[operationName]) {
            return apiPermissions[model].Query[operationName];
        }

        if (apiPermissions[model].Mutation[operationName]) {
            return apiPermissions[model].Mutation[operationName];
        }
    }
}

const Can = props => {
    const checkPermissions = getAccessFunc(props.operationName);
    const hasPermissions = checkPermissions(props.user, props.data);
    return hasPermissions ? props.yes() : props.no();
}

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;