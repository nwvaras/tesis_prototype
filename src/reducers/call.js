import {
   CALL_APPLY_FAILURE,
    CALL_APPLY_REQUEST,
    CALL_APPLY_SUCCESS,
    CALL_GET_APPLIED_LIST_FAILURE,
    CALL_GET_APPLIED_LIST_REQUEST,
    CALL_GET_APPLIED_LIST_SUCCESS,
    CALL_GET_LIST_FAILURE,
    CALL_GET_LIST_REQUEST,
    CALL_GET_LIST_SUCCESS,
} from '../constants';


const initialState = {
    calls: [],
    appliedCalls: [],
    isLoadingCalls: false,
    isLoadingApplied: false,
    isApplying: false,
    statusText: ""
};

export default function callReducer(state = initialState, action) {
    switch (action.type) {
        case CALL_GET_LIST_REQUEST:
            return Object.assign({}, state, {
                isLoadingCalls: true,
                calls:[]
            });

        case CALL_GET_LIST_SUCCESS:
            return Object.assign({}, state, {
                calls: action.payload.calls,
                isLoadingCalls:false,

            });

        case CALL_GET_LIST_FAILURE:
            return Object.assign({}, state, {
                isLoadingCalls: false,
                statusText: `${action.payload.status} - ${action.payload.statusText}`
            });
            
        case CALL_APPLY_REQUEST:
            return Object.assign({}, state, {
                isApplying: true,
            });

        case CALL_APPLY_SUCCESS:
            newCalls = []
            oldCalls = state.calls
            for (let i = 0; i < oldCalls.length ; i++){
                for (let u = 0; u < action.payload.appliedCalls.length ; u++){
                    if (oldCalls[i].id === action.payload.appliedCalls[u].project_id){
                        oldCalls[i].is_applied = true

                    }
                }
                newCalls.push(oldCalls[i])

            }
            return Object.assign({}, state, {
                isApplying: false,
                calls: newCalls,
                appliedCalls: action.payload.appliedCalls,
                statusText: `¡Felicidades!: ${action.payload.statusText}`
            });

        case CALL_APPLY_FAILURE:
            return Object.assign({}, state, {
                isApplying: false,
                statusText: "Error"
            });
        case CALL_GET_APPLIED_LIST_REQUEST:
            return Object.assign({}, state, {
                isLoadingApplied: true,
            });
        case CALL_GET_APPLIED_LIST_FAILURE:
            return Object.assign({}, state, {
                isLoadingApplied: false,
                statusText: `Applying error: ${action.payload.status} - ${action.payload.statusText}`
            });
        case CALL_GET_APPLIED_LIST_SUCCESS:
            let newCalls = []
            let oldCalls = state.calls
            for (let i = 0; i < oldCalls.length ; i++){
                for (let u = 0; u < action.payload.appliedCalls.length ; u++){
                    if (oldCalls[i].id === action.payload.appliedCalls[u].project_id){
                        oldCalls[i].is_applied = true

                    }
                }
                newCalls.push(oldCalls[i])

            }
            return Object.assign({}, state, {
                isLoadingApplied: false,
                appliedCalls: action.payload.appliedCalls,
                calls: newCalls
            });
        default:
            return state;
    }
}

