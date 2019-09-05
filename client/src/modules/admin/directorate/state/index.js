import { addItemsToMap, fromMapToArray } from '../../../../store';
import {createSelector} from 'reselect';
import { handleActions } from 'redux-actions';
import { LOAD_DIRECTORATES_SUCCESS } from './actions';

const INITIAL_STATE = {
    byId: {}
};

const directorates = handleActions(
    {
        LOAD_DIRECTORATES_SUCCESS: reduceDirectorates
    },
    INITIAL_STATE
);

function reduceDirectorates(prevState, action) {
    return {
        ...prevState,
        byId: addItemsToMap(prevState.byId, action.payload),
    };
}

export default { directorates };

/*
*   Selectors
* */

export const getDirectorates = createSelector(
    state => state.directorates.byId,
    mapping => fromMapToArray(mapping)
  );