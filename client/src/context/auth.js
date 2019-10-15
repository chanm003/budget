import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

function authReducer(state, action) {
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

const getInitialState = () => {
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

const getActions = (dispatch) => {
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

const AuthContext = createContext();

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, getInitialState());
    const actions = getActions(dispatch);

    return (
        <AuthContext.Provider value={{ user: state.user, ...actions }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };