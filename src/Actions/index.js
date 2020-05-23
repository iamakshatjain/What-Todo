import {
DELETE_TODO
,CREATE_TODO
,DELETE_COMPLETED
,CREATE_COMPLETED
} from "./types";

// delete todo
export const delete_todo = ( todo ) => ({
        payload : todo,
        type : DELETE_TODO
});

// create todo
export const create_todo = ( todo ) => ({
        payload : todo,
        type : CREATE_TODO
});

// delete completed
export const delete_completed = ( task ) => ({
    payload: task,
    type: DELETE_COMPLETED
});

// create completed
export const create_completed = ( task ) => ({
    payload: task,
    type: CREATE_COMPLETED
});