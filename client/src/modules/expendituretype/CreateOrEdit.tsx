import React from 'react';
import Form, { FormData } from './Form';
import BaseCreateOrEdit from '../common/components/BaseCreateOrEdit/BaseCreateOrEdit';

import { routeConfig } from '../../combineRoutes';
import {
    useExpenditureTypeByIdLazyQuery as useByIdLazyQuery,
    useExpenditureTypeCreateOneMutation as useCreateOneMutation,
    useExpenditureTypeUpdateByIdMutation as useUpdateByIdMutation,
    ExpenditureTypeByIdQueryVariables,
    ExpenditureTypeManyDocument as ManyDocument,
    ExpenditureTypeByIdQuery as ByIdQuery,
    ExpenditureTypeCreateOneMutation as CreateOneMutation,
    ExpenditureTypeCreateOneMutationVariables as CreateOneMutationVariables,
    ExpenditureTypeUpdateByIdMutation as UpdateByIdMutation,
    ExpenditureTypeUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    ExpenditureType,
} from '../../generated/graphql';

const onItemCreatedMessage = (createdItem: ExpenditureType) =>
    `'${createdItem.title}' has been created.`;

const parseCreateOneResponse = (data?: CreateOneMutation) =>
    data?.ExpenditureTypeCreateOne as ExpenditureType;

const parseByIdResponse = (data?: ByIdQuery) =>
    data?.ExpenditureTypeById as ExpenditureType;

const redirectToAllItemsPath = () =>
    routeConfig.ExpenditureTypeMany.path;

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
            ExpenditureType,
            FormData,
            ByIdQuery,
            ExpenditureTypeByIdQueryVariables,
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
