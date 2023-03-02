import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import room from './room';


const rootReducer = combineReducers({
    auth,
    profile,
    room,
})

export default rootReducer;
