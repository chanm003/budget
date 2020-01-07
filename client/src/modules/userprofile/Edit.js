import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { api, responseParsers } from './api';
import _ from 'lodash';
import { useToasts } from 'react-toast-notifications';
import { toastSettings } from '../core/layout/toaster/settings';
import { Header } from 'semantic-ui-react';
import { useAuth } from '../core/authentication/authContext';
import Form from './Form';

const identifyEditableFields = itemToEdit => {
    return _.pick(itemToEdit, 'firstName', 'lastName', 'email');
}

export default props => {
    const { user } = useAuth();
    const { _id: id } = user;
    const { addToast } = useToasts();
    const [updateItem] = useMutation(api.Mutation.UpdateProfile);
    const { updateProfile } = useAuth();

    const onSubmit = async formData => {
        const response = responseParsers.UpdateProfile(await updateItem({ variables: { ...formData } }));
        updateProfile(response)
        addToast(`Your user profile has been updated.`, toastSettings.success);
        props.history.goBack();
    }

    let initialValues = {};
    let header = 'Edit User Profile';

    const { loading, data } = useQuery(api.Query.ById, { variables: { id } });
    if (loading) { return null; }
    initialValues = identifyEditableFields(responseParsers.ById(data))

    return (
        <div>
            <Header as='h2'>{header}</Header>
            <Form onSubmit={onSubmit} initialValues={initialValues} />
        </div>
    );
}