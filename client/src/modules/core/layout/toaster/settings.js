import React from 'react';
import { DefaultToastContainer } from 'react-toast-notifications'

const defaultToastSettings = {
    autoDismiss: true,
    autoDismissTimeout: 3500
}

const toastSettings = {
    success: { ...defaultToastSettings, appearance: 'success' },
    error: { ...defaultToastSettings, appearance: 'error' },
    components: {
        ToastContainer: ({ children, ...props }) => (
            <DefaultToastContainer {...props} style={{ zIndex: 200 }}>
                {children}
            </DefaultToastContainer>
        )
    }
}

export {
    toastSettings
}