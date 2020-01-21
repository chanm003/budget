import React, { useContext, useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';
import { roleNames } from 'shared';
import { AuthenticationPayload } from '../../../interfaces';
import { User } from '../../../generated/graphql';

interface IAuth {
    user: User;
    login: (userData: AuthenticationPayload) => void;
    logout: () => void;
    updateProfile: (userData: AuthenticationPayload) => void;
}

enum ActionType {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    UPDATE_PROFILE = 'UPDATE_PROFILE',
}

interface IState {
    user: User;
}

interface IAction {
    type: ActionType;
    payload?: User;
}

const reducer: React.Reducer<IState, IAction> = (state, action) => {
    const user = action.payload || getInitialState().user;
    switch (action.type) {
        case ActionType.UPDATE_PROFILE:
            return {
                ...state,
                user: { ...state.user, ...user },
            };
        case ActionType.LOGIN:
            return {
                ...state,
                user: user,
            };
        case ActionType.LOGOUT:
            return {
                ...state,
                ...getInitialState(),
            };
        default:
            return state;
    }
};

const parseToken = () => {
    let user = null;
    if (localStorage.getItem('jwtToken')) {
        const decodedToken = jwtDecode(
            localStorage.getItem('jwtToken') as string,
        );

        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('jwtToken');
        } else {
            user = decodedToken.user;
        }
    }
    return user as User;
};

const hasValidToken = () => {
    return !!parseToken();
};

const getInitialState = (): IAuth => {
    const initialState = {
        user: {
            ...{ role: roleNames.VISITOR },
            ...parseToken(),
        },
        login: (userData: AuthenticationPayload) => {},
        logout: () => {},
        updateProfile: (userData: AuthenticationPayload) => {},
    };

    return initialState;
};

const createActions = (dispatch: React.Dispatch<IAction>) => {
    return {
        updateProfile: (userData: AuthenticationPayload) => {
            localStorage.setItem('jwtToken', userData.token);
            dispatch({
                type: ActionType.UPDATE_PROFILE,
                payload: userData.user,
            });
        },

        login: (userData: AuthenticationPayload) => {
            localStorage.setItem('jwtToken', userData.token);
            dispatch({
                type: ActionType.LOGIN,
                payload: userData.user,
            });
        },

        logout: () => {
            localStorage.removeItem('jwtToken');
            dispatch({ type: ActionType.LOGOUT });
        },
    };
};

const AuthContext = createContext<IAuth>(getInitialState());

const AuthProvider: React.FC = props => {
    const [state, dispatch] = useReducer(reducer, getInitialState());

    const api = {
        ...state,
        ...createActions(dispatch),
    };

    return (
        <AuthContext.Provider value={api}>
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext<IAuth>(AuthContext);
};

export { useAuth, AuthProvider, hasValidToken };
