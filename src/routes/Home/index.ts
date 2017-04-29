import { injectReducer } from '../../store/reducers';
import { reducer } from './modules';
import * as container from './containers';

export const initReducer = (store: any) => {
  injectReducer(store, { key: 'data', reducer })
}
