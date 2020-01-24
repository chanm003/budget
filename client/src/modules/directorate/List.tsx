import React from 'react';
import { Container, Button, Table } from 'semantic-ui-react';
import { useToasts } from 'react-toast-notifications';
import { useAuth } from '../core/authentication/authContext';
import { toastSettings } from '../core/layout/toaster/settings';
import DeleteButton from '../../modules/common/components/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import ItemsTabular from '../common/components/Table/Table';
import routeConfig from '../../routes/directorate';
import Can from '../core/security/Can';
import {
    useDirectorateManyQuery,
    useDirectorateRemoveByIdMutation,
    Directorate,
    DirectorateManyDocument,
} from '../../generated/graphql';

export default function() {
    const { addToast } = useToasts();
    const { loading, data } = useDirectorateManyQuery();
    const [deleteItem] = useDirectorateRemoveByIdMutation();
    const { user } = useAuth();

    const tableHeaderRowRender = () => (
        <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
    );

    const tableRowRender = ({ _id, title }: Directorate) => (
        <Table.Row key={_id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
                <Can
                    user={user}
                    operationName={'DirectorateUpdateById'}
                    yes={() => (
                        <Link
                            to={routeConfig.directorateEdit.path(_id)}
                        >
                            <Button icon="pencil" primary />
                        </Link>
                    )}
                />
                <Can
                    user={user}
                    operationName={'DirectorateRemoveById'}
                    yes={() => (
                        <DeleteButton
                            guid={_id}
                            onDeleteConfirm={onDeleteClicked}
                        />
                    )}
                />
            </Table.Cell>
        </Table.Row>
    );

    const tableRowNoItemsMessage = () => (
        <Table.Row>
            <Table.Cell colSpan="2">
                No directorates have been added by an administrator
            </Table.Cell>
        </Table.Row>
    );

    const onDeleteClicked = async (guid: string) => {
        const result = await deleteItem({
            variables: { id: guid },
            refetchQueries: [{ query: DirectorateManyDocument }],
        });

        const removedItem = result.data?.DirectorateRemoveById;
        if (removedItem) {
            addToast(
                `'${removedItem.title}' has been deleted.`,
                toastSettings.success,
            );
        }
    };

    const items = (data?.DirectorateMany as Directorate[]) || [];

    return (
        <Container fluid>
            <ItemsTabular
                heading="Directorates"
                isLoading={loading}
                items={items}
                createItemPath={routeConfig.directorateCreate.path}
                tableHeaderRowRender={tableHeaderRowRender}
                tableRowRender={tableRowRender}
                tableRowNoItemsMessage={tableRowNoItemsMessage}
            ></ItemsTabular>
        </Container>
    );
}
