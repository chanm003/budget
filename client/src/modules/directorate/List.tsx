import React from 'react';
import moment from 'moment';
import { IColumn } from 'office-ui-fabric-react';
import { useToasts } from 'react-toast-notifications';
import { toastSettings } from '../core/layout/toaster/settings';
import routeConfig from '../../routes/directorate';
import {
    useDirectorateManyQuery,
    useDirectorateRemoveByIdMutation,
    Directorate,
    DirectorateManyDocument,
} from '../../generated/graphql';
import ItemsTabular from '../common/components/Table/Table';

export default function() {
    const { addToast } = useToasts();
    const { loading, data } = useDirectorateManyQuery();
    const [deleteItem] = useDirectorateRemoveByIdMutation();

    const columns: IColumn[] = [
        {
            key: 'title',
            name: 'Title',
            fieldName: 'title',
            minWidth: 210,
            maxWidth: 350,
            isRowHeader: true,
            isResizable: true,
            isPadded: true,
        },
        {
            key: 'updatedAt',
            name: 'Date Modified',
            fieldName: 'updatedAt',
            minWidth: 160,
            maxWidth: 180,
            isResizable: true,
            onRender: ({ updatedAt }: Directorate) => {
                return <span>{moment(updatedAt).format('LLL')}</span>;
            },
            isPadded: true,
        },
        {
            key: 'updatedBy',
            name: 'Modified By',
            fieldName: 'updatedBy',
            minWidth: 70,
            maxWidth: 90,
            isResizable: true,
            isCollapsible: true,
            onRender: ({
                updatedBy: { firstName, lastName },
            }: Directorate) => {
                return <span>{`${firstName} ${lastName}`}</span>;
            },
            isPadded: true,
        },
    ];

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
        <ItemsTabular<Directorate>
            items={items}
            columns={columns}
            heading="Directorates"
            createItemOperationName="DirectorateCreateOne"
            createItemPath={routeConfig.directorateCreate.path}
            editItemPath={item =>
                routeConfig.directorateEdit.path(item._id)
            }
            onDeleteClicked={onDeleteClicked}
            deleteDialogState={item => ({
                visible: true,
                guidToDelete: item._id,
                subText: `Are you sure you want to delete ${item.title}?`,
            })}
            isLoading={loading}
        ></ItemsTabular>
    );
}
