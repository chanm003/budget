import React, { useReducer, createContext } from 'react';

import { getActions as getAuthActions, reducer as authReducer, getInitialState as getInitialAuthState } from './auth';

const GlobalContext = createContext();

function Store(props) {
    const [authState, authDispatch] = useReducer(authReducer, getInitialAuthState());
    const authActions = getAuthActions(authDispatch);

    return (
        <GlobalContext.Provider value={{ ...authState, ...authActions }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, Store };