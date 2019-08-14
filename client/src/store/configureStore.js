import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as SideMenu from "./SideMenu";
import * as UserManagement from "./UserManagement";
import * as SearchStore from "./SearchStore";
import budgetCategoryReducer from './BudgetCategory';

export default function configureStore() {
  const reducers = {
    budgetCategory: budgetCategoryReducer,
    sideMenu: SideMenu.reducer,
    userManagement: UserManagement.reducer,
    searchStore: SearchStore.reducer,
  };

  const rootReducer = combineReducers({
    ...reducers
  });

  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
    compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
