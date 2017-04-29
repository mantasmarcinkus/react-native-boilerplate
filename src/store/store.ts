import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import makeRootReducer from './reducers';

// DONE
interface StoreWithAsyncReducers<S> extends Store<S> {
  asyncReducers?: any
}
const configureStore = function (initialState = {}) {
  const middleware = [createLogger(), thunkMiddleware];
  const store: StoreWithAsyncReducers<any> = createStore(
    makeRootReducer(),
    initialState,
    compose(applyMiddleware(...middleware))
  );

  store.asyncReducers = {};

  return store;
};

export default configureStore;
