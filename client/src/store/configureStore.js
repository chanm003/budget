import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import directorateReducer from './directorate';
import thunk from 'redux-thunk';

export function configureStore() {
  const reducers = {
    directorate: directorateReducer
  };

  const rootReducer = combineReducers({
    ...reducers
  });

  const composeEnhancers =
      (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}