export function reducer(state, action) {
    switch (action.type) {
        case 'SHOW_SUCCESS_MESSAGE':
            return {
                ...state,
                message: { ...action.payload, icon: 'check', type: 'success' }
            };
        case 'SHOW_ERROR_MESSAGE':
            return {
                ...state,
                message: { ...action.payload, icon: 'exclamation triangle', type: 'error' }
            };
        case 'CLEAR_MESSAGE':
            return {
                ...state,
                ...getInitialState()
            };
        default:
            return state;
    }
}

export const getInitialState = () => {
    const initialState = {
        message: null
    };

    return initialState;
};

export const createActions = (dispatch) => {
    return {
        showSuccessToast: (props) => {
            dispatch({
                type: 'SHOW_SUCCESS_MESSAGE',
                payload: props
            });
        },

        showErrorToast: (props) => {
            dispatch({
                type: 'SHOW_ERROR_MESSAGE',
                payload: props
            });
        },

        clearToast: () => {
            dispatch({
                type: 'CLEAR_MESSAGE'
            });
        }
    }
}