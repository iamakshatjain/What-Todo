// essentials
import React from 'react';
import {connect} from 'react-redux';

import {create_todo, delete_todo, create_completed, delete_completed} from "../Actions";
import List from "../Components/List";
import TaskInput from "../Components/TaskInput";

// renders the list of all the todos
class All extends React.Component{
    state = {
        task : "",
        done : false,
        created_at : null,
        priority : 4,
        completed_at : null
    }

    createTask = (event) => {
        // to handle the form submit of creating a task
        event.preventDefault();
        let todo = { ...this.state, created_at : new Date()};
        console.log(todo);
        this.props.create_todo(todo);
        this.setState({
            task : "",
            done : false,
            created_at : null,
            priority : 4,
            completed_at : null
        });
    }
    
    render(){

        return(
            <>
                <TaskInput />
                <h1>Todo</h1>
                <List type="TODO" />
                <h1>Completed</h1>
                <List type="COMPLETED" />
            </>
        )
    }
}

export default connect(null, {create_todo, delete_todo, create_completed, delete_completed})(All);