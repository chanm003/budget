import React, { useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import { useAuth } from '../core/authentication/authContext';
import { toastSettings } from '../core/layout/toaster/settings';
import routeConfig from '../../routes/directorate';
import Can from '../core/security/Can';
import {
    useDirectorateManyQuery,
    useDirectorateRemoveByIdMutation,
    Directorate,
    DirectorateManyDocument,
} from '../../generated/graphql';
import {
    IColumn,
    DetailsList,
    DetailsListLayoutMode,
    SelectionMode,
    IContextualMenuItem,
    ContextualMenuItemType,
    DefaultButton,
} from 'office-ui-fabric-react';

import {
    DeleteDialog,
    DeleteDialogState,
} from '../common/components/DeleteDialog/DeleteDialog';

const initialDialogState = {
    visible: false,
    guidToDelete: '',
    subText: '',
};

export default function() {
    const [deleteDialog, setDeleteDialog] = useState<
        DeleteDialogState
    >(initialDialogState);
    const { addToast } = useToasts();
    const history = useHistory();
    const { loading, data } = useDirectorateManyQuery();
    const [deleteItem] = useDirectorateRemoveByIdMutation();
    const { user } = useAuth();

    const _getKey = (item: any, index?: number): string => {
        return item._id;
    };

    const columns = (): IColumn[] => {
        return [
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
                    return (
                        <span>{moment(updatedAt).format('LLL')}</span>
                    );
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
            {
                key: '_id',
                name: '',
                fieldName: '_id',
                minWidth: 16,
                maxWidth: 16,
                onRender: (item: Directorate) => {
                    const menuItems: IContextualMenuItem[] = [
                        {
                            key: 'actionsSections',
                            itemType: ContextualMenuItemType.Section,
                            sectionProps: {
                                topDivider: true,
                                bottomDivider: true,
                                title: 'Actions',
                                items: [
                                    {
                                        key: 'editItem',
                                        text: 'Edit',
                                        iconProps: {
                                            iconName: 'Edit',
                                        },
                                        onClick: (
                                            ev?: any,
                                            menuItem?: IContextualMenuItem,
                                        ) => {
                                            history.push(
                                                routeConfig.directorateEdit.path(
                                                    item._id,
                                                ),
                                            );
                                        },
                                    },
                                    {
                                        key: 'deleteItem',
                                        text: 'Delete',
                                        iconProps: {
                                            iconName: 'Delete',
                                        },
                                        onClick: (
                                            ev?: any,
                                            menuItem?: IContextualMenuItem,
                                        ) => {
                                            showDeleteDialog(item);
                                        },
                                    },
                                ],
                            },
                        },
                    ];
                    return (
                        <DefaultButton
                            styles={{
                                root: {
                                    height: '22px',
                                },
                            }}
                            text="Actions"
                            menuProps={{ items: menuItems }}
                        />
                    );
                },
            },
        ];
    };

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

    const closeDeleteDialog = () =>
        setDeleteDialog(initialDialogState);
    const showDeleteDialog = (item: Directorate) =>
        setDeleteDialog({
            visible: true,
            guidToDelete: item._id,
            subText: `Are you sure you want to delete ${item.title}?`,
        });

    return (
        <>
            <DetailsList
                items={items}
                columns={columns()}
                getKey={_getKey}
                setKey="none"
                layoutMode={DetailsListLayoutMode.justified}
                selectionMode={SelectionMode.none}
                isHeaderVisible={true}
            />
            <DeleteDialog
                dialogState={deleteDialog}
                close={closeDeleteDialog}
                onDeleteButtonClicked={onDeleteClicked}
            />
        </>
    );
}
