import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Label, Input } from 'semantic-ui-react';

class DataEntryForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <Label basic color='red' pointing>
                    {error}
                </Label>
            );
        }
    }

    renderInput = ({ input, meta, label }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <Form.Field className={className}>
                <label>{label}</label>
                <Input {...input} autoComplete="off" placeholder={label}/>
                {this.renderError(meta)}
            </Form.Field>
        );
    }

    render() {
        const disabled = !this.props.valid;
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Form.Group widths="equal">
                    <Field name="title" component={this.renderInput} label="Title" />
                </Form.Group>
                <Form.Group inline>
                    <Form.Button disabled={disabled} primary>Submit</Form.Button>
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
    form: 'directorateForm',
    validate
})(DataEntryForm);