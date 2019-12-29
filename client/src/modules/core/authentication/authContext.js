import React, { useContext, useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';
import { roleNames } from 'shared';

function reducer(state, action) {
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

const hasValidToken = () => {
    return !!parseToken()
}

const getInitialState = () => {
    const initialState = {
        user: {
            ...{ role: roleNames.VISITOR },
            ...parseToken()
        }
    };

    return initialState;
};

const createActions = (dispatch) => {
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
    const [state, dispatch] = useReducer(reducer, getInitialState())

    const api = {
        ...state,
        ...createActions(dispatch)
    }

    return (
        <AuthContext.Provider value={api}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { useAuth, AuthProvider, hasValidToken }