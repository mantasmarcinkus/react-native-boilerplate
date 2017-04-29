import { combineReducers } from "redux";

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

interface ActionCreator {
  type: string;
  // TODO: change this to standard "payload"
  data?: any;
}

export const requestData = (): ActionCreator => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = (data: any): ActionCreator => {
  return {
    type: RECEIVE_DATA,
    data
  };
};

export const fetchData = () => {
  return (dispatch: any) => {
    dispatch(requestData());
    return setTimeout(() => {
      const data = { message: "Hello" };
      dispatch(receiveData(data));
    }, 300);
  };
};

const initialState = {
  isFetching: false,
  message: ""
}
export const reducer = (state = initialState, action: ActionCreator) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state, isFetetching: true}
    case RECEIVE_DATA:
      return {...state, isFetetching: false, message: action.data.message}
    default:
      return state;
  }
};
