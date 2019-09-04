import { createActions, handleActions } from 'redux-actions';
import budgetApi from '../api/budget';

const INITIAL_STATE = {
    items: []
};

const LOAD_DIRECTORATES = 'LOAD_DIRECTORATES';

export const {
    loadDirectorates
} = createActions(
    LOAD_DIRECTORATES);

export const fetchDirectorates = () => async (dispatch, getState) => {
    //dispatch action to show loader
    const response = await budgetApi.getDirectorates();
    dispatch(loadDirectorates(response.directorates));
    //dispatch action to hide loader
};

export default handleActions(
    {
        LOAD_DIRECTORATES: (state, action) => {
            return {
                ...state,
                items: action.payload,
            };
        }
    },
    INITIAL_STATE
);