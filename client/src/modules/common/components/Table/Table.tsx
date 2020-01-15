import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoadingSegment from '../LoadingSegment/LoadingSegment';
import Can from '../../../core/security/Can';
import { useAuth } from '../../../core/authentication/authContext';

const renderActionButtons = (user: any, createItemPath: string) => (
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

const tableRender = (renderProps: TableRenderProps) => {
    const {
        items,
        tableRowRender,
        tableHeaderRowRender,
        tableRowNoItemsMessage,
    } = renderProps;

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
};

interface Props {
    heading: string;
    createItemPath: string;
    isLoading: boolean;
    items: Array<any>;
    tableRowRender: any;
    tableHeaderRowRender: any;
    tableRowNoItemsMessage: any;
}

type TableRenderProps = Partial<Props>;

const ItemsTable: React.FC<Props> = props => {
    const { user } = useAuth();
    const {
        heading,
        createItemPath,
        isLoading,
        ...tableRenderProps
    } = props;

    return (
        <LoadingSegment
            heading={heading}
            headingActions={renderActionButtons(user, createItemPath)}
            isLoading={isLoading}
        >
            {tableRender(tableRenderProps)}
        </LoadingSegment>
    );
};

export default ItemsTable;
