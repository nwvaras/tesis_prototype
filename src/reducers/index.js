import { combineReducers } from 'redux';
import authReducer from './auth';
import dataReducer from './data';
import contestsReducer from './contests';
import profileReducer from './profile';
import callReducer from './call';
import { connectRouter } from 'connected-react-router';
export default (history) => combineReducers({
    auth: authReducer,
    data: dataReducer,
    // routing: routerReducer,
    contests: contestsReducer,
    call: callReducer,
    profile: profileReducer,
     router: connectRouter(history),
});
