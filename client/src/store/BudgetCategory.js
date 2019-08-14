import { createActions, handleActions } from 'redux-actions';
import budgetApi from '../apis/budget';

const INITIAL_STATE = {
    items: []
};

const LOAD_BUDGET_CATEGORIES = 'LOAD_BUDGET_CATEGORIES';

export const {
    loadBudgetCategories
  } = createActions(
  LOAD_BUDGET_CATEGORIES);

export const fetchBudgetCategories = () => async (dispatch, getState) => {
    //dispatch action to show loader
    const response = await budgetApi.getBudgetCategories();
    dispatch(loadBudgetCategories(response.budgetCategories));   
    //dispatch action to hide loader
};

export default handleActions (
    {
      LOAD_BUDGET_CATEGORIES: (state, action) => {
        return {
          ...state,
          items: action.payload,
        };
      }
    },
    INITIAL_STATE
  );