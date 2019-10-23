import React, { useReducer, createContext, useContext } from 'react';

import { createActions as createActionsAuth, reducer as authReducer, getInitialState as getInitialStateAuth } from './auth';
import { createActions as createActionsCommon, reducer as commonReducer, getInitialState as getInitialStateCommon } from './common';

const GlobalContext = createContext();

function Store(props) {
    const [state, dispatch] = useCombinedReducer({
        auth: useReducer(authReducer, getInitialStateAuth()),
        common: useReducer(commonReducer, getInitialStateCommon())
    });

    const storeApi = {
        auth: { ...state.auth, ...createActionsAuth(dispatch) },
        common: { ...state.common, ...createActionsCommon(dispatch) }
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

const useCombinedReducer = useReducers => {
    // Global State
    const state = Object.keys(useReducers).reduce(
        (acc, key) => ({ ...acc, [key]: useReducers[key][0] }),
        {}
    );

    // Global Dispatch Function
    const dispatch = action =>
        Object.keys(useReducers)
            .map(key => useReducers[key][1])
            .forEach(fn => fn(action));

    return [state, dispatch];
};

export { useStore, Store };