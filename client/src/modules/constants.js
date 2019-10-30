const defaultToastSettings = {
    autoDismiss: true,
    autoDismissTimeout: 3500
}

const toastSettings = {
    success: { ...defaultToastSettings, appearance: 'success' },
    error: { ...defaultToastSettings, appearance: 'error' }
}

export {
    toastSettings
}