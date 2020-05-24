import {
DELETE_TODO
,CREATE_TODO
,FETCH_TODOS
,DELETE_COMPLETED
,CREATE_COMPLETED
,FETCH_COMPLETED
} from "./types";

import axios from 'axios';

// todo : refactor the api calls
// fetch todos
export const fetch_todos = () => async dispatch => {
    const response = await axios.get("http://localhost:3001/t");
    dispatch({
        type : FETCH_TODOS,
        payload : response.data
    });
};

// delete todo
export const delete_todo = ( todo ) => async dispatch => {
        await axios.delete(`http://localhost:3001/t/${todo.id}`)
        dispatch({
            payload : todo,
            type : DELETE_TODO
        });
};

// create todo
export const create_todo = ( todo ) => async dispatch => {
    // with changed created_at
    let updated_todo = {...todo, created_at : new Date().getTime().toString(), done : false};
    const response = await axios.post(`http://localhost:3001/t`, updated_todo);
    const todo_id = response.data.id;
    dispatch({
        payload : { ...updated_todo, id : todo_id },
        type : CREATE_TODO
    });
};

// delete completed
export const delete_completed = ( task ) => async dispatch => {
    await axios.delete(`http://localhost:3001/c/${task.id}`)
    dispatch({
        payload : task,
        type : DELETE_COMPLETED
    });
};


// create completed
export const create_completed = ( task ) => async dispatch => {
    // task with updated completion time
    let updated_task = {...task, completed_at : new Date().getTime().toString(), done : true}
    const response = await axios.post(`http://localhost:3001/c`, updated_task);
    const task_id = response.data.id;
    dispatch({
        payload : { ...task, id : task_id },
        type : CREATE_COMPLETED
    });
};

// fetch completed
export const fetch_completed = () => async dispatch => {
    const response = await axios.get("http://localhost:3001/c");
    dispatch({
        type : FETCH_COMPLETED,
        payload : response.data
    });
}