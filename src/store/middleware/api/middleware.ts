import CALL_API from './CALL_API';
import { actionWith, fetcher } from './utils';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
interface Action {
    meta: any;
    types: string[] | object[];
}
export const apiMiddleware = (store: any) => (next: any) => (action: any) => {
  // Check if the action is undefined if so pass it on
  if (!action) {
    return next(action);
  }

  const callApiAction = action[CALL_API] as Action;

  // Check if the middleware is concered with this action.
  if (typeof callApiAction === 'undefined') {
    return next(action);
  }

  let actionObject = callApiAction;
  let { meta, types } = actionObject;
  const [requestType, successType, failureType] = types;

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (typeof requestType !== 'string') {
    throw new Error('Expected request type to be a string.');
  }

  // Check if action a single API call
  if (typeof callApiAction !== 'undefined') {
    next(actionWith(action, { type: requestType }));

    return fetcher(action, store, next);
  }
};