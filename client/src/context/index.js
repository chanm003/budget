import React, { useReducer, createContext, useContext } from 'react';

import { createActions as createActionsAuth, reducer as authReducer, getInitialState as getInitialStateAuth } from './auth';
import { createActions as createActionsCommon, reducer as commonReducer, getInitialState as getInitialStateCommon } from './common';

const GlobalContext = createContext();

function Store(props) {
    const [auth, dispatchAuth] = useReducer(authReducer, getInitialStateAuth());
    const [common, dispatchCommon] = useReducer(commonReducer, getInitialStateCommon());

    const storeApi = {
        ...auth,
        ...common,
        ...createActionsAuth(dispatchAuth),
        ...createActionsCommon(dispatchCommon)
    }

    return (
        <GlobalContext.Provider value={storeApi}>
            {props.children}
        </GlobalContext.Provider>
    );
}

const useStore = () => {
    return useContext(GlobalContext)
}

export { useStore, Store };