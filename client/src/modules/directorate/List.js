import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Button, Table } from 'semantic-ui-react'
import { useToasts } from 'react-toast-notifications';
import { toastSettings } from '../core/layout/toaster/settings';
import DeleteButton from '../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import ItemsTabular from '../common/components/Table/Table';
import routeConfig from '../../routes/directorate';
import { GET_ITEMS, DELETE_ITEM, deleteMutationOptions } from './api';

export default function () {
    const { addToast } = useToasts();
    const { loading, data } = useQuery(GET_ITEMS);
    const [deleteItem] = useMutation(DELETE_ITEM, deleteMutationOptions);

    const tableHeaderRowRender = () => (
        <Table.Row>
            <Table.HeaderCell>
                Title
            </Table.HeaderCell>
            <Table.HeaderCell>
            </Table.HeaderCell>
        </Table.Row>
    )

    const tableRowRender = ({ id, title }) => (
        <Table.Row key={id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell collapsing textAlign='right'>
                <Link to={routeConfig.directorateEdit.path(id)}>
                    <Button icon='pencil' primary />
                </Link>
                <DeleteButton guid={id} onDeleteConfirm={onDeleteClicked} />
            </Table.Cell>
        </Table.Row>
    )

    const tableRowNoItemsMessage = () => (
        <Table.Row>
            <Table.Cell colSpan='2'>No directorates have been added by an administrator</Table.Cell>
        </Table.Row>
    );

    const onDeleteClicked = async (guid) => {
        const { data: { removeDirectorate: item } } = await deleteItem({ variables: { id: guid } });
        addToast(`'${item.title}' has been deleted.`, toastSettings.success);
    }

    return (
        <Container fluid>
            <ItemsTabular
                heading="Directorates"
                isLoading={loading}
                items={data ? data.directorates : []}
                createItemPath={routeConfig.directorateCreate.path}
                tableHeaderRowRender={tableHeaderRowRender}
                tableRowRender={tableRowRender}
                tableRowNoItemsMessage={tableRowNoItemsMessage}>
            </ItemsTabular>
        </Container>
    );
}