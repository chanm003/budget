import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import directorateReducer from '../modules/admin/directorate/state';
import commonReducer from '../modules/common/state';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';

export function configureStore() {
  const reducers = {
    ...commonReducer,
    ...directorateReducer
  };

  const rootReducer = combineReducers({
    ...reducers,
    form: reduxFormReducer
  });

  const composeEnhancers =
      (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}