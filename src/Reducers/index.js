// combining all the reducers to a single reducer
// defines the store schema
import {combineReducers} from 'redux';

// reducers
import TodosReducer from "./TodosReducer";
import CompletedReducer from "./CompletedReducer";

import {UPDATE_STATE, CLEAR_STATE} from "../Actions/types";

const default_state = {
    task : "",
    done : false,
    created_at : null,
    priority : 4,
    completed_at : null
};
// current state reducer
const CurrentStateReducer = (state = default_state, action ) => {
    switch(action.type){
        case UPDATE_STATE:
            return { ...action.payload };
        case CLEAR_STATE:
            return default_state;
        default :
            return state;
    }
}

export default combineReducers({
    todos : TodosReducer,
    completed : CompletedReducer,
    currentState : CurrentStateReducer
});