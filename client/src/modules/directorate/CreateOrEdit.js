import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { api, mutationOptions, responseParsers } from './api';
import _ from 'lodash';
import { useToasts } from 'react-toast-notifications';
import { toastSettings } from '../core/layout/toaster/settings';
import Form from './Form';
import { Header } from 'semantic-ui-react';

const identifyEditableFields = itemToEdit => {
    return _.pick(itemToEdit, 'title');
}

export default props => {
    const { id } = props.match.params;
    const { addToast } = useToasts();
    const [createItem] = useMutation(api.Mutation.CreateOne, mutationOptions.CreateOne);
    const [updateItem] = useMutation(api.Mutation.UpdateById);

    const onSubmit = async formData => {
        if (!id) {
            const createdItem = responseParsers.CreateOne(await createItem({ variables: { ...formData } }));
            addToast(`'${createdItem.title}' has been created.`, toastSettings.success);
        } else {
            await updateItem({ variables: { id, ...formData } });
            addToast(`Your changes have been saved.`, toastSettings.success);
        }
        props.history.push('/admin/directorates');
    }

    let initialValues = {};
    let header = 'New Form';

    if (id) {
        const { loading, data } = useQuery(api.Query.ById, { variables: { id } });
        if (loading) { return null; }
        initialValues = identifyEditableFields(responseParsers.ById(data))
        header = 'Edit Form';
    }

    return (
        <div>
            <Header as='h2'>{header}</Header>
            <Form onSubmit={onSubmit} initialValues={initialValues} />
        </div>
    );
}