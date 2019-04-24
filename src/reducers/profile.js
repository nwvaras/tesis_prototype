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
} from '../constants';

const initialState = {
    isFetchingTalents: false,
    talentsError: false,
    statusText: null,
    talents: null,
};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE_GET_ALL_TALENTS_REQUEST:
            return Object.assign({}, state, {
                isFetchingTalents: true,
                talentsError: false
            });
        case PROFILE_GET_ALL_TALENTS_FAILURE:
            return Object.assign({}, state, {
                isFetchingTalents: false,
                talentsError: true,
                statusText: `Fetching Error: ${action.payload.status} - ${action.payload.statusText}`
            });
        case PROFILE_GET_ALL_TALENTS_SUCCESS:
            return Object.assign({}, state, {
                isFetchingTalents: false,
                talentsError: false,
                allTalents: action.payload.talents
            });
            
        case PROFILE_QUERY_TAGS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                tagsError: false
            });
        case PROFILE_QUERY_TAGS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                tagsError: true,
                statusText: `Fetching Error: ${action.payload.status} - ${action.payload.statusText}`
            });
        case PROFILE_QUERY_TAGS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                tagsError: false,
                fetchedTags: action.payload.fetchedTags
            });
            
        case PROFILE_SET_TAGS_REQUEST:
            return Object.assign({}, state, {
                isSettingTags: true,
                tagsError: false
            });
        case PROFILE_SET_TAGS_FAILURE:
            return Object.assign({}, state, {
                isSettingTags: false,
                setTagsError: true,
                statusText: `Set Tags Error: ${action.payload.status} - ${action.payload.statusText}`
            });
        case PROFILE_SET_TAGS_SUCCESS:
            return Object.assign({}, state, {
                isSettingTags: false,
                setTagsError: false,
                user: action.payload.user,
                token: action.payload.token,
            });
            
        default:
            return state;
    }
}