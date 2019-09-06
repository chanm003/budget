import { createSelector } from 'reselect';
import { createActions, handleActions } from 'redux-actions';

export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const actions = createActions(SHOW_SUCCESS_MESSAGE, SHOW_ERROR_MESSAGE, CLEAR_MESSAGE);

const INITIAL_STATE = {
    message: null
};

const common = handleActions(
    {
        CLEAR_MESSAGE: (state, action) => {
            return {
                ...state,
                message: null
            }
        },
        SHOW_ERROR_MESSAGE: (state, action) => {
            return {
                ...state,
                message: {...action.payload, icon: 'exclamation triangle', type: 'error'}
            }
        },
        SHOW_SUCCESS_MESSAGE: (state, action) => {
            return {
                ...state,
                message: {...action.payload, icon: 'check', type: 'success'}
            }
        }
    },
    INITIAL_STATE
);

export default { common };

/*
*   Selectors
* */
