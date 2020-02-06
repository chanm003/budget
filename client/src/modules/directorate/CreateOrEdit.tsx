import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useParams, useHistory } from 'react-router-dom';

import { Panel } from '../common/components/Panel/Panel';
import { toastSettings } from '../core/layout/toaster/settings';
import Form, { FormData } from './Form';

import { routes } from '../../routes';
import {
    useDirectorateByIdLazyQuery as useByIdLazyQuery,
    useDirectorateCreateOneMutation as useCreateOneMutation,
    useDirectorateUpdateByIdMutation as useUpdateByIdMutation,
    DirectorateManyDocument as ManyDocument,
    DirectorateByIdQuery as ByIdQuery,
    DirectorateCreateOneMutation as CreateOneMutation,
} from '../../generated/graphql';

const parseCreateOneResponse = (data?: CreateOneMutation) =>
    data?.DirectorateCreateOne;

const parseByIdResponse = (data?: ByIdQuery) => data?.DirectorateById;

const redirectToAllItemsPath = () => routes.DirectorateMany.path;

const identifyEditableFields = (
    itemToEdit: Partial<FormData>,
): Partial<FormData> => {
    const { title } = itemToEdit;

    return {
        title,
    };
};

const CreateOrEdit: React.FC = () => {
    const { id } = useParams();
    const history = useHistory();
    const { addToast } = useToasts();
    const [createOne] = useCreateOneMutation();
    const [updateItem] = useUpdateByIdMutation();
    const [getById, { data }] = useByIdLazyQuery({
        variables: { id },
    });

    useEffect(() => {
        if (id) {
            getById();
        }
    }, [id, getById]);

    const onSubmit = async (formData: FormData) => {
        if (!id) {
            const response = await createOne({
                variables: { ...formData },
                refetchQueries: [{ query: ManyDocument }],
            });
            const createdItem = parseCreateOneResponse(response.data);
            if (createdItem) {
                addToast(
                    `'${createdItem.title}' has been created.`,
                    toastSettings.success,
                );
            }
        } else {
            await updateItem({ variables: { id, ...formData } });
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
                    initialValues={identifyEditableFields(
                        itemToEdit as FormData,
                    )}
                />
            </Panel>
        );
    } else {
        return null;
    }
};

export default CreateOrEdit;
