import React from 'react';
import Form, { FormData } from './Form';
import BaseCreateOrEdit from '../common/components/BaseCreateOrEdit/BaseCreateOrEdit';

import { routeConfig } from '../../combineRoutes';
import {
    useProgramByIdLazyQuery as useByIdLazyQuery,
    useProgramCreateOneMutation as useCreateOneMutation,
    useProgramUpdateByIdMutation as useUpdateByIdMutation,
    ProgramByIdQueryVariables,
    ProgramManyDocument as ManyDocument,
    ProgramByIdQuery as ByIdQuery,
    ProgramCreateOneMutation as CreateOneMutation,
    ProgramCreateOneMutationVariables as CreateOneMutationVariables,
    ProgramUpdateByIdMutation as UpdateByIdMutation,
    ProgramUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    Program,
} from '../../generated/graphql';

const onItemCreatedMessage = (createdItem: Program) =>
    `'${createdItem.title}' has been created.`;

const parseCreateOneResponse = (data?: CreateOneMutation) =>
    data?.ProgramCreateOne as Program;

const parseByIdResponse = (data?: ByIdQuery) =>
    data?.ProgramById as Program;

const redirectToAllItemsPath = () => routeConfig.ProgramMany.path;

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
            Program,
            FormData,
            ByIdQuery,
            ProgramByIdQueryVariables,
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
