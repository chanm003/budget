import React, { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Header } from 'semantic-ui-react';

import { toastSettings } from '../core/layout/toaster/settings';
import Form from './Form';
import { useDirectorateByIdLazyQuery, useDirectorateCreateOneMutation, useDirectorateUpdateByIdMutation } from '../../generated/graphql';

const identifyEditableFields = itemToEdit => {
    const {
        title
    } = itemToEdit;

    return {
        title
    }
}

export default props => {
    const { id } = props.match.params;
    const { addToast } = useToasts();
    const [createOne] = useDirectorateCreateOneMutation();
    const [updateItem] = useDirectorateUpdateByIdMutation();
    const [getById, { loading, data }] = useDirectorateByIdLazyQuery({
        variables: { id }
    });

    useEffect(() => {
        if (id) {
            getById();
        }
    }, [id, getById]);

    const onSubmit = async formData => {
        if (!id) {
            const { data: { DirectorateCreateOne: { record: createdItem } } } = await createOne({ variables: { ...formData } });
            addToast(`'${createdItem.title}' has been created.`, toastSettings.success);
        } else {
            await updateItem({ variables: { id, ...formData } });
            addToast(`Your changes have been saved.`, toastSettings.success);
        }
        props.history.push('/admin/directorates');
    }

    if (loading) { return null; }

    if (data) {
        const { DirectorateById: itemToEdit } = data;
        return (
            <div>
                <Header as='h2'>Edit Form</Header>
                <Form onSubmit={onSubmit} initialValues={identifyEditableFields(itemToEdit)} />
            </div>
        );
    } else {
        return (
            <div>
                <Header as='h2'>New Form</Header>
                <Form onSubmit={onSubmit} initialValues={{}} />
            </div>
        );
    }
}