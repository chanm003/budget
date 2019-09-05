import { createActions } from 'redux-actions';
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
