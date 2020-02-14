import React, { useEffect, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from 'office-ui-fabric-react';

import { FormContextValues } from 'react-hook-form/dist/contextTypes';

import { FormErrors } from '../../formHelpers';

export type RenderFieldsFunc = (
    formHelpers: FormContextValues,
    formErrors: FormErrors,
) => JSX.Element;

export type RegisterFieldsFunc = (
    formHelpers: FormContextValues,
) => void;

interface Props<FormData extends object> {
    validationSchema: any;
    initialValues: Partial<FormData>;
    onSubmit: (formData: FormData) => void;
    registerFields: RegisterFieldsFunc;
    renderFields: RenderFieldsFunc;
}

const CustomForm = <FormData extends object>({
    initialValues,
    onSubmit,
    registerFields,
    renderFields,
    validationSchema,
}: Props<FormData> & { children?: ReactNode }) => {
    const formContextValues: FormContextValues = useForm({
        validationSchema,
        defaultValues: initialValues as FormData,
    });

    useEffect(() => {
        registerFields(formContextValues);
    }, [formContextValues]);

    return (
        <React.Fragment>
            <form
                onSubmit={formContextValues.handleSubmit(data =>
                    onSubmit(data as FormData),
                )}
            >
                {renderFields(
                    formContextValues,
                    formContextValues.errors as FormErrors,
                )}
                <br />
                <PrimaryButton type="submit" text="Save" />
            </form>
        </React.Fragment>
    );
};

export default CustomForm;
