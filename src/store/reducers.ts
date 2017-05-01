import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { baseReducer } from './reducer';

export const makeRootReducer = (asyncReducers?: ReducersMapObject): Reducer<any> => {
  return combineReducers({
    baseReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store: any, { key, reducer }: { key: string, reducer: any }): void => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;