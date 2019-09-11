import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';

const renderError = ({ error, touched }) => {
    if (touched && error) {
        return (
            <Label basic color='red' pointing>
                {error}
            </Label>
        );
    }
}

export const renderTextInput = ({ input, meta, label }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
        <Form.Field className={className}>
            <label>{label}</label>
            <Input {...input} autoComplete="off" placeholder={label}/>
            {renderError(meta)}
        </Form.Field>
    );
}