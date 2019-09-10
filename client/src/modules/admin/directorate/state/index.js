import { createSelector } from 'reselect';
import { createActions, handleActions } from 'redux-actions';
import { browserHistory } from '../../../../index';
import admin from '../../../../routes/admin';

import { addItemsToMap, fromMapToArray, removeItemFromMap } from '../../../../store';
import budgetApi from '../../../../api';
import { actions as common } from '../../../../modules/common/state';

const LOAD_DIRECTORATE_SUCCESS = 'LOAD_DIRECTORATE_SUCCESS';

const LOAD_DIRECTORATES_REQUEST = 'LOAD_DIRECTORATES_REQUEST';
const LOAD_DIRECTORATES_SUCCESS = 'LOAD_DIRECTORATES_SUCCESS';
const LOAD_DIRECTORATES_FAILURE = 'LOAD_DIRECTORATES_FAILURE';

const DELETE_DIRECTORATE_SUCCESS = 'DELETE_DIRECTORATE_SUCCESS';
const CREATE_DIRECTORATE_SUCCESS = 'CREATE_DIRECTORATE_SUCCESS';
const UPDATE_DIRECTORATE_SUCCESS = 'UPDATE_DIRECTORATE_SUCCESS';

const {
    createDirectorateSuccess,
    updateDirectorateSuccess,
    deleteDirectorateSuccess,
    loadDirectorateSuccess,
    loadDirectoratesRequest,
    loadDirectoratesSuccess,
    loadDirectoratesFailure
} = createActions(
    CREATE_DIRECTORATE_SUCCESS,
    UPDATE_DIRECTORATE_SUCCESS,
    DELETE_DIRECTORATE_SUCCESS,
    LOAD_DIRECTORATE_SUCCESS,
    LOAD_DIRECTORATES_REQUEST,
    LOAD_DIRECTORATES_SUCCESS,
    LOAD_DIRECTORATES_FAILURE);

    
export const createDirectorate = formValues => async (dispatch, getState) => {
    try {
        const item = await budgetApi.createDirectorate(formValues);
        dispatch(createDirectorateSuccess(item));
        browserHistory.push(admin.directorateList.path);
        dispatch(common.showSuccessMessage({ title: 'Directorate created', description: `'${item.title}' has been created.` }));
    } catch (err) {
        dispatch(common.showErrorMessage({ title: 'Error', description: `Error occured while trying to create this directorate. Please try again at a later time.` }));
    }
};

export const updateDirectorate = (id, formValues) => async (dispatch, getState) => {
    try {
        const item = await budgetApi.updateDirectorate(id, formValues);
        dispatch(updateDirectorateSuccess(item));
        browserHistory.push(admin.directorateList.path);
        dispatch(common.showSuccessMessage({ title: 'Directorate updated', description: `Your changes have been saved.` }));
    } catch (err) {
        console.log(err)
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
        UPDATE_DIRECTORATE_SUCCESS: (prevState, action) => {
            console.log(action.payload)
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