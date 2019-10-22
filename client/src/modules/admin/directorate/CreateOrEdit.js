import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ITEM, CREATE_ITEM, createMutationOptions } from './api';
import _ from 'lodash';
import Form from './Form';
import { Header } from 'semantic-ui-react';

const identifyEditableFields = itemToEdit => {
    return _.pick(itemToEdit, 'title');
}

export default props => {
    const { id } = props.match.params;

    const [createItem] = useMutation(CREATE_ITEM, createMutationOptions);

    const onSubmit = async formData => {
        await createItem({ variables: { title: formData.firstName } });
        props.history.push('/admin/directorates');
    }

    let formToRender = null;

    if (id) {
        const { loading, error, data } = useQuery(GET_ITEM, { variables: { id } });
        if (loading) { return null; }
        const initialValues = identifyEditableFields(data.directorate)
        formToRender = <Header as='h2'>Edit Form</Header>;
    } else {
        formToRender = <Header as='h2'>New Form</Header>;
    }

    return (
        <div>{formToRender}<Form onSubmit={onSubmit} /></div>
    );
}