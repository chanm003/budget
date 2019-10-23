import jwtDecode from 'jwt-decode';

export function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                authenticated: true
            };
        case 'LOGOUT':
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
        user: {
            role: 'visitor'
        },
        authenticated: false
    };
    if (localStorage.getItem('jwtToken')) {
        const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('jwtToken');
        } else {
            initialState.user = decodedToken.user;
        }
    }
    return initialState;
};

export const createActions = (dispatch) => {
    return {
        login: (userData) => {
            localStorage.setItem('jwtToken', userData.token);
            dispatch({
                type: 'LOGIN',
                payload: userData.user
            });
        },

        logout: () => {
            localStorage.removeItem('jwtToken');
            dispatch({ type: 'LOGOUT' });
        }
    }
}
