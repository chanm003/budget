import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoadingSegment from '../LoadingSegment/LoadingSegment';

const renderActionButtons = (createItemPath) => (
        <Link to={createItemPath}>
            <Button primary>
                <Icon name='add' /> New
            </Button>
        </Link>
    );

const tableRender = (items, tableRowRender, tableHeaderRowRender, tableRowNoItemsMessage) => {
    if (!items) { return null; }
    return(
        <Table celled compact='very'>
            <Table.Header>
                {tableHeaderRowRender()}
            </Table.Header>
            <Table.Body>
                {
                    items.length > 0
                        ?   items.map(tableRowRender)
                        :   tableRowNoItemsMessage()
                }
            </Table.Body>
        </Table>
    );
}

export default props => {
    const { heading, createItemPath, isLoading, items, tableRowRender, tableHeaderRowRender, tableRowNoItemsMessage } = props;
    return (
        <LoadingSegment heading={heading} headingActions={renderActionButtons(createItemPath)} isLoading={isLoading}>
             {tableRender(items, tableRowRender, tableHeaderRowRender, tableRowNoItemsMessage)}
        </LoadingSegment>
    );
}