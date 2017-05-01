import CALL_API from './CALL_API';

export const actionWith = (action: any, data: any) => {
  const finalAction = Object.assign({}, action, data);
  delete finalAction[CALL_API];
  return finalAction;
};

interface Response {
  status: number;
  statusText: string;
  headers: any;
  url: string;
}
export const responseFunction = (response: Response, action: any, store: any, next: any) => {
  let { meta, types } = action[CALL_API];
  let successType = types[1];
  let isSuccessTypeComplex = typeof (successType) === 'object' && typeof (successType.type) === 'string' && typeof (successType.then) === 'function';
  if (isSuccessTypeComplex) {
    next(actionWith(action, { payload: response, type: successType.type, meta }));
    successType.then(store.dispatch, store.getState, response);
  } else {
    next(actionWith(action, { payload: response, type: successType, meta }));
  }
};

export const errorFunction = (error: any, action: any, store: any, next: any) => {
  let { meta, types } = action[CALL_API];
  let failureType = types[2];
  let isFailureTypeComplex = typeof (failureType) === 'object' && typeof (failureType.type) === 'string' && typeof (failureType.then) === 'function';
  if (isFailureTypeComplex) {
    next(actionWith(action, { type: failureType.type, payload: { error }, meta }));
    failureType.then(store.dispatch, store.getState, error);
  } else {
    next(actionWith(action, { type: failureType, payload: { error }, meta }));
  }
};

interface HTTPOptions {
  method: string;
  headers: string;
  body?: string | null;
  data?: any;
}

export const fetcher = (action: any, store: any, next: any) => {
  let { meta, endpoint, method, body, headers, data } = action[CALL_API];

  if (!method) {
    method = 'GET';
  }

  let options: HTTPOptions = { method, headers };
  if (body) {
    options.body = JSON.stringify(body);
  } else {
    options.body = null;
  }

  if (data) {
    options.data = data;
  } else {
    options.data = null;
  }

  return new Promise((fulfill, reject) => {
    let o: {method: string, headers: any, body?: string} = {
      method: options.method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // undefined body cannot be added because it will be parsed
    if (options.data || options.body) {
      o.body = JSON.stringify(options.data || options.body);
    }

    fetch(endpoint, o).then(function (response: Response) {
      responseFunction(response, action, store, next);
    }, function (error) {
      errorFunction(error, action, store, next);
      reject(error);
    });
  });
};

