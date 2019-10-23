import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Container, Button, Table } from 'semantic-ui-react'
import DeleteButton from '../../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import ItemsTabular from '../../common/components/Table/Table';
import admin from '../../../routes/admin';
import { GET_ITEMS, DELETE_ITEM, deleteMutationOptions } from './api';
import { useStore } from '../../../context';

export default function () {
    const { showSuccessToast } = useStore();
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
                <Link to={admin.directorateEdit.path(id)}>
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
        showSuccessToast({ title: 'Directorate deleted', description: `'${item.title}' has been deleted.` });
    }

    return (
        <Container fluid>
            <ItemsTabular
                heading="Directorates"
                isLoading={loading}
                items={data ? data.directorates : []}
                createItemPath={admin.directorateCreate.path}
                tableHeaderRowRender={tableHeaderRowRender}
                tableRowRender={tableRowRender}
                tableRowNoItemsMessage={tableRowNoItemsMessage}>
            </ItemsTabular>
        </Container>
    );
}