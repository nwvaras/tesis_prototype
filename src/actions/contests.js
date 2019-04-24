import fetch from 'isomorphic-fetch';
import { push } from 'connected-react-router';

import SERVER_URL from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import { DATA_FETCH_CONTESTS_DATA_REQUEST, DATA_RECEIVE_CONTESTS_DATA } from '../constants';
import { authLoginUserFailure } from './auth';

export function dataReceiveContestsData(data) {
  const cons = data.contests;
  return {
    type: DATA_RECEIVE_CONTESTS_DATA,
    payload: {
      contests: cons
    }
  };
}

export function dataFetchContestsDataRequest() {
  return {
    type: DATA_FETCH_CONTESTS_DATA_REQUEST
  };
}

export function dataFetchContestsData(token, id) {
  let url = `${SERVER_URL}/api/v1/getdata/contests/`;

  if (id !== undefined) url = `${SERVER_URL}/api/v1/getdata/contests/?id=${id}`;
  return (dispatch, state) => {
    dispatch(dataFetchContestsDataRequest());
    let headers = "";
    if (token === undefined || token === null) {
      headers = {
        Accept: 'application/json'
      };
    }
    else {
      headers = {
        Accept: 'application/json',
        Authorization: `Token ${token}`
      };
    }
    return fetch(url, {
        credentials: 'include',
        headers: headers
      })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then((response) => {
        dispatch(dataReceiveContestsData(response.data));
      })
      .catch((error) => {
        if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
          // Invalid authentication credentials
          return error.response.json().then((data) => {
            dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
            dispatch(push('/login'));
          });
        }
        else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
          // Server side error
          dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
        }
        else {
          // Most likely connection issues
          dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
        }

        dispatch(push('/login'));
        return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
      });
  };
}
