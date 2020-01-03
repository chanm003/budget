import { apiPermissions } from 'shared';

const Can = props => {
    const hasPermissions = apiPermissions[props.operationName](props.user, props.data);
    return hasPermissions ? props.yes() : props.no();
}

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;