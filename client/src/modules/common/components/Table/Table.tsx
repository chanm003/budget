import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoadingSegment from '../LoadingSegment/LoadingSegment';
import Can from '../../../core/security/Can';
import { useAuth } from '../../../core/authentication/authContext';
import { User } from '../../../../generated/graphql';

const renderActionButtons = (user: User, createItemPath: string) => (
    <Can
        user={user}
        operationName={'DirectorateCreateOne'}
        yes={() => (
            <Link to={createItemPath}>
                <Button primary>
                    <Icon name="add" /> New
                </Button>
            </Link>
        )}
    />
);

function tableRender<T>(props: Props<T>) {
    const {
        items,
        tableRowRender,
        tableHeaderRowRender,
        tableRowNoItemsMessage,
    } = props;

    if (!items) {
        return null;
    }
    return (
        <Table celled compact="very">
            <Table.Header>{tableHeaderRowRender()}</Table.Header>
            <Table.Body>
                {items.length > 0
                    ? items.map(tableRowRender)
                    : tableRowNoItemsMessage()}
            </Table.Body>
        </Table>
    );
}

type Props<T> = {
    heading: string;
    createItemPath: string;
    isLoading: boolean;
    items: Array<T>;
    tableRowRender: (item: T) => JSX.Element;
    tableHeaderRowRender: () => JSX.Element;
    tableRowNoItemsMessage: () => JSX.Element;
};

function ItemsTable<T>(props: Props<T>) {
    const { user } = useAuth();
    const { heading, createItemPath, isLoading } = props;

    return (
        <LoadingSegment
            heading={heading}
            headingActions={renderActionButtons(user, createItemPath)}
            isLoading={isLoading}
        >
            {tableRender(props)}
        </LoadingSegment>
    );
}

export default ItemsTable;
