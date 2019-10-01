import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Button, Label, Segment, Message, Icon } from 'semantic-ui-react';
import useForm from "react-hook-form";

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    genderSelect: Yup.string()
        .required('Gender is required'),
    checkBox: Yup.bool()
        .required('You must accept the Terms and Conditions')
        .oneOf([true], 'You must accept the Terms and Conditions')
})

const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" }
];

export default () => {
    useEffect(() => {
        register({ name: "firstName" });
        register({ name: "lastName" });
        register({ name: "genderSelect" });
        register({ name: "checkBox" });
    }, []);

    const {
        getValues,
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation
    } = useForm({ validationSchema });
    const onSubmit = (data, e) => {
        console.log("Submit event", e);
        alert(JSON.stringify(data));
    };

    return (
        <React.Fragment>
            <Form className="attached fluid segment" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group widths="equal">
                    <Form.Input
                        name="firstName"
                        fluid
                        label="First name"
                        placeholder="First name"
                        autoComplete="off"
                        onChange={async (e, { name, value }) => {
                            setValue(name, value);
                            await triggerValidation({ name });
                        }}
                        error={errors.firstName ? true : false}
                    />
                    <Form.Input
                        name="lastName"
                        fluid
                        label="Last name"
                        placeholder="Last name"
                        autoComplete="off"
                        onChange={async (e, { name, value }) => {
                            setValue(name, value);
                            await triggerValidation({ name });
                        }}
                        error={errors.lastName ? true : false}
                    />
                </Form.Group>
                <Form.Select
                    name="genderSelect"
                    options={options}
                    placeholder="Gender"
                    onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await triggerValidation({ name });
                    }}
                    error={errors.genderSelect ? true : false}
                />
                <Form.Checkbox
                    name="checkBox"
                    label="I agree to the Terms and Conditions"
                    onChange={async (e, { name, checked }) => {
                        setValue(name, checked);
                        await triggerValidation({ name });
                    }}
                    error={errors.checkBox ? true : false}
                />
                <Button type="submit">Submit</Button>
            </Form>
            <Message attached='bottom' info>
                <Icon name='info' />
                {JSON.stringify(getValues(), null, 2)}
            </Message>
            <Message attached='bottom' error>
                <Icon name='info' />
                {JSON.stringify(errors, null, 2)}
            </Message>
        </React.Fragment>
    );
};
