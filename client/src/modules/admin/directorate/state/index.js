import { createSelector } from 'reselect';
import { handleActions } from 'redux-actions';
import { browserHistory } from '../../../../index';
import admin from '../../../../routes/admin';
import { generateBaseActions, generateBaseActionHandlers, generateBaseIntitialState, baseThunks } from '../../../../store';
import { fromMapToArray } from '../../../../store';
import api from '../../../../api/directorate';

const {
    createDirectorateSuccess: createItemSuccess,
    updateDirectorateSuccess: updateItemSuccess,
    deleteDirectorateSuccess: deleteItemSuccess,
    loadDirectorateSuccess: loadItemSuccess,
    loadDirectoratesRequest: loadItemsRequest,
    loadDirectoratesSuccess: loadItemsSuccess,
    loadDirectoratesFailure: loadItemsFailure
} = generateBaseActions('DIRECTORATE', 'DIRECTORATES');

const redirectUser = () => browserHistory.push(admin.directorateList.path);
const generateCreateItemSuccessToast = (item) => ({ title: 'Directorate created', description: `'${item.title}' has been created.` });
const generateUpdateItemSuccessToast = (item) => ({ title: 'Directorate updated', description: `Your changes have been saved.` })
const generateDeleteItemSuccessToast = (deleted) => ({ title: 'Directorate deleted', description: `'${deleted.title}' has been deleted.` });

export const createItem = baseThunks.createItem(api.createItem, createItemSuccess, generateCreateItemSuccessToast, redirectUser);
export const updateItem = baseThunks.updateItem(api.updateItem, updateItemSuccess, generateUpdateItemSuccessToast, redirectUser);
export const fetchItem = baseThunks.fetchItem(api.getItem, loadItemSuccess);
export const deleteItem = baseThunks.deleteItems(api.deleteItem, deleteItemSuccess, generateDeleteItemSuccessToast);
export const fetchItems = baseThunks.fetchItems(api.getItems, loadItemsRequest, loadItemsSuccess, loadItemsFailure);

const INITIAL_STATE = {
    ...generateBaseIntitialState()
};

export default handleActions(
    {
        ...generateBaseActionHandlers('DIRECTORATE', 'DIRECTORATES')
    },
    INITIAL_STATE
);

/*
*   Selectors
* */

export const getDirectorates = createSelector(
    state => state.directorates,
    ({ byId, isLoading, error }) => ({ items: fromMapToArray(byId), isLoading, error })
);