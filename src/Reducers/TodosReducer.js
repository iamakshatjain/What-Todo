import {
DELETE_TODO
,CREATE_TODO
,FETCH_TODOS
} from "../Actions/types";


export default (state = [], action) => {
    var state_copy = [...state];
    switch(action.type){
        case FETCH_TODOS :
            return [...action.payload];
        case DELETE_TODO : 
            state_copy = [...state];
            return state_copy.filter((todo) => todo.task !== action.payload.task);
        case CREATE_TODO : 
            state_copy = [...state];
            if(action.payload.created_at !== null)
                state_copy.unshift({ ...action.payload, done : false });
            return state_copy;
        default:
            return state;
    }
}
