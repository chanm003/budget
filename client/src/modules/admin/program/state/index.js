import { createSelector } from 'reselect';
import { handleActions } from 'redux-actions';
import { browserHistory } from '../../../../index';
import admin from '../../../../routes/admin';
import { generateBaseActions, generateBaseActionHandlers, baseThunks } from '../../../../store';
import { fromMapToArray } from '../../../../store';
import api from '../../../../api/program';

const {
    createProgramSuccess: createItemSuccess,
    updateProgramSuccess: updateItemSuccess,
    deleteProgramSuccess: deleteItemSuccess,
    loadProgramSuccess: loadItemSuccess,
    loadProgramsRequest: loadItemsRequest,
    loadProgramsSuccess: loadItemsSuccess,
    loadProgramsFailure: loadItemsFailure
} = generateBaseActions('PROGRAM', 'PROGRAMS');

const redirectUser = () => browserHistory.push(admin.programList.path);
const generateCreateItemSuccessToast = (item) => ({ title: 'Program created', description: `'${item.title}' has been created.` });
const generateUpdateItemSuccessToast = (item) => ({ title: 'Program updated', description: `Your changes have been saved.` })
const generateDeleteItemSuccessToast = (deleted) => ({ title: 'Program deleted', description: `'${deleted.title}' has been deleted.` });

export const createItem = baseThunks.createItem(api.createItem, createItemSuccess, generateCreateItemSuccessToast, redirectUser);
export const updateItem = baseThunks.updateItem(api.updateItem, updateItemSuccess, generateUpdateItemSuccessToast, redirectUser);
export const fetchItem = baseThunks.fetchItem(api.getItem, loadItemSuccess);
export const deleteItem = baseThunks.deleteItems(api.deleteItem, deleteItemSuccess, generateDeleteItemSuccessToast);
export const fetchItems = baseThunks.fetchItems(api.getItems, loadItemsRequest, loadItemsSuccess, loadItemsFailure);

const INITIAL_STATE = {
    isLoading: false,
    error: null,
    byId: {}
};

export default handleActions(
    {
        ...generateBaseActionHandlers('PROGRAM', 'PROGRAMS')
    },
    INITIAL_STATE
);

/*
*   Selectors
* */

export const getPrograms = createSelector(
    state => state.programs,
    ({ byId, isLoading, error }) => ({ items: fromMapToArray(byId), isLoading, error })
);