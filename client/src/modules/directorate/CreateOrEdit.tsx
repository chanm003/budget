import React from 'react';
import Form, { FormData } from './Form';
import BaseCreateOrEdit from '../common/components/BaseCreateOrEdit/BaseCreateOrEdit';

import { routeConfig } from '../../combineRoutes';
import {
    useDirectorateByIdLazyQuery as useByIdLazyQuery,
    useDirectorateCreateOneMutation as useCreateOneMutation,
    useDirectorateUpdateByIdMutation as useUpdateByIdMutation,
    DirectorateByIdQueryVariables,
    DirectorateManyDocument as ManyDocument,
    DirectorateByIdQuery as ByIdQuery,
    DirectorateCreateOneMutation as CreateOneMutation,
    DirectorateCreateOneMutationVariables as CreateOneMutationVariables,
    DirectorateUpdateByIdMutation as UpdateByIdMutation,
    DirectorateUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    Directorate,
} from '../../generated/graphql';

const onItemCreatedMessage = (createdItem: Directorate) =>
    `'${createdItem.title}' has been created.`;

const parseCreateOneResponse = (data?: CreateOneMutation) =>
    data?.DirectorateCreateOne as Directorate;

const parseByIdResponse = (data?: ByIdQuery) =>
    data?.DirectorateById as Directorate;

const redirectToAllItemsPath = () => routeConfig.DirectorateMany.path;

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
            Directorate,
            FormData,
            ByIdQuery,
            DirectorateByIdQueryVariables,
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
