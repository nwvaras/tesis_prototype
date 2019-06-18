import fetch from 'isomorphic-fetch';
import { push } from 'connected-react-router';
import SERVER_URL from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import {
    CALL_GET_LIST_REQUEST,
    CALL_GET_LIST_SUCCESS,
    CALL_GET_LIST_FAILURE,
    CALL_APPLY_REQUEST,
    CALL_APPLY_SUCCESS,
    CALL_APPLY_FAILURE,
    CALL_GET_APPLIED_LIST_REQUEST,
    CALL_GET_APPLIED_LIST_SUCCESS,
    CALL_GET_APPLIED_LIST_FAILURE,
} from '../constants';
export function callGetListSuccess(calls) {
    return {
        type: CALL_GET_LIST_SUCCESS,
        payload: {
            calls
        }
    };
}

export function callGetListFailure(error, message) {
    return {
        type: CALL_GET_LIST_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}

export function callGetListRequest() {
    return {
        type: CALL_GET_LIST_REQUEST
    };
}
export function callGetAppliedListSuccess(appliedCalls) {
    return {
        type: CALL_GET_APPLIED_LIST_SUCCESS,
        payload: {
            appliedCalls
        }
    };
}

export function callGetAppliedListFailure(error, message) {
    return {
        type: CALL_GET_APPLIED_LIST_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}

export function callGetAppliedListRequest() {
    return {
        type: CALL_GET_APPLIED_LIST_REQUEST
    };
}

// export function authLogoutAndRedirect() {
//     return (dispatch, state) => {
//         dispatch(authLogout());
//         dispatch(push('/login-page'));
//         return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
//     };
// }

export function callGetList(token,keywords) {
    return (dispatch) => {
        const keys = keywords
        dispatch(callGetListRequest());
        return fetch(`${SERVER_URL}/api/v1/calls/search/?keywords=${keys}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) =>{

                dispatch(callGetListSuccess(response.results));
                if(token !== undefined && token !== '' && token !== null)dispatch(callGetAppliedList(token))
                // dispatch(push(redirect));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                    // Invalid authentication credentials
                    dispatch(authLogoutAndRedirect('/login-page'))
                    return error.response.json().then((data) => {
                        //dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    //dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
                } else {
                    // Most likely connection issues
                    //dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
                }

                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            }); 
    };
}
export function callGetAppliedList(token) {

    return (dispatch) => {
        dispatch(callGetAppliedListRequest());
        return fetch(`${SERVER_URL}/api/v1/calls/apply/`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(callGetAppliedListSuccess(response.calls_applied))
                // dispatch(push(redirect));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                    // Invalid authentication credentials
                                        dispatch(authLogoutAndRedirect('/login-page'))

                    return error.response.json().then((data) => {
                        //dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    //dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
                } else {
                    // Most likely connection issues
                    //dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
                }

                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}

export function authSignupUserSuccess(token, user, talents) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: AUTH_SIGNUP_USER_SUCCESS,
        payload: {
            token,
            user,
            talents
        }
    };
}

export function authSignupUserFailure(error, message) {
    localStorage.removeItem('token');
    return {
        type: AUTH_SIGNUP_USER_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}

export function authSignupUserRequest() {
    return {
        type: AUTH_SIGNUP_USER_REQUEST
    };
}
export function projectAppliedSuccess(response) {
    return {
        type: CALL_APPLY_SUCCESS,
        payload: {
            appliedCalls: response.calls_applied,
            statusText: response.message
        }
    };
}
export function ProjectApply(id,description,token) {
    return (dispatch) => {
        // dispatch(authSignupUserRequest());
        return fetch(`${SERVER_URL}/api/v1/calls/apply/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({'id' : id,'description' :description})
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(projectAppliedSuccess(response));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 400) {
                    // Already exists
                    return error.response.json().then((data) => {
                        dispatch(authSignupUserFailure(400, "Email already exists"));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                    // Invalid authentication credentials
                    return error.response.json().then((data) => {
                        dispatch(authSignupUserFailure(401, data.non_field_errors[0]));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    dispatch(authSignupUserFailure(500, 'A server error occurred while sending your data!'));
                } else {
                    // Most likely connection issues
                    dispatch(authSignupUserFailure('Connection Error', 'An error occurred while sending your data!'));
                }

                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}


export function authSetStep(newStep) {
    return {
        type: AUTH_SET_STEP,
        payload: {
            newStep: newStep,
            isProcessSuccess: false
        }
    };
}


export function authEditUserRequest() {
    return {
        type: AUTH_EDIT_USER_REQUEST
    };
}
export function authEditUserFailure(error, message) {
    return {
        type: AUTH_EDIT_USER_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}
export function authEditUserSuccess(user, token) {
    return {
        type: AUTH_EDIT_USER_SUCCESS,
        payload: {
            user: user,
            token: token
        }
    };
}
export function authEditUser(newData, token, redirect=false) {
    let formData = new FormData();
    const keys = Object.keys(newData);
    for ( let i=0; i<keys.length; i++ ) {
        if (Array.isArray(newData[keys[i]])) {
            formData.append(keys[i], JSON.stringify(newData[keys[i]]));
            /*for ( let u=0; u<newData[keys[i]].length; u++ ) {
                formData.append(keys[i]+'[]', JSON.stringify(newData[keys[i]][u]));
            }*/
        } else {
            formData.append(keys[i], newData[keys[i]]);
        }
    }
    return (dispatch) => {
        dispatch(authEditUserRequest());
        return fetch(`${SERVER_URL}/api/v1/profile/`, {
            method: 'put',
            headers: {
                'Authorization': `Token ${token}`
            },
            body: formData
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(authEditUserSuccess(response.user, response.token))
                if (redirect) {
                    dispatch(push("/"))
                }
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined') {
                    dispatch(authEditUserFailure(error.response.status, "Error editing user"));
                    return error.response;
                }
                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}