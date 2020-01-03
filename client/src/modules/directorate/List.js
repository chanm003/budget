import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Button, Table } from 'semantic-ui-react'
import { useToasts } from 'react-toast-notifications';
import { toastSettings } from '../core/layout/toaster/settings';
import DeleteButton from '../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import ItemsTabular from '../common/components/Table/Table';
import routeConfig from '../../routes/directorate';
import { api, mutationOptions, responseParsers } from './api';

export default function () {
    const { addToast } = useToasts();
    const { loading, data } = useQuery(api.Query.Many);
    const [deleteItem] = useMutation(api.Mutation.RemoveById, mutationOptions.RemoveById);

    const tableHeaderRowRender = () => (
        <Table.Row>
            <Table.HeaderCell>
                Title
            </Table.HeaderCell>
            <Table.HeaderCell>
            </Table.HeaderCell>
        </Table.Row>
    )

    const tableRowRender = ({ _id, title }) => (
        <Table.Row key={_id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell collapsing textAlign='right'>
                <Link to={routeConfig.directorateEdit.path(_id)}>
                    <Button icon='pencil' primary />
                </Link>
                <DeleteButton guid={_id} onDeleteConfirm={onDeleteClicked} />
            </Table.Cell>
        </Table.Row>
    )

    const tableRowNoItemsMessage = () => (
        <Table.Row>
            <Table.Cell colSpan='2'>No directorates have been added by an administrator</Table.Cell>
        </Table.Row>
    );

    const onDeleteClicked = async (guid) => {
        const removedItem = responseParsers.RemoveById(await deleteItem({ variables: { id: guid } }))
        addToast(`'${removedItem.title}' has been deleted.`, toastSettings.success);
    }

    return (
        <Container fluid>
            <ItemsTabular
                heading="Directorates"
                isLoading={loading}
                items={responseParsers.Many(data)}
                createItemPath={routeConfig.directorateCreate.path}
                tableHeaderRowRender={tableHeaderRowRender}
                tableRowRender={tableRowRender}
                tableRowNoItemsMessage={tableRowNoItemsMessage}>
            </ItemsTabular>
        </Container>
    );
}