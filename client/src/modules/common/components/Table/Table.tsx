import React, { useState, ReactNode } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    PrimaryButton,
    SelectionMode,
    DetailsListLayoutMode,
    DetailsList,
    IColumn,
} from 'office-ui-fabric-react';
import { useToasts } from 'react-toast-notifications';

import { toastSettings } from '../../../core/layout/toaster/settings';

import {
    DeleteDialog,
    DeleteDialogState,
} from '../DeleteDialog/DeleteDialog';
import { ActionsButton } from '../ActionsButton/ActionsButton';
import LoadingSegment from '../LoadingSegment/LoadingSegment';
import Can from '../../../core/security/Can';
import { useAuth } from '../../../core/authentication/authContext';
import { User } from '../../../../generated/graphql';
import { routeConfig } from '../../../../combineRoutes';
import {
    MutationTuple,
    MutationHookOptions,
    QueryHookOptions,
} from '@apollo/react-hooks/lib/types';
import { QueryResult } from '@apollo/react-common/lib/types/types';

function renderActionButtons(
    createItemOperationName: string,
    createItemPath: string,
    user: User,
) {
    return (
        <Can
            user={user}
            operationName={createItemOperationName}
            yes={() => (
                <Link to={createItemPath}>
                    <PrimaryButton
                        text="New Item"
                        iconProps={{ iconName: 'Add' }}
                    ></PrimaryButton>
                </Link>
            )}
        />
    );
}

interface IMongoItem {
    _id: string;
}

interface Props<
    T extends IMongoItem,
    ManyQuery,
    ManyQueryVariables,
    RemoveByIdMutation,
    RemoveByIdMutationVariables
> {
    columns: IColumn[];
    deleteConfirmMessage: (item: T) => string;
    itemDeletedMessage: (item: T) => string;
    resourceName: string;
    resourceNamePlural: string;
    manyDocument: any;
    useManyQuery: (
        baseOptions?: QueryHookOptions<ManyQuery, ManyQueryVariables>,
    ) => QueryResult<ManyQuery, ManyQueryVariables>;
    parseManyResponse: (data?: ManyQuery) => T[];
    useRemoveByIdMutation: (
        baseOptions?: MutationHookOptions<
            RemoveByIdMutation,
            RemoveByIdMutationVariables
        >,
    ) => MutationTuple<
        RemoveByIdMutation,
        RemoveByIdMutationVariables
    >;
    parseRemoveByIdResponse: (
        data?: RemoveByIdMutation,
    ) => T | undefined;
}

const ItemsTable = <
    T extends IMongoItem,
    ManyQuery,
    ManyQueryVariables,
    RemoveByIdMutation,
    RemoveByIdMutationVariables
>(
    props: Props<
        T,
        ManyQuery,
        ManyQueryVariables,
        RemoveByIdMutation,
        RemoveByIdMutationVariables
    > & { children?: ReactNode },
) => {
    const initialDialogState = {
        visible: false,
        guidToDelete: '',
        subText: '',
    };

    const {
        resourceNamePlural,
        columns,
        deleteConfirmMessage,
        useManyQuery,
        itemDeletedMessage,
        resourceName,
        manyDocument,
        parseManyResponse,
        parseRemoveByIdResponse,
        useRemoveByIdMutation,
    } = props;

    const [deleteDialog, setDeleteDialog] = useState<
        DeleteDialogState
    >(initialDialogState);
    const { user } = useAuth();
    const history = useHistory();
    const { addToast } = useToasts();
    const { loading, data } = useManyQuery();
    const [deleteItem] = useRemoveByIdMutation();

    const closeDeleteDialog = () =>
        setDeleteDialog(initialDialogState);

    const showDeleteDialog = (item: T) =>
        setDeleteDialog({
            visible: true,
            guidToDelete: item._id,
            subText: deleteConfirmMessage(item),
        });

    const _getKey = (item: any, index?: number): string => {
        return item._id;
    };

    const onDeleteClicked = async (guid: string) => {
        const result = await deleteItem({
            variables: { id: guid } as any,
            refetchQueries: [{ query: manyDocument }],
        });

        const removedItem = parseRemoveByIdResponse(result.data);
        if (removedItem) {
            addToast(
                itemDeletedMessage(removedItem),
                toastSettings.success,
            );
        }
    };

    const actionButtonColumn: IColumn = {
        key: '_id',
        name: '',
        fieldName: '_id',
        minWidth: 100,
        maxWidth: 100,
        onRender: (item: T) => {
            return (
                <ActionsButton
                    onEditItemPermissions={`${resourceName}UpdateById`}
                    onDeleteItemPermissions={`${resourceName}RemoveById`}
                    onEditItemClicked={() => {
                        history.push(
                            routeConfig[
                                `${resourceName}UpdateById`
                            ].path((item as IMongoItem)._id),
                        );
                    }}
                    onDeleteItemClicked={() => {
                        showDeleteDialog(item);
                    }}
                />
            );
        },
    };

    const items = parseManyResponse(data);
    return (
        <LoadingSegment
            heading={resourceNamePlural}
            headingActions={renderActionButtons(
                `${resourceName}CreateOne`,
                routeConfig[`${resourceName}CreateOne`].path,
                user,
            )}
            isLoading={loading}
        >
            <DetailsList
                items={items}
                columns={[actionButtonColumn, ...columns]}
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
        </LoadingSegment>
    );
};

export default ItemsTable;
