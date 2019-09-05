import { createSelector} from 'reselect';
import { createActions, handleActions } from 'redux-actions';

import { addItemsToMap, fromMapToArray } from '../../../../store';
import budgetApi from '../../../../api/budget';

export const LOAD_DIRECTORATES_REQUEST = 'LOAD_DIRECTORATES_REQUEST';
export const LOAD_DIRECTORATES_SUCCESS = 'LOAD_DIRECTORATES_SUCCESS';
export const LOAD_DIRECTORATES_FAILURE = 'LOAD_DIRECTORATES_FAILURE';

const {
    loadDirectoratesRequest,
    loadDirectoratesSuccess,
    loadDirectoratesFailure
} = createActions(
    LOAD_DIRECTORATES_REQUEST,
    LOAD_DIRECTORATES_SUCCESS,
    LOAD_DIRECTORATES_FAILURE);

export const fetchDirectorates = () => async (dispatch, getState) => {
    try {
        dispatch(loadDirectoratesRequest());
        const response = await budgetApi.getDirectorates();
        dispatch(loadDirectoratesSuccess(response.directorates));
    } catch (err) {
        dispatch(loadDirectoratesFailure(err));
    }
};

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    byId: {}
};

const directorates = handleActions(
    {
        LOAD_DIRECTORATES_REQUEST: (prevState, action) => {
            return {
                ...prevState,
                isLoading: true,
                error: null
            };
        },
        LOAD_DIRECTORATES_SUCCESS: (prevState, action) => {
            return {
                ...prevState,
                error: null,
                isLoading: false,
                byId: addItemsToMap(prevState.byId, action.payload)
            };
        },
        LOAD_DIRECTORATES_FAILURE: (prevState, action) => {
            return {
                ...prevState,
                error: 'Some error occured. Please try agiain.',
                isLoading: false
            };
        }
    },
    INITIAL_STATE
);

export default { directorates };

/*
*   Selectors
* */

export const getDirectorates = createSelector(
    state => state.directorates,
    ({ byId, isLoading, error }) => ({ items: fromMapToArray(byId), isLoading, error })
  );