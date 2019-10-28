import jwtDecode from 'jwt-decode';

export function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
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

const parseToken = () => {
    let user = null;
    if (localStorage.getItem('jwtToken')) {
        const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('jwtToken');
        } else {
            user = decodedToken.user;
        }
    }
    return user;
}

export const hasValidToken = () => {
    return !!parseToken()
}

export const getInitialState = () => {
    const initialState = {
        user: {
            ...{ role: 'visitor' },
            ...parseToken()
        }
    };

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
