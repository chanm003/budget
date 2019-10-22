import React, { useReducer, createContext } from 'react';

import { getActions as getAuthActions, reducer as authReducer, getInitialState as getInitialAuthState } from './auth';
import { getActions as getCommonActions, reducer as commonReducer, getInitialState as getInitialCommonState } from './common';

const GlobalContext = createContext();

function Store(props) {
    const [authState, authDispatch] = useReducer(authReducer, getInitialAuthState());
    const [commonState, commonDispatch] = useReducer(commonReducer, getInitialCommonState());

    const storeApi = {
        ...authState,
        ...commonState,
        ...getAuthActions(authDispatch),
        ...getCommonActions(commonDispatch)
    }

    return (
        <GlobalContext.Provider value={storeApi}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, Store };