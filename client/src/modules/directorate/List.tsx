import React from 'react';
import moment from 'moment';
import { IColumn } from 'office-ui-fabric-react';
import { useToasts } from 'react-toast-notifications';

import { toastSettings } from '../core/layout/toaster/settings';
import ItemsTabular from '../common/components/Table/Table';
import {
    useDirectorateManyQuery as useManyQuery,
    useDirectorateRemoveByIdMutation as useRemoveByIdMutation,
    Directorate as ItemType,
    DirectorateManyDocument as ManyDocument,
    DirectorateManyQuery as ManyQuery,
    DirectorateRemoveByIdMutation as RemoveByIdMutation,
} from '../../generated/graphql';

const resourceName = 'Directorate';
const resourceNamePlural = 'Directorates';
const parseManyResponse = (data?: ManyQuery): ItemType[] => {
    return (data?.DirectorateMany as ItemType[]) || [];
};
const parseRemoveByIdResponse = (
    data?: RemoveByIdMutation,
): ItemType | undefined => {
    return data?.DirectorateRemoveById as ItemType;
};

export default function() {
    const { addToast } = useToasts();
    const { loading, data } = useManyQuery();
    const [deleteItem] = useRemoveByIdMutation();

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
            onRender: ({ updatedAt }: ItemType) => {
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
            }: ItemType) => {
                return <span>{`${firstName} ${lastName}`}</span>;
            },
            isPadded: true,
        },
    ];

    const onDeleteClicked = async (guid: string) => {
        const result = await deleteItem({
            variables: { id: guid },
            refetchQueries: [{ query: ManyDocument }],
        });

        const removedItem = parseRemoveByIdResponse(result.data);
        if (removedItem) {
            addToast(
                `'${removedItem.title}' has been deleted.`,
                toastSettings.success,
            );
        }
    };

    const items = parseManyResponse(data);

    return (
        <ItemsTabular<ItemType>
            items={items}
            columns={columns}
            resourceName={resourceName}
            resourceNamePlural={resourceNamePlural}
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
