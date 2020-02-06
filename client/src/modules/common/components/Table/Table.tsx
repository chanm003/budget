import React, { useState, ReactNode } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    PrimaryButton,
    SelectionMode,
    DetailsListLayoutMode,
    DetailsList,
    IColumn,
} from 'office-ui-fabric-react';

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

interface Props<T extends IMongoItem> {
    items: T[];
    columns: IColumn[];
    isLoading: boolean;
    onDeleteClicked: any;
    resourceName: string;
    resourceNamePlural: string;
    deleteDialogState: (item: T) => DeleteDialogState;
}

const ItemsTable = <T extends IMongoItem>(
    props: Props<T> & { children?: ReactNode },
) => {
    const initialDialogState = {
        visible: false,
        guidToDelete: '',
        subText: '',
    };

    const [deleteDialog, setDeleteDialog] = useState<
        DeleteDialogState
    >(initialDialogState);
    const { user } = useAuth();
    const history = useHistory();
    const {
        resourceNamePlural,
        columns,
        items,
        isLoading,
        onDeleteClicked,
        resourceName,
    } = props;

    const closeDeleteDialog = () =>
        setDeleteDialog(initialDialogState);

    const showDeleteDialog = (item: T) =>
        setDeleteDialog(props.deleteDialogState(item));

    const _getKey = (item: any, index?: number): string => {
        return item._id;
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

    return (
        <LoadingSegment
            heading={resourceNamePlural}
            headingActions={renderActionButtons(
                `${resourceName}CreateOne`,
                routeConfig[`${resourceName}CreateOne`].path,
                user,
            )}
            isLoading={isLoading}
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
