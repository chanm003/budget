import React from 'react';
import { Container, Button, Table } from 'semantic-ui-react'
import { useToasts } from 'react-toast-notifications';
import { useAuth } from '../core/authentication/authContext';
import { toastSettings } from '../core/layout/toaster/settings';
import DeleteButton from '../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import ItemsTabular from '../common/components/Table/Table';
import routeConfig from '../../routes/directorate';
import Can from '../core/security/Can';
import { DirectorateManyQuery, DirectorateManyQueryVariables, useDirectorateManyQuery, useDirectorateRemoveByIdMutation, Directorate, DirectorateManyDocument } from '../../generated/graphql';

export default function () {
    const { addToast } = useToasts();
    const { loading, data } = useDirectorateManyQuery({
        fetchPolicy: 'cache-and-network'
    });
    const [deleteItem] = useDirectorateRemoveByIdMutation();
    const { user } = useAuth();

    const tableHeaderRowRender = () => (
        <Table.Row>
            <Table.HeaderCell>
                Title
            </Table.HeaderCell>
            <Table.HeaderCell>
            </Table.HeaderCell>
        </Table.Row>
    )

    const tableRowRender = ({ _id, title }: Directorate) => (
        <Table.Row key={_id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell collapsing textAlign='right'>
                <Can
                    user={user}
                    operationName={'DirectorateUpdateById'}
                    yes={() => (
                        <Link to={routeConfig.directorateEdit.path(_id)}>
                            <Button icon='pencil' primary />
                        </Link>
                    )}
                />
                <Can
                    user={user}
                    operationName={'DirectorateRemoveById'}
                    yes={() => (
                        <DeleteButton guid={_id} onDeleteConfirm={onDeleteClicked} />
                    )}
                />
            </Table.Cell>
        </Table.Row>
    )

    const tableRowNoItemsMessage = () => (
        <Table.Row>
            <Table.Cell colSpan='2'>No directorates have been added by an administrator</Table.Cell>
        </Table.Row>
    );

    const onDeleteClicked = async (guid: string) => {
        const result = await deleteItem({
            variables: { id: guid },
            update: (cache, result) => {
                const deletedItem = result.data?.DirectorateRemoveById?.record;
                const cachedItems = cache.readQuery<DirectorateManyQuery, DirectorateManyQueryVariables>(
                    {
                        query: DirectorateManyDocument
                    }
                );

                if (cachedItems && cachedItems.DirectorateMany) {
                    cache.writeQuery<DirectorateManyQuery, DirectorateManyQueryVariables>({
                        query: DirectorateManyDocument,
                        data: {
                            DirectorateMany: cachedItems.DirectorateMany.filter(i => i?._id !== deletedItem?._id)
                        }
                    });
                }
            }
        });

        const removedItem = result.data?.DirectorateRemoveById?.record;
        if (removedItem) {
            addToast(`'${removedItem.title}' has been deleted.`, toastSettings.success);
        }
    }

    const items = data && data.DirectorateMany ? data.DirectorateMany : [];

    return (
        <Container fluid>
            <ItemsTabular
                heading="Directorates"
                isLoading={loading}
                items={items}
                createItemPath={routeConfig.directorateCreate.path}
                tableHeaderRowRender={tableHeaderRowRender}
                tableRowRender={tableRowRender}
                tableRowNoItemsMessage={tableRowNoItemsMessage}>
            </ItemsTabular>
        </Container>
    );
}