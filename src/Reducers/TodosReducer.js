import {
DELETE_TODO
,CREATE_TODO
} from "../Actions/types";


export default (state = [], action) => {
    var state_copy = [...state];
    switch(action.type){
        case DELETE_TODO : 
            state_copy = [...state];
            return state_copy.filter((todo) => todo.task !== action.payload.task);
        case CREATE_TODO : 
            state_copy = [...state];
            state_copy.unshift(action.payload);
            return state_copy;
        default:
            return state;
    }
}
