import React, { useEffect, ReactNode } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useParams, useHistory } from 'react-router-dom';

import { Panel } from '../Panel/Panel';
import { toastSettings } from '../../../core/layout/toaster/settings';

import {
    MutationTuple,
    MutationHookOptions,
    LazyQueryHookOptions,
    QueryLazyOptions,
} from '@apollo/react-hooks/lib/types';

import { QueryResult } from '@apollo/react-common/lib/types/types';

interface Props<
    T,
    FormData,
    ByIdQuery,
    ByIdQueryVariables,
    CreateOneMutation,
    CreateOneMutationVariables,
    UpdateByIdMutation,
    UpdateByIdMutationVariables
> {
    Form: any;
    identifyEditableFields: (
        item: Partial<FormData>,
    ) => Partial<FormData>;
    manyDocument: any;
    onItemCreatedMessage: (item: T) => string;
    parseByIdResponse: (data?: ByIdQuery) => T;
    parseCreateOneResponse: (data?: CreateOneMutation) => T;
    redirectToAllItemsPath: () => string;
    useCreateOneMutation: (
        baseOptions?: MutationHookOptions<
            CreateOneMutation,
            CreateOneMutationVariables
        >,
    ) => MutationTuple<CreateOneMutation, CreateOneMutationVariables>;
    useUpdateByIdMutation: (
        baseOptions?: MutationHookOptions<
            UpdateByIdMutation,
            UpdateByIdMutationVariables
        >,
    ) => MutationTuple<
        UpdateByIdMutation,
        UpdateByIdMutationVariables
    >;
    useByIdLazyQuery: (
        baseOptions?: LazyQueryHookOptions<
            ByIdQuery,
            ByIdQueryVariables
        >,
    ) => [
        (
            options?:
                | QueryLazyOptions<ByIdQueryVariables>
                | undefined,
        ) => void,
        QueryResult<ByIdQuery, ByIdQueryVariables>,
    ];
}

const CreateOrEdit = <
    T,
    FormData,
    ByIdQuery,
    ByIdQueryVariables,
    CreateOneMutation,
    CreateOneMutationVariables,
    UpdateByIdMutation,
    UpdateByIdMutationVariables
>(
    props: Props<
        T,
        FormData,
        ByIdQuery,
        ByIdQueryVariables,
        CreateOneMutation,
        CreateOneMutationVariables,
        UpdateByIdMutation,
        UpdateByIdMutationVariables
    > & {
        children?: ReactNode;
    },
) => {
    const {
        Form,
        identifyEditableFields,
        manyDocument,
        onItemCreatedMessage,
        parseByIdResponse,
        parseCreateOneResponse,
        redirectToAllItemsPath,
        useByIdLazyQuery,
        useCreateOneMutation,
        useUpdateByIdMutation,
    } = props;

    const { id } = useParams();
    const history = useHistory();
    const { addToast } = useToasts();
    const [createOne] = useCreateOneMutation();
    const [updateItem] = useUpdateByIdMutation();
    const [getById, { data }] = useByIdLazyQuery({
        variables: { id } as any,
    });

    useEffect(() => {
        if (id) {
            getById();
        }
    }, [id, getById]);

    const onSubmit = async (formData: FormData) => {
        if (!id) {
            const response = await createOne({
                variables: { ...formData } as any,
                refetchQueries: [{ query: manyDocument }],
            });
            const createdItem = parseCreateOneResponse(response.data);
            if (createdItem) {
                addToast(
                    onItemCreatedMessage(createdItem),
                    toastSettings.success,
                );
            }
        } else {
            await updateItem({
                variables: { id, ...formData } as any,
            });
            addToast(
                `Your changes have been saved.`,
                toastSettings.success,
            );
        }
        history.push(redirectToAllItemsPath());
    };

    const itemToEdit = parseByIdResponse(data);

    if (!id) {
        return (
            <Panel header="New Form">
                <Form onSubmit={onSubmit} initialValues={{}} />
            </Panel>
        );
    } else if (id && itemToEdit) {
        return (
            <Panel header="Edit Form">
                <Form
                    onSubmit={onSubmit}
                    initialValues={identifyEditableFields(itemToEdit)}
                />
            </Panel>
        );
    } else {
        return null;
    }
};

export default CreateOrEdit;
