import {
    DATA_RECEIVE_CONTESTS_DATA,
    DATA_FETCH_CONTESTS_DATA_REQUEST
} from '../constants';

const initialState = {
    contests: [],
    isFetching: false,
    activeContest: null,
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_RECEIVE_CONTESTS_DATA:
            return Object.assign({}, state, {
                contests: action.payload.contests,
                isFetching: false
            });

        case DATA_FETCH_CONTESTS_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state;
    }
}
