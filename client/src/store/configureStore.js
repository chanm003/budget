import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import budgetCategoryReducer from './budgetCategory';
import thunk from 'redux-thunk';

export function configureStore() {
  const reducers = {
    budgetCategory: budgetCategoryReducer
  };

  const rootReducer = combineReducers({
    ...reducers
  });

  const composeEnhancers =
      (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}