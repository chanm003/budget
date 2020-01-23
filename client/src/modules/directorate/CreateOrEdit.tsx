import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Header } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';

import { toastSettings } from '../core/layout/toaster/settings';
import Form, { FormData } from './Form';
import {
    useDirectorateByIdLazyQuery,
    useDirectorateCreateOneMutation,
    useDirectorateUpdateByIdMutation,
    DirectorateManyDocument,
} from '../../generated/graphql';

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
    const [createOne] = useDirectorateCreateOneMutation();
    const [updateItem] = useDirectorateUpdateByIdMutation();
    const [getById, { data }] = useDirectorateByIdLazyQuery({
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
                refetchQueries: [{ query: DirectorateManyDocument }],
            });
            const createdItem =
                response.data?.DirectorateCreateOne?.record;
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
        history.push('/admin/directorates');
    };

    if (!id) {
        return (
            <div>
                <Header as="h2">New Form</Header>
                <Form onSubmit={onSubmit} initialValues={{}} />
            </div>
        );
    } else if (id && data && data.DirectorateById) {
        return (
            <div>
                <Header as="h2">Edit Form</Header>
                <Form
                    onSubmit={onSubmit}
                    initialValues={identifyEditableFields(
                        data.DirectorateById as FormData,
                    )}
                />
            </div>
        );
    } else {
        return null;
    }
};

export default CreateOrEdit;
