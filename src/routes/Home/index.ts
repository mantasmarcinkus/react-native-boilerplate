import { injectReducer } from '../../store/reducers';
import { reducer } from './modules';
import * as container from './containers';

export const initReducer = (store: any) : void => {
  injectReducer(store, { key: 'data', reducer });
};
