import { check } from 'shared';

const Can = props =>
    check(props.role, props.resource, props.action, props.data)
        ? props.yes()
        : props.no();

Can.defaultProps = {
    yes: () => null,
    no: () => null
};

export default Can;