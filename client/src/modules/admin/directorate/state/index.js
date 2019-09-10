import { createSelector } from 'reselect';
import { createActions, handleActions } from 'redux-actions';
import { history } from '../../../../index';

import { addItemsToMap, fromMapToArray, removeItemFromMap } from '../../../../store';
import budgetApi from '../../../../api';
import { actions as common } from '../../../../modules/common/state';

export const LOAD_DIRECTORATE_REQUEST = 'LOAD_DIRECTORATE_REQUEST';
export const LOAD_DIRECTORATE_SUCCESS = 'LOAD_DIRECTORATE_SUCCESS';
export const LOAD_DIRECTORATE_FAILURE = 'LOAD_DIRECTORATE_FAILURE';

export const LOAD_DIRECTORATES_REQUEST = 'LOAD_DIRECTORATES_REQUEST';
export const LOAD_DIRECTORATES_SUCCESS = 'LOAD_DIRECTORATES_SUCCESS';
export const LOAD_DIRECTORATES_FAILURE = 'LOAD_DIRECTORATES_FAILURE';

export const DELETE_DIRECTORATE_SUCCESS = 'DELETE_DIRECTORATE_SUCCESS';
export const CREATE_DIRECTORATE_SUCCESS = 'CREATE_DIRECTORATE_SUCCESS';

const {
    createDirectorateSuccess,
    deleteDirectorateSuccess,
    loadDirectorateRequest,
    loadDirectorateSuccess,
    loadDirectorateFailure,
    loadDirectoratesRequest,
    loadDirectoratesSuccess,
    loadDirectoratesFailure
} = createActions(
    CREATE_DIRECTORATE_SUCCESS,
    DELETE_DIRECTORATE_SUCCESS,
    LOAD_DIRECTORATE_REQUEST,
    LOAD_DIRECTORATE_SUCCESS,
    LOAD_DIRECTORATE_FAILURE,
    LOAD_DIRECTORATES_REQUEST,
    LOAD_DIRECTORATES_SUCCESS,
    LOAD_DIRECTORATES_FAILURE);

export const createDirectorate = formValues => async (dispatch, getState) => {
    try {
        const item = await budgetApi.createDirectorate(formValues);
        dispatch(createDirectorateSuccess(item));
        history.push('/admin/directorates');
        dispatch(common.showSuccessMessage({ title: 'Directorate created', description: `'${item.title}' has been created.` }));
    } catch (err) {
        dispatch(common.showErrorMessage({ title: 'Error', description: `Error occured while trying to create this directorate. Please try again at a later time.` }));
    }
};

export const fetchDirectorate = id => async (dispatch, getState) => {
    try {
        const item = await budgetApi.getDirectorate(id);
        dispatch(loadDirectorateSuccess(item));
    } catch (err) {
    }
};

export const deleteDirectorate = (id) => async (dispatch, getState) => {
    try {
        const deleted = await budgetApi.deleteDirectorate(id);
        dispatch(deleteDirectorateSuccess(deleted));
        dispatch(common.showSuccessMessage({ title: 'Directorate deleted', description: `'${deleted.title}' has been deleted.` }));
    } catch (err) {
        dispatch(common.showErrorMessage({ title: 'Error', description: `Error occured while trying to delete this directorate. Please try again at a later time.` }));
    }
};

export const fetchDirectorates = () => async (dispatch, getState) => {
    try {
        dispatch(loadDirectoratesRequest());
        const response = await budgetApi.getDirectorates();
        dispatch(loadDirectoratesSuccess(response));
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
        CREATE_DIRECTORATE_SUCCESS: (prevState, action) => {
            return {
                ...prevState,
                byId: addItemsToMap(prevState.byId, [action.payload])
            };
        },
        DELETE_DIRECTORATE_SUCCESS: (prevState, action) => {
            return {
                ...prevState,
                byId: removeItemFromMap(prevState.byId, action.payload._id)
            };
        },
        LOAD_DIRECTORATES_REQUEST: (prevState, action) => {
            return {
                ...prevState,
                isLoading: true,
                error: null
            };
        },
        LOAD_DIRECTORATE_SUCCESS: (prevState, action) => {
            return {
                ...prevState,
                error: null,
                isLoading: false,
                byId: addItemsToMap(prevState.byId, [action.payload])
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