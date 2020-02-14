import React from 'react';
import moment from 'moment';
import { IColumn } from 'office-ui-fabric-react';

import ItemsTabular from '../common/components/Table/Table';
import {
    useExecutionMethodManyQuery as useManyQuery,
    useExecutionMethodRemoveByIdMutation as useRemoveByIdMutation,
    ExecutionMethod as ItemType,
    ExecutionMethodManyDocument as ManyDocument,
    ExecutionMethodManyQuery as ManyQuery,
    ExecutionMethodManyQueryVariables as ManyQueryVariables,
    ExecutionMethodRemoveByIdMutation as RemoveByIdMutation,
    ExecutionMethodRemoveByIdMutationVariables as RemoveByIdMutationVariables,
} from '../../generated/graphql';

const resourceName = 'ExecutionMethod';
const resourceNamePlural = 'Execution Methods';
const parseManyResponse = (data?: ManyQuery) =>
    (data?.ExecutionMethodMany as ItemType[]) || [];
const parseRemoveByIdResponse = (data?: RemoveByIdMutation) =>
    data?.ExecutionMethodRemoveById as ItemType;

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
