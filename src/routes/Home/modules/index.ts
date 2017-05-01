import { combineReducers, ActionCreatorsMapObject } from 'redux';
import { CALL_API } from '../../../store/middleware/api';

export const ActionConstants = {
  REQUEST_DATA: 'REQUEST_DATA',
  RECEIVE_DATA: 'RECEIVE_DATA',
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAIL: 'FETCH_DATA_FAIL'
};

interface ActionCreator {
  type: string;
  payload?: any;
}

const requestData = (): ActionCreator => {
  return {
    type: ActionConstants.REQUEST_DATA
  };
};

const receiveData = (data: any): ActionCreator => {
  return {
    type: ActionConstants.RECEIVE_DATA,
    payload: data
  };
};

const fetchData = () => {
  return (dispatch: any) => {
    dispatch(requestData());
    return setTimeout(() => {
      const data = { message: 'Hello' };
      dispatch(receiveData(data));
    }, 300);
  };
};

const fetchApiData = () => {
  return {
    [CALL_API]: {
      // Add http endpoint here to test your functionality
      endpoint: 'https://httpbin.org/get',
      method: 'GET',
      types: [
        ActionConstants.FETCH_DATA,
        ActionConstants.FETCH_DATA_SUCCESS,
        ActionConstants.FETCH_DATA_FAIL
      ]
    }
  };
};

// HACK: Typings for interface mergin in index component
// TODO: Move to global typings or interfaces?
interface ActionCreatorMapObjectExtension extends ActionCreatorsMapObject {
  [key: string]: any;
}

export interface HomeActionCreators extends ActionCreatorMapObjectExtension {
  fetchData(): void;
  receiveData(data: any): void;
  requestData(): void;
  fetchApiData(): void;
}

export const ActionCreators: HomeActionCreators = {
  fetchData,
  receiveData,
  requestData,
  fetchApiData
};

export interface HomeState {
  isFetching: boolean;
  isFetchingApi: boolean;
  message: string;
  data: string;
}

const initialState: HomeState = {
  isFetching: false,
  isFetchingApi: false,
  message: '',
  data: ''
};

export const reducer = (state = initialState, action: ActionCreator) => {
  switch (action.type) {
    case ActionConstants.REQUEST_DATA:
      return { ...state, isFetching: true };
    case ActionConstants.RECEIVE_DATA:
      return { ...state, isFetching: false, message: action.payload.message };
    case ActionConstants.REQUEST_DATA:
      return { ...state, isFetchingApi: true };
    case ActionConstants.FETCH_DATA_SUCCESS:
      return { ...state, isFetchingApi: false, data: JSON.stringify(action.payload) };
    default:
      return state;
  }
};
