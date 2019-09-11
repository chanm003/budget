import * as _ from 'lodash';
import { createActions } from 'redux-actions';
import { actions as common } from '../modules/common/state';

export function addItemsToMap(existingMap, items) {
    const itemMapping = items.reduce((accumulator, item) => {
        accumulator[item._id] = item;
        return accumulator;
    }, {});

    return { ...existingMap, ...itemMapping };
}

export function fromMapToArray(mapping) {
    return Object.keys(mapping).map(key => mapping[key]);
}

export function removeItemFromMap(existingMap, key) {
    return _.omit(existingMap, key); 
}

export function generateBaseIntitialState() {
    return {
        isLoading: false,
        error: null,
        byId: {}
    };
}

export function generateBaseActions(entityName, entityNamePlural) {
    return createActions(
        `CREATE_${entityName}_SUCCESS`,
        `UPDATE_${entityName}_SUCCESS`,
        `DELETE_${entityName}_SUCCESS`,
        `LOAD_${entityName}_SUCCESS`,
        `LOAD_${entityNamePlural}_REQUEST`,
        `LOAD_${entityNamePlural}_SUCCESS`,
        `LOAD_${entityNamePlural}_FAILURE`
    );
}

export function generateBaseActionHandlers(entityName, entityNamePlural) {
    const map = {
        [`CREATE_${entityName}_SUCCESS`]: newItemSuccess,
        [`UPDATE_${entityName}_SUCCESS`]: updateItemSuccess,
        [`DELETE_${entityName}_SUCCESS`]: deleteItemSuccess,
        [`LOAD_${entityName}_SUCCESS`]: loadItemSuccess,
        [`LOAD_${entityNamePlural}_REQUEST`]: loadItemsRequest,
        [`LOAD_${entityNamePlural}_SUCCESS`]: loadItemsSuccess,
        [`LOAD_${entityNamePlural}_FAILURE`]: loadItemsFailure,
    };
    return map;
}

export const baseThunks = {
    createItem: (createItem, success, generateSuccessToast, onItemSaved) =>  formValues => async (dispatch, getState) => {
        try {
            const item = await createItem(formValues);
            dispatch(success(item));
            onItemSaved();
            dispatch(common.showSuccessMessage(generateSuccessToast(item)));
        } catch (err) {
            dispatch(common.showErrorMessage({ title: 'Error', description: `Error occured while trying to create this item. Please try again at a later time.` }));
        }
    },
    deleteItems: (deleteItem, success, generateSuccessToast) => (id) => async (dispatch, getState) => {
        try {
            const deleted = await deleteItem(id);
            dispatch(success(deleted));
            dispatch(common.showSuccessMessage(generateSuccessToast(deleted)));
        } catch (err) {
            dispatch(common.showErrorMessage({ title: 'Error', description: `Error occured while trying to delete this item. Please try again at a later time.` }));
        }
    },
    fetchItem: (fetchItem, success) => id => async (dispatch, getState) => {
        try {
            const item = await fetchItem(id);
            dispatch(success(item));
        } catch (err) {
        }
    },
    fetchItems: (fetchItems, request, success, failure) => () => async (dispatch, getState) => {
        try {
            dispatch(request());
            const response = await fetchItems();
            dispatch(success(response));
        } catch (err) {
            dispatch(failure(err));
        }
    },
    updateItem: (updateItem, success, generateSuccessToast, onItemSaved) => (id, formValues) => async (dispatch, getState) => {
        try {
            const item = await updateItem(id, formValues);
            dispatch(success(item));
            onItemSaved();
            dispatch(common.showSuccessMessage(generateSuccessToast(item)));
        } catch (err) {
            dispatch(common.showErrorMessage({ title: 'Error', description: `Error occured while trying to update this item. Please try again at a later time.` }));
        }
    }
};

const newItemSuccess = (prevState, action) => {
    return {
        ...prevState,
        byId: addItemsToMap(prevState.byId, [action.payload])
    };
}

const updateItemSuccess = (prevState, action) => {
    return {
        ...prevState,
        byId: addItemsToMap(prevState.byId, [action.payload])
    };
}

const deleteItemSuccess = (prevState, action) => {
    return {
        ...prevState,
        byId: removeItemFromMap(prevState.byId, action.payload._id)
    };
}

const loadItemSuccess = (prevState, action) => {
    return {
        ...prevState,
        error: null,
        isLoading: false,
        byId: addItemsToMap(prevState.byId, [action.payload])
    };
}

const loadItemsRequest = (prevState, action) => {
    return {
        ...prevState,
        isLoading: true,
        error: null
    };
}

const loadItemsSuccess = (prevState, action) => {
    return {
        ...prevState,
        error: null,
        isLoading: false,
        byId: addItemsToMap(prevState.byId, action.payload)
    };
}

const loadItemsFailure = (prevState, action) => {
    return {
        ...prevState,
        error: 'Some error occured. Please try agiain.',
        isLoading: false
    };
}