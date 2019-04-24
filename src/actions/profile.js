import fetch from 'isomorphic-fetch';
import { push } from 'connected-react-router';
import SERVER_URL from '../utils/config';
import { checkHttpStatus, parseJSON } from '../utils';
import {
    PROFILE_GET_ALL_TALENTS_REQUEST,
    PROFILE_GET_ALL_TALENTS_FAILURE,
    PROFILE_GET_ALL_TALENTS_SUCCESS,
    PROFILE_QUERY_TAGS_REQUEST,
    PROFILE_QUERY_TAGS_FAILURE,
    PROFILE_QUERY_TAGS_SUCCESS,
    PROFILE_SET_TAGS_REQUEST,
    PROFILE_SET_TAGS_FAILURE,
    PROFILE_SET_TAGS_SUCCESS,
    PROFILE_SET_PROFILE_PIC_REQUEST,
    PROFILE_SET_PROFILE_PIC_FAILURE,
    PROFILE_SET_PROFILE_PIC_SUCCESS,
} from '../constants';


export function profileSetTalent(token, talent) {
    
}

export function profileGetAllTalentsRequest() {
    return {
        type: PROFILE_GET_ALL_TALENTS_REQUEST
    };
}
export function profileGetAllTalentsFailure(error, message) {
    return {
        type: PROFILE_GET_ALL_TALENTS_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}
export function profileGetAllTalentsSuccess(talents) {
    return {
        type: PROFILE_GET_ALL_TALENTS_SUCCESS,
        payload: {
            talents: talents,
        }
    };
}
export function profileGetAllTalents() {
    return (dispatch) => {
        dispatch(profileGetAllTalentsRequest());
        return fetch(`${SERVER_URL}/api/v1/profile/talents`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(profileGetAllTalentsSuccess(response.talents))
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined') {
                    dispatch(profileGetAllTalentsFailure(error.response.status, "Error retrieving talents"));
                    return error.response;
                }
                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}


export function profileQueryTagsRequest() {
    return {
        type: PROFILE_QUERY_TAGS_REQUEST
    };
}
export function profileQueryTagsFailure(error, message) {
    return {
        type: PROFILE_QUERY_TAGS_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}
export function profileQueryTagsSuccess(tags) {
    return {
        type: PROFILE_QUERY_TAGS_SUCCESS,
        payload: {
            fetchedTags: tags,
        }
    };
}
export function profileQueryTags(query, token) {
    return (dispatch) => {
        dispatch(profileQueryTagsRequest());
        return fetch(`${SERVER_URL}/api/v1/profile/tags/?name=${query}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(profileQueryTagsSuccess(response.results))
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined') {
                    dispatch(profileQueryTagsFailure(error.response.status, "Error retrieving tags"));
                    return error.response;
                }
                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}

/*
export function profileSetTagsRequest() {
    return {
        type: PROFILE_SET_TAGS_REQUEST
    };
}
export function profileSetTagsFailure(error, message) {
    return {
        type: PROFILE_SET_TAGS_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}
export function profileSetTagsSuccess(user, token) {
    return {
        type: PROFILE_SET_TAGS_SUCCESS,
        payload: {
            user: user,
            token: token
        }
    };
}
export function profileSetTags(tags, token) {
    return (dispatch) => {
        dispatch(profileSetTagsRequest());
        return fetch(`${SERVER_URL}/api/v1/profile/createTags/`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(tags)
        })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then((response) => {
                dispatch(profileSetTagsSuccess(response.user, response.token))
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined') {
                    dispatch(profileSetTagsFailure(error.response.status, "Error setting tags"));
                    return error.response;
                }
                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}*/