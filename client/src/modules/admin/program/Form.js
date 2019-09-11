import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';
import { renderTextInput } from '../../common/helpers/semanticUiFields';

class DataEntryForm extends React.Component {
    render() {
        const { valid, handleSubmit, onSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit((formValues) => onSubmit(formValues))}>
                <Form.Group widths="equal">
                    <Field name="title" component={renderTextInput} label="Title" />
                </Form.Group>
                <Form.Group inline>
                    <Form.Button disabled={!valid} primary>Submit</Form.Button>
                </Form.Group>
            </Form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    return errors;
};

export default reduxForm({
    form: 'programForm',
    validate
})(DataEntryForm);