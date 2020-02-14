import React from 'react';
import moment from 'moment';
import { IColumn } from 'office-ui-fabric-react';

import ItemsTabular from '../common/components/Table/Table';
import {
    useExpenditureTypeManyQuery as useManyQuery,
    useExpenditureTypeRemoveByIdMutation as useRemoveByIdMutation,
    ExpenditureType as ItemType,
    ExpenditureTypeManyDocument as ManyDocument,
    ExpenditureTypeManyQuery as ManyQuery,
    ExpenditureTypeManyQueryVariables as ManyQueryVariables,
    ExpenditureTypeRemoveByIdMutation as RemoveByIdMutation,
    ExpenditureTypeRemoveByIdMutationVariables as RemoveByIdMutationVariables,
} from '../../generated/graphql';

const resourceName = 'ExpenditureType';
const resourceNamePlural = 'Expenditure Types';
const parseManyResponse = (data?: ManyQuery) =>
    (data?.ExpenditureTypeMany as ItemType[]) || [];
const parseRemoveByIdResponse = (data?: RemoveByIdMutation) =>
    data?.ExpenditureTypeRemoveById as ItemType;

export default function() {
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

    return (
        <ItemsTabular<
            ItemType,
            ManyQuery,
            ManyQueryVariables,
            RemoveByIdMutation,
            RemoveByIdMutationVariables
        >
            columns={columns}
            resourceName={resourceName}
            resourceNamePlural={resourceNamePlural}
            manyDocument={ManyDocument}
            deleteConfirmMessage={item =>
                `Are you sure you want to delete ${item.title}?`
            }
            itemDeletedMessage={removedItem =>
                `'${removedItem.title}' has been deleted.`
            }
            useManyQuery={useManyQuery}
            useRemoveByIdMutation={useRemoveByIdMutation}
            parseManyResponse={parseManyResponse}
            parseRemoveByIdResponse={parseRemoveByIdResponse}
        ></ItemsTabular>
    );
}
