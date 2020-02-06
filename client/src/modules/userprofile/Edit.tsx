import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { toastSettings } from '../core/layout/toaster/settings';
import { useAuth } from '../core/authentication/authContext';
import Form from './Form';
import {
    useUserByIdQuery,
    useUserUpdateMyProfileMutation,
} from '../../generated/graphql';
import { AuthenticationPayload } from '../../interfaces';
import { FormData } from './Form';
import { Panel } from '../common/components/Panel/Panel';

const identifyEditableFields = (
    itemToEdit: Partial<FormData>,
): Partial<FormData> => {
    const { firstName, lastName, email } = itemToEdit;

    return {
        firstName,
        lastName,
        email,
    };
};

const Edit: React.FC = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { _id: id } = user;
    const { addToast } = useToasts();
    const [updateItem] = useUserUpdateMyProfileMutation();
    const { updateProfile } = useAuth();

    const onSubmit = async (formData: FormData) => {
        const response = await updateItem({
            variables: { ...formData },
        });
        const payload = response.data?.UserUpdateMyProfile;
        updateProfile(payload as AuthenticationPayload);
        addToast(
            `Your user profile has been updated.`,
            toastSettings.success,
        );
        history.goBack();
    };

    const { loading, data } = useUserByIdQuery({
        variables: { id },
    });

    if (loading || !data) {
        return null;
    }

    return (
        <Panel header="Edit User Profile">
            <Form
                onSubmit={onSubmit}
                initialValues={identifyEditableFields(
                    data.UserById as FormData,
                )}
            />
        </Panel>
    );
};

export default Edit;
