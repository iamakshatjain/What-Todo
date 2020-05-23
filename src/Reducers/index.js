// combining all the reducers to a single reducer
// defines the store schema
import {combineReducers} from 'redux';

// reducers
import TodosReducer from "./TodosReducer";
import CompletedReducer from "./CompletedReducer";

export default combineReducers({
    todos : TodosReducer,
    completed : CompletedReducer
});