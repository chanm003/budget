import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ITEM, CREATE_ITEM, UPDATE_ITEM, createMutationOptions } from './api';
import _ from 'lodash';
import { useToasts } from 'react-toast-notifications';
import { toastSettings } from '../../constants';
import Form from './Form';
import { Header } from 'semantic-ui-react';

const identifyEditableFields = itemToEdit => {
    return _.pick(itemToEdit, 'title');
}

export default props => {
    const { id } = props.match.params;
    const { addToast } = useToasts();
    const [createItem] = useMutation(CREATE_ITEM, createMutationOptions);
    const [updateItem] = useMutation(UPDATE_ITEM);

    const onSubmit = async formData => {
        if (!id) {
            const { data: { createDirectorate: item } } = await createItem({ variables: { ...formData } });
            addToast(`'${item.title}' has been created.`, toastSettings.success);
        } else {
            await updateItem({ variables: { id, ...formData } });
            addToast(`Your changes have been saved.`, toastSettings.success);
        }
        props.history.push('/admin/directorates');
    }

    let initialValues = {};
    let header = 'New Form';

    if (id) {
        const { loading, data } = useQuery(GET_ITEM, { variables: { id } });
        if (loading) { return null; }
        initialValues = identifyEditableFields(data.directorate)
        header = 'Edit Form';
    }

    return (
        <div>
            <Header as='h2'>{header}</Header>
            <Form onSubmit={onSubmit} initialValues={initialValues} />
        </div>
    );
}