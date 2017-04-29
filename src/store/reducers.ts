import { combineReducers, Reducer, ReducersMapObject } from 'redux'
import { baseReducer } from './reducer';
// DONE.


export const makeRootReducer = (asyncReducers?: ReducersMapObject): Reducer<any> => {
  return combineReducers({
    baseReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store: any, { key, reducer }: { key: string, reducer: any }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer