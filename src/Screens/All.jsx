// essentials
import React from 'react';
import {connect} from 'react-redux';

import {create_todo} from "../Actions";
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
                <List list={this.props.todo_list} />
                <h1>Completed</h1>
                <List list={this.props.completed} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {todo_list : state.todos, completed : state.completed}
}

export default connect(mapStateToProps, {create_todo})(All);