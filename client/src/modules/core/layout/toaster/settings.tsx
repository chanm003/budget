import React from 'react';
import {
    DefaultToastContainer,
    ToastProviderProps,
    Options,
} from 'react-toast-notifications';

const defaultToastSettings: Partial<Options> = {
    autoDismiss: true,
};

const success: Options = {
    ...defaultToastSettings,
    appearance: 'success',
};

const error: Options = {
    ...defaultToastSettings,
    appearance: 'error',
};

export interface CustomerToastContainerProps {
    style: any;
}

const customRenderer: Partial<ToastProviderProps> = {
    components: {
        ToastContainer: ({ children, ...props }) => (
            <DefaultToastContainer {...props}>
                {children}
            </DefaultToastContainer>
        ),
    },
};

const toastSettings = {
    success,
    error,
    customRenderer,
};

export { toastSettings };
