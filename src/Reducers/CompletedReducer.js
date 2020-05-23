import {
DELETE_COMPLETED
,CREATE_COMPLETED
} from "../Actions/types";


export default (state = [], action) => {
    var state_copy = [...state];
    switch(action.type){
        case DELETE_COMPLETED : 
            state_copy = [...state];
            return state_copy.filter((completed_task) => completed_task.task !== action.payload.task);
        case CREATE_COMPLETED : 
            state_copy = [...state];
            state_copy.unshift(action.payload);
            return state_copy;
        default:
            return state;
    }
}
    