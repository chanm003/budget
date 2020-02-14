import React from 'react';
import Form, { FormData } from './Form';
import BaseCreateOrEdit from '../common/components/BaseCreateOrEdit/BaseCreateOrEdit';

import { routeConfig } from '../../combineRoutes';
import {
    useExecutionMethodByIdLazyQuery as useByIdLazyQuery,
    useExecutionMethodCreateOneMutation as useCreateOneMutation,
    useExecutionMethodUpdateByIdMutation as useUpdateByIdMutation,
    ExecutionMethodByIdQueryVariables,
    ExecutionMethodManyDocument as ManyDocument,
    ExecutionMethodByIdQuery as ByIdQuery,
    ExecutionMethodCreateOneMutation as CreateOneMutation,
    ExecutionMethodCreateOneMutationVariables as CreateOneMutationVariables,
    ExecutionMethodUpdateByIdMutation as UpdateByIdMutation,
    ExecutionMethodUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    ExecutionMethod,
} from '../../generated/graphql';

const onItemCreatedMessage = (createdItem: ExecutionMethod) =>
    `'${createdItem.title}' has been created.`;

const parseCreateOneResponse = (data?: CreateOneMutation) =>
    data?.ExecutionMethodCreateOne as ExecutionMethod;

const parseByIdResponse = (data?: ByIdQuery) =>
    data?.ExecutionMethodById as ExecutionMethod;

const redirectToAllItemsPath = () =>
    routeConfig.ExecutionMethodMany.path;

const identifyEditableFields = (
    itemToEdit: Partial<FormData>,
): Partial<FormData> => {
    const { title } = itemToEdit;

    return {
        title,
    };
};

const CreateOrEdit: React.FC = () => {
    return (
        <BaseCreateOrEdit<
            ExecutionMethod,
            FormData,
            ByIdQuery,
            ExecutionMethodByIdQueryVariables,
            CreateOneMutation,
            CreateOneMutationVariables,
            UpdateByIdMutation,
            UpdateByIdMutationVariables
        >
            Form={Form}
            identifyEditableFields={identifyEditableFields}
            manyDocument={ManyDocument}
            onItemCreatedMessage={onItemCreatedMessage}
            parseByIdResponse={parseByIdResponse}
            parseCreateOneResponse={parseCreateOneResponse}
            redirectToAllItemsPath={redirectToAllItemsPath}
            useByIdLazyQuery={useByIdLazyQuery}
            useCreateOneMutation={useCreateOneMutation}
            useUpdateByIdMutation={useUpdateByIdMutation}
        />
    );
};

export default CreateOrEdit;
