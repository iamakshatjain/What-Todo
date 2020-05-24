import {
DELETE_COMPLETED
,CREATE_COMPLETED,
FETCH_COMPLETED
} from "../Actions/types";


export default (state = [], action) => {
    var state_copy = [...state];
    switch(action.type){
        case FETCH_COMPLETED :
            return [...action.payload];
        case DELETE_COMPLETED : 
            state_copy = [...state];
            return state_copy.filter((completed_task) => completed_task.task !== action.payload.task);
        case CREATE_COMPLETED : 
            state_copy = [...state];
            if(action.payload.created_at !== null)
                state_copy.unshift({ ...action.payload, done : true, completed_at : new Date() });
            return state_copy;
        default:
            return state;
    }
}
    